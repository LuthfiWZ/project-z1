import {
  mockCategories,
  mockRecipes,
  mockShoppingItems,
  mockUser,
} from "@/lib/mock-data";

import type {
  AuthResponse,
  Category,
  MealPlanItem,
  Recipe,
  RecipeFilters,
  ShoppingItem,
  User,
} from "@/types";

const USE_MOCK = process.env.USE_MOCK !== "false";

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"
).replace(/\/$/, "");

async function request<T>(
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);

    throw new Error(
      body?.message || `Permintaan gagal (${response.status})`,
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

function filterRecipes(filters: RecipeFilters = {}): Recipe[] {
  return mockRecipes.filter((recipe) => {
    const search = filters.search?.trim().toLowerCase();

    if (
      search &&
      !recipe.title.toLowerCase().includes(search) &&
      !recipe.description.toLowerCase().includes(search)
    ) {
      return false;
    }

    if (
      filters.category &&
      filters.category !== "Semua" &&
      recipe.category !== filters.category
    ) {
      return false;
    }

    if (
      filters.maxTime !== undefined &&
      recipe.cookingTime > filters.maxTime
    ) {
      return false;
    }

    if (filters.public === true && !recipe.isPublic) {
      return false;
    }

    return true;
  });
}

export const api = {
  async login(email: string, password: string): Promise<AuthResponse> {
    if (USE_MOCK) {
      if (!email.trim() || !password) {
        throw new Error("Email dan password wajib diisi.");
      }

      const role = email.toLowerCase().includes("admin")
        ? "admin"
        : "user";

      const user: User = {
        ...mockUser,
        id: role === "admin" ? "admin-001" : "user-001",
        name: role === "admin" ? "Admin Resepku" : "Ayu",
        email,
        role,
      };

      return { user };
    }

    return request<AuthResponse>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },

  async register(input: {
    name: string;
    email: string;
    password: string;
  }): Promise<AuthResponse> {
    if (USE_MOCK) {
      if (!input.name.trim() || !input.email.trim() || !input.password) {
        throw new Error("Semua data wajib diisi.");
      }

      return {
        user: {
          id: `user-${Date.now()}`,
          name: input.name,
          email: input.email,
          role: "user",
        },
      };
    }

    return request<AuthResponse>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(input),
    });
  },

  async logout(): Promise<void> {
    if (USE_MOCK) return;

    await request<void>("/api/auth/logout", { method: "POST" });
  },

  async getRecipes(filters: RecipeFilters = {}): Promise<Recipe[]> {
    if (USE_MOCK) return filterRecipes(filters);

    const params = new URLSearchParams();

    if (filters.search) params.set("search", filters.search);
    if (filters.category) params.set("category", filters.category);
    if (filters.maxTime !== undefined) {
      params.set("maxTime", String(filters.maxTime));
    }
    if (filters.public !== undefined) {
      params.set("public", String(filters.public));
    }

    const query = params.toString();

    return request<Recipe[]>(`/api/recipes${query ? `?${query}` : ""}`);
  },

  async getRecipe(id: string): Promise<Recipe> {
    if (USE_MOCK) {
      const recipe = mockRecipes.find((item) => item.id === id);

      if (!recipe) throw new Error("Resep tidak ditemukan.");

      return recipe;
    }

    return request<Recipe>(`/api/recipes/${id}`);
  },

  async createRecipe(
    input: Omit<Recipe, "id" | "createdAt">,
  ): Promise<Recipe> {
    if (USE_MOCK) {
      const recipe: Recipe = {
        ...input,
        id: `recipe-${Date.now()}`,
        createdAt: new Date().toISOString(),
      };

      mockRecipes.unshift(recipe);
      return recipe;
    }

    return request<Recipe>("/api/recipes", {
      method: "POST",
      body: JSON.stringify(input),
    });
  },

  async updateRecipe(
    id: string,
    input: Partial<Recipe>,
  ): Promise<Recipe> {
    if (USE_MOCK) {
      const index = mockRecipes.findIndex((item) => item.id === id);

      if (index < 0) throw new Error("Resep tidak ditemukan.");

      mockRecipes[index] = { ...mockRecipes[index], ...input };

      return mockRecipes[index];
    }

    return request<Recipe>(`/api/recipes/${id}`, {
      method: "PUT",
      body: JSON.stringify(input),
    });
  },

  async deleteRecipe(id: string): Promise<void> {
    if (USE_MOCK) {
      const index = mockRecipes.findIndex((item) => item.id === id);

      if (index < 0) throw new Error("Resep tidak ditemukan.");

      mockRecipes.splice(index, 1);
      return;
    }

    await request<void>(`/api/recipes/${id}`, { method: "DELETE" });
  },

  async getCategories(): Promise<Category[]> {
    if (USE_MOCK) return mockCategories;

    return request<Category[]>("/api/admin/categories");
  },

  async getFavorites(): Promise<Recipe[]> {
    if (USE_MOCK) {
      return filterRecipes().filter((recipe) => recipe.isFavorite);
    }

    return request<Recipe[]>("/api/favorites");
  },

  async toggleFavorite(
    recipeId: string,
    favorite: boolean,
  ): Promise<void> {
    if (USE_MOCK) {
      const recipe = mockRecipes.find((item) => item.id === recipeId);

      if (!recipe) throw new Error("Resep tidak ditemukan.");

      recipe.isFavorite = favorite;
      return;
    }

    await request<void>(`/api/favorites/${recipeId}`, {
      method: favorite ? "POST" : "DELETE",
    });
  },

  async getShoppingList(): Promise<ShoppingItem[]> {
    if (USE_MOCK) return mockShoppingItems;

    return request<ShoppingItem[]>("/api/shopping-list");
  },

  async getMealPlans(weekStart: string): Promise<MealPlanItem[]> {
    if (USE_MOCK) return [];

    return request<MealPlanItem[]>(
      `/api/meal-plans?weekStart=${encodeURIComponent(weekStart)}`,
    );
  },
};