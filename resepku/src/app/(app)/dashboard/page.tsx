import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChefHat,
  ShoppingBasket,
} from "lucide-react";

const cards = [
  {
    title: "Resep Saya",
    description: "Simpan dan kelola koleksi resep masakanmu.",
    href: "/resep",
    icon: ChefHat,
  },
  {
    title: "Rencana Makan",
    description: "Susun menu sarapan, siang, dan malam.",
    href: "/rencana-makan",
    icon: CalendarDays,
  },
  {
    title: "Daftar Belanja",
    description: "Lihat bahan yang perlu kamu siapkan.",
    href: "/belanja",
    icon: ShoppingBasket,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-medium text-brand">
          Dashboard Resepku
        </p>
        <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
          Halo, Ayu! 👋
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
          Apa yang ingin kamu masak hari ini?
        </p>
      </section>

      <section className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 p-6 text-white shadow-soft sm:p-8">
        <p className="text-sm font-medium text-orange-50">
          Dapur lebih teratur dimulai dari sini
        </p>
        <h2 className="mt-2 max-w-xl text-2xl font-bold sm:text-3xl">
          Rencanakan menu, siapkan bahan, dan nikmati waktumu.
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-orange-50">
          Mulai dari resep favoritmu, lalu susun menu mingguan agar belanja
          lebih praktis.
        </p>
        <Link
          href="/rencana-makan"
          className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-orange-700 hover:bg-orange-50"
        >
          Atur menu minggu ini <ArrowRight size={17} />
        </Link>
      </section>

      <section>
        <h2 className="section-title">Akses cepat</h2>
        <p className="muted-text mt-1">
          Pilih bagian yang ingin kamu kelola.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map(({ title, description, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-orange-50 text-brand">
                <Icon size={24} />
              </span>
              <h3 className="mt-4 font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                Buka halaman <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}