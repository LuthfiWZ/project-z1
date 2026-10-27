🍳 Resepku

Dari resep ke daftar belanja dalam satu klik.

Resepku adalah aplikasi web (SaaS) untuk manajemen resep dan rencana makan. Pengguna dapat menyimpan resep, menyusun menu mingguan di kalender, lalu sistem otomatis membuat daftar belanja gabungan dari semua menu yang direncanakan.

🔗 Website:  <!-- ganti dengan URL produksi -->

Kelompok 4
Ketua : Muhammad Luhtfi Anshari
Anggota 1 : Muhammad Zaini Abdul Ghoni
Anggota 2 : Andi Muhammad Riefky

📌 Latar Belakang Masalah

Banyak orang bingung menentukan menu harian, resep tersimpan berserakan (screenshot, chat, bookmark), dan belanja sering boros atau ada bahan yang terlupa. Resepku menyatukan semuanya dalam satu tempat: simpan resep → atur menu → belanja jadi mudah.

✨ Fitur Utama
Autentikasi: register, login, dan logout dengan hak akses berdasarkan role (User dan Admin)
Manajemen resep (CRUD): judul, foto, kategori, porsi, waktu masak, bahan, dan langkah; resep dapat bersifat privat atau publik
Pencarian dan filter: berdasarkan nama, kategori, waktu masak, dan bahan yang dimiliki ("masak apa dari bahan yang ada")
Rencana makan: kalender mingguan dengan slot sarapan, makan siang, dan makan malam, lengkap dengan pengaturan porsi
Daftar belanja otomatis: bahan dari semua menu digabung dan dijumlahkan, disesuaikan dengan porsi, dikelompokkan per kategori, bisa dicentang, dan bisa ditambah item manual
Ekspor daftar belanja: salin sebagai teks untuk WhatsApp atau unduh sebagai PDF
Favorit dan jelajah resep publik: simpan resep pengguna lain ke koleksi sendiri
Dashboard: menu hari ini, progres belanja, resep favorit, dan ringkasan minggu
Panel Admin: moderasi resep publik, kelola kategori dan bahan, serta daftar pengguna
Responsive: nyaman dipakai di HP, tablet, dan desktop
👥 Role dan Hak Akses
Role	Hak akses
User	Mengelola resep, favorit, rencana makan, dan daftar belanja miliknya sendiri; melihat resep publik yang disetujui
Admin	Semua hak User, ditambah moderasi resep publik, kelola kategori dan bahan, serta melihat daftar pengguna

Data privat setiap pengguna dilindungi dengan Row Level Security (RLS) di database dan pengecekan role di API.

🛠️ Teknologi
Bagian	Teknologi
Framework	Next.js 14 (App Router) + TypeScript
Styling	Tailwind CSS + shadcn/ui
Database	Supabase (PostgreSQL)
Autentikasi	Supabase Auth
Penyimpanan file	Supabase Storage
Validasi	Zod, React Hook Form
Grafik	Recharts
Testing	Vitest (unit test), Playwright (end-to-end)
Hosting	Vercel + Supabase Cloud
CI	GitHub Actions

Sesuaikan tabel ini jika kelompok memakai stack berbeda.

🗂️ Struktur Proyek
resepku/
├── app/
│   ├── (public)/          # landing page, login, register, jelajah resep
│   ├── (app)/             # dashboard, resep, rencana makan, belanja, favorit, profil
│   ├── admin/             # halaman admin
│   └── api/               # Route Handlers (REST API)
├── components/            # komponen UI reusable
├── lib/
│   ├── supabase/          # klien Supabase (server dan browser)
│   ├── auth/              # helper requireUser, requireAdmin
│   ├── validators/        # skema Zod
│   ├── services/          # logika bisnis (termasuk shopping-list)
│   └── errors/            # penanganan error terpusat
├── supabase/
│   ├── migrations/        # skema SQL, trigger, indeks, kebijakan RLS
│   └── seed.sql           # data awal (kategori, bahan, resep contoh)
├── tests/                 # unit test dan e2e
├── .env.example
└── README.md
🗄️ Skema Database
Tabel	Fungsi
profiles	Data pengguna dan role
categories	Kategori resep
recipes	Data resep
ingredients	Master bahan
recipe_ingredients	Bahan pada setiap resep
recipe_steps	Langkah memasak
favorites	Resep favorit pengguna
meal_plans	Rencana makan per tanggal dan waktu makan
shopping_items	Item daftar belanja
🚀 Menjalankan di Lokal
Prasyarat
Node.js 18 atau lebih baru
Akun Supabase (gratis)
Git
Langkah
bash
# 1. Clone repository
git clone https://github.com/<username>/resepku.git
cd resepku

# 2. Pasang dependensi
npm install

# 3. Salin file environment lalu isi nilainya
cp .env.example .env.local

# 4. Jalankan migrasi dan seed di Supabase
#    (jalankan isi folder supabase/migrations lalu supabase/seed.sql
#     lewat SQL Editor Supabase atau Supabase CLI)

# 5. Jalankan server pengembangan
npm run dev

Buka http://localhost:3000.

Variabel Environment
Variabel	Keterangan
NEXT_PUBLIC_SUPABASE_URL	URL project Supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY	Anon key Supabase
SUPABASE_SERVICE_ROLE_KEY	Service role key (hanya server, jangan dibagikan)
NEXT_PUBLIC_APP_URL	URL aplikasi (lokal atau produksi)
Perintah Lain
bash
npm run build        # build produksi
npm run lint         # cek lint
npm run test         # unit test (Vitest)
npm run test:e2e     # end-to-end test (Playwright)
🔑 Akun Demo
Role	Email	Password
User	demo@resepku.app	<isi password>
Admin	admin@resepku.app	<isi password>
🌐 Deployment

Aplikasi di-deploy ke Vercel dan database berjalan di Supabase Cloud. Setiap pull request otomatis mendapat preview deployment, dan branch main adalah versi produksi.

🔌 Ringkasan API

Format sukses: { "data": ... }. Format error: { "error": { "code": "...", "message": "..." } }.

Area	Endpoint
Auth	POST /api/auth/register, /login, /logout, GET /api/auth/me
Resep	GET/POST /api/recipes, GET/PUT/DELETE /api/recipes/:id, POST /api/recipes/:id/photo
Favorit	GET /api/favorites, POST/DELETE /api/favorites/:recipeId
Rencana makan	GET/POST/PUT/DELETE /api/meal-plans?weekStart=
Daftar belanja	GET /api/shopping-list?weekStart=, POST /api/shopping-list/generate, POST /api/shopping-list/items, PUT/DELETE /api/shopping-list/items/:id, GET /api/shopping-list/export
Dashboard	GET /api/dashboard/summary
Admin	/api/admin/recipes, /api/admin/users, /api/admin/categories, /api/admin/ingredients
🧪 Cara Kerja Daftar Belanja Otomatis
Ambil semua rencana makan pengguna pada satu minggu
Ambil bahan dari setiap resep yang direncanakan
Sesuaikan jumlah dengan porsi: jumlah × (porsi rencana ÷ porsi resep)
Samakan satuan yang kompatibel (g ↔ kg, ml ↔ l, sdm ↔ sdt)
Gabungkan bahan yang sama dan jumlahkan
Kelompokkan per kategori belanja dan simpan (item manual dan status centang tetap dipertahankan)
👨‍💻 Tim dan Pembagian Tugas
Anggota	Tugas	Tanggung jawab
<Nama Anggota 1>	Frontend dan UI/UX	Landing page, login/register, dashboard, halaman resep, kalender menu, daftar belanja, tampilan responsif
<Nama Anggota 2>	Backend, Database dan Auth	Skema database, RLS, autentikasi, hak akses, API CRUD, upload foto, kualitas kode
<Nama Anggota 3>	Fitur inti dan Deployment	Generate daftar belanja, pencarian dan filter, ekspor, hosting, pengujian, dokumentasi
✅ Pemenuhan Syarat Tugas
 Landing page / halaman informasi produk
 Register, login, dan logout
 Dashboard
 Database
 CRUD fitur utama (resep, rencana makan, daftar belanja)
 Authentication dan hak akses (User dan Admin)
 Responsive / mobile-friendly
 Fitur utama dapat digunakan secara nyata (daftar belanja otomatis)
 Deployment / hosting sehingga dapat diakses online
📸 Tangkapan Layar
<!-- Tambahkan gambar di folder docs/screenshots lalu tampilkan di sini --> <!-- ![Landing Page](docs/screenshots/landing.png) --> <!-- ![Dashboard](docs/screenshots/dashboard.png) --> <!-- ![Rencana Makan](docs/screenshots/meal-plan.png) --> <!-- ![Daftar Belanja](docs/screenshots/shopping-list.png) -->
📄 Lisensi

Proyek ini dibuat untuk keperluan tugas perkuliahan.
