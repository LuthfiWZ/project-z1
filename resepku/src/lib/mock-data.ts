import type {
  Category,
  Recipe,
  ShoppingItem,
  User,
} from "@/types";

export const mockUser: User = {
  id: "user-001",
  name: "Ayu",
  email: "ayu@example.com",
  role: "user",
};

export const mockAdmin: User = {
  id: "admin-001",
  name: "Admin Resepku",
  email: "admin@example.com",
  role: "admin",
};

export const mockCategories: Category[] = [
  { id: "cat-1", name: "Sarapan", slug: "sarapan" },
  { id: "cat-2", name: "Makanan Utama", slug: "makanan-utama" },
  { id: "cat-3", name: "Sayuran", slug: "sayuran" },
  { id: "cat-4", name: "Sup", slug: "sup" },
  { id: "cat-5", name: "Camilan", slug: "camilan" },
  { id: "cat-6", name: "Minuman", slug: "minuman" },
];

const recipeSeed = [
  {
    id: "recipe-001",
    title: "Nasi Goreng Spesial",
    description: "Nasi goreng rumahan dengan telur dan sayuran.",
    category: "Sarapan",
    cookingTime: 20,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=900&auto=format&fit=crop&q=80",
    ingredients: [
      { id: "i-1", name: "Nasi putih", quantity: 400, unit: "gram", category: "Karbohidrat" },
      { id: "i-2", name: "Telur", quantity: 2, unit: "butir", category: "Protein" },
      { id: "i-3", name: "Bawang putih", quantity: 2, unit: "siung", category: "Bumbu" },
      { id: "i-4", name: "Kecap manis", quantity: 2, unit: "sdm", category: "Bumbu" },
    ],
  },
  {
    id: "recipe-002",
    title: "Soto Ayam",
    description: "Soto ayam hangat dengan kuah kuning dan rempah.",
    category: "Sup",
    cookingTime: 50,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&auto=format&fit=crop&q=80",
    ingredients: [
      { id: "i-5", name: "Ayam", quantity: 500, unit: "gram", category: "Protein" },
      { id: "i-6", name: "Bihun", quantity: 100, unit: "gram", category: "Karbohidrat" },
      { id: "i-7", name: "Kunyit", quantity: 2, unit: "cm", category: "Bumbu" },
    ],
  },
  {
    id: "recipe-003",
    title: "Tumis Kangkung",
    description: "Tumis kangkung sederhana dengan bawang dan cabai.",
    category: "Sayuran",
    cookingTime: 15,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&auto=format&fit=crop&q=80",
    ingredients: [
      { id: "i-8", name: "Kangkung", quantity: 2, unit: "ikat", category: "Sayuran" },
      { id: "i-9", name: "Bawang putih", quantity: 3, unit: "siung", category: "Bumbu" },
      { id: "i-10", name: "Cabai merah", quantity: 3, unit: "buah", category: "Bumbu" },
    ],
  },
  {
    id: "recipe-004",
    title: "Rendang Daging",
    description: "Daging sapi berbumbu santan dan rempah.",
    category: "Makanan Utama",
    cookingTime: 180,
    servings: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&auto=format&fit=crop&q=80",
    ingredients: [
      { id: "i-11", name: "Daging sapi", quantity: 1000, unit: "gram", category: "Protein" },
      { id: "i-12", name: "Santan", quantity: 800, unit: "ml", category: "Bahan pokok" },
      { id: "i-13", name: "Serai", quantity: 2, unit: "batang", category: "Bumbu" },
    ],
  },
  {
    id: "recipe-005",
    title: "Gado-Gado",
    description: "Sayuran rebus dengan saus kacang gurih.",
    category: "Sayuran",
    cookingTime: 30,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&auto=format&fit=crop&q=80",
    ingredients: [
      { id: "i-14", name: "Tahu", quantity: 2, unit: "buah", category: "Protein" },
      { id: "i-15", name: "Kentang", quantity: 2, unit: "buah", category: "Sayuran" },
      { id: "i-16", name: "Kacang tanah", quantity: 100, unit: "gram", category: "Bumbu" },
    ],
  },
  {
    id: "recipe-006",
    title: "Sate Ayam",
    description: "Sate ayam panggang dengan saus kacang.",
    category: "Makanan Utama",
    cookingTime: 40,
    servings: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1529563021893-cc83c992d75b?w=900&auto=format&fit=crop&q=80",
    ingredients: [
      { id: "i-17", name: "Dada ayam", quantity: 500, unit: "gram", category: "Protein" },
      { id: "i-18", name: "Kecap manis", quantity: 3, unit: "sdm", category: "Bumbu" },
    ],
  },
  {
    id: "recipe-007",
    title: "Opor Ayam",
    description: "Ayam berkuah santan dengan bumbu aromatik.",
    category: "Makanan Utama",
    cookingTime: 60,
    servings: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&auto=format&fit=crop&q=80",
    ingredients: [
      { id: "i-19", name: "Ayam", quantity: 800, unit: "gram", category: "Protein" },
      { id: "i-20", name: "Santan", quantity: 500, unit: "ml", category: "Bahan pokok" },
    ],
  },
  {
    id: "recipe-008",
    title: "Pisang Goreng",
    description: "Pisang berbalut adonan renyah untuk camilan.",
    category: "Camilan",
    cookingTime: 20,
    servings: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&auto=format&fit=crop&q=80",
    ingredients: [
      { id: "i-21", name: "Pisang", quantity: 6, unit: "buah", category: "Buah" },
      { id: "i-22", name: "Tepung terigu", quantity: 150, unit: "gram", category: "Bahan pokok" },
    ],
  },
  {
    id: "recipe-009",
    title: "Mie Goreng Jawa",
    description: "Mi goreng dengan sayuran dan bumbu khas Jawa.",
    category: "Makanan Utama",
    cookingTime: 25,
    servings: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900&auto=format&fit=crop&q=80",
    ingredients: [
      { id: "i-23", name: "Mi telur", quantity: 200, unit: "gram", category: "Karbohidrat" },
      { id: "i-24", name: "Telur", quantity: 2, unit: "butir", category: "Protein" },
    ],
  },
  {
    id: "recipe-010",
    title: "Bubur Ayam",
    description: "Bubur nasi lembut dengan suwiran ayam.",
    category: "Sarapan",
    cookingTime: 45,
    servings: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=900&auto=format&fit=crop&q=80",
    ingredients: [
      { id: "i-25", name: "Beras", quantity: 200, unit: "gram", category: "Karbohidrat" },
      { id: "i-26", name: "Ayam", quantity: 250, unit: "gram", category: "Protein" },
    ],
  },
];

export const mockRecipes: Recipe[] = recipeSeed.map((recipe, index) => ({
  ...recipe,
  authorId: "user-001",
  authorName: "Ayu",
  isPublic: true,
  isFavorite: index === 0 || index === 2,
  createdAt: "2026-10-01T08:00:00.000Z",
  steps: [
    {
      id: `${recipe.id}-step-1`,
      instruction: "Siapkan dan bersihkan semua bahan.",
    },
    {
      id: `${recipe.id}-step-2`,
      instruction: "Masak bahan dengan bumbu hingga matang dan sajikan.",
    },
  ],
}));

export const mockShoppingItems: ShoppingItem[] = [
  {
    id: "shop-1",
    name: "Telur",
    quantity: 4,
    unit: "butir",
    category: "Protein",
    isPurchased: true,
    isManual: false,
  },
  {
    id: "shop-2",
    name: "Kangkung",
    quantity: 2,
    unit: "ikat",
    category: "Sayuran",
    isPurchased: false,
    isManual: false,
  },
  {
    id: "shop-3",
    name: "Bawang putih",
    quantity: 5,
    unit: "siung",
    category: "Bumbu",
    isPurchased: false,
    isManual: false,
  },
];