import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, ChefHat, ShoppingBasket } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Simpan resep",
    description: "Kumpulkan resep favoritmu di satu tempat.",
  },
  {
    icon: CalendarDays,
    title: "Atur menu mingguan",
    description: "Rencanakan sarapan, makan siang, dan makan malam.",
  },
  {
    icon: ShoppingBasket,
    title: "Belanja lebih mudah",
    description: "Siapkan daftar belanja dari menu yang sudah direncanakan.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF7ED]">
      <header className="border-b border-orange-100 bg-white/80">
        <div className="page-container flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-brand text-white">
              <ChefHat size={25} />
            </span>
            <span className="text-xl font-extrabold text-ink">
              Resepku<span className="text-brand">.</span>
            </span>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-3" aria-label="Menu publik">
            <Link
              href="/jelajah"
              className="hidden rounded-xl px-3 py-2 text-sm font-medium text-slate-600 hover:text-brand sm:inline-flex"
            >
              Jelajah Resep
            </Link>
            <Link
              href="/login"
              className="rounded-xl px-3 py-2 text-sm font-semibold text-ink hover:bg-orange-50"
            >
              Masuk
            </Link>
            <Link
              href="/register"
              className="rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Daftar
            </Link>
          </nav>
        </div>
      </header>

      <section className="page-container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1.5 text-sm font-medium text-orange-800">
            <ChefHat size={16} />
            Teman baru di dapurmu
          </span>

          <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Masak lebih mudah,{" "}
            <span className="text-brand">hari lebih teratur.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
            Dari resep ke daftar belanja dalam satu klik. Simpan resep,
            susun menu mingguan, dan persiapkan bahan tanpa repot.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/register"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-dark"
            >
              Mulai gratis <ArrowRight size={18} />
            </Link>
            <Link
              href="/jelajah"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-orange-200 bg-white px-6 py-3 font-semibold text-ink hover:bg-orange-50"
            >
              Jelajahi resep
            </Link>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            Simpan ide masakanmu. Rencanakan minggu yang lebih praktis.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-orange-200/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white p-3 shadow-soft">
            {/* Gambar sementara; akan diganti dengan aset visual final. */}
            <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-orange-100 via-orange-50 to-amber-100 px-6 text-center">
              <ChefHat size={60} strokeWidth={1.3} className="text-brand" />
              <p className="mt-4 text-2xl font-bold text-ink">
                Inspirasi dari dapurmu
              </p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-600">
                Resep, rencana makan, dan daftar belanja dalam satu aplikasi.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 p-3">
              <div className="rounded-xl bg-orange-50 p-3">
                <CalendarDays className="text-brand" size={20} />
                <p className="mt-2 text-sm font-semibold text-ink">
                  Menu mingguan
                </p>
              </div>
              <div className="rounded-xl bg-green-50 p-3">
                <ShoppingBasket className="text-green-700" size={20} />
                <p className="mt-2 text-sm font-semibold text-ink">
                  Belanja terencana
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-orange-100 bg-white py-16">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              Lebih praktis setiap hari
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">
              Semua kebutuhan dapur dalam satu tempat
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Kurangi kebingungan menentukan menu dan fokus menikmati proses
              memasak bersama orang tersayang.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-orange-100 bg-[#FFF7ED] p-6 transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-16 text-center sm:py-20">
        <h2 className="text-3xl font-extrabold text-ink">
          Siap mengatur dapur dengan lebih mudah?
        </h2>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
          Mulai simpan resep dan susun rencana makanmu bersama Resepku.
        </p>
        <Link
          href="/register"
          className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"
        >
          Buat akun gratis <ArrowRight size={18} />
        </Link>
      </section>

      <footer className="border-t border-orange-100 bg-white py-7">
        <div className="page-container flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Resepku. Dibuat untuk dapur yang lebih teratur.</p>
          <p>Rencanakan. Masak. Nikmati.</p>
        </div>
      </footer>
    </main>
  );
}