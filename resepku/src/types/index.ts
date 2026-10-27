export type UserRole = "user" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
}

export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category?: string;
}

export interface RecipeStep {
  id: string;
  instruction: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  servings: number;
  cookingTime: number;
  isPublic: boolean;
  authorId: string;
  authorName: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  isFavorite?: boolean;
  createdAt: string;
}

export type MealType = "breakfast" | "lunch" | "dinner";

export interface MealPlanItem {
  id: string;
  date: string;
  mealType: MealType;
  recipeId: string;
  recipeTitle: string;
  recipeImageUrl: string;
  servings: number;
}

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  isPurchased: boolean;
  isManual: boolean;
}

export interface RecipeFilters {
  search?: string;
  category?: string;
  maxTime?: number;
  public?: boolean;
}

export interface ApiError {
  message: string;
  status?: number;
}

export interface DashboardSummary {
  userName: string;
  todayMeals: MealPlanItem[];
  favoriteRecipes: Recipe[];
  shoppingProgress: {
    purchased: number;
    total: number;
  };
  weeklySummary: {
    plannedMeals: number;
    plannedDays: number;
    uniqueRecipes: number;
  };
}

export interface AuthResponse {
  user: User;
  token?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface AdminUser extends User {
  createdAt: string;
  isActive: boolean;
}