"use client";

import Link from "next/link";
import { Bell, ChefHat } from "lucide-react";

interface AppHeaderProps {
  userName?: string;
}

export function AppHeader({ userName = "Pengguna" }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-orange-100 bg-[#FFF7ED]/95 backdrop-blur">
      <div className="flex min-h-[68px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 lg:hidden"
          aria-label="Resepku, dashboard"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-brand text-white">
            <ChefHat size={21} />
          </span>
          <span className="text-lg font-extrabold text-ink">
            Resepku<span className="text-brand">.</span>
          </span>
        </Link>

        <p className="hidden text-sm text-slate-600 lg:block">
          Senang melihatmu kembali,{" "}
          <span className="font-semibold text-ink">{userName}</span>!
        </p>

        <div className="ml-auto flex items-center gap-3">
          <span className="hidden text-sm text-slate-500 sm:block">
            Selamat memasak!
          </span>

          <button
            type="button"
            aria-label="Notifikasi"
            title="Notifikasi"
            className="flex size-10 items-center justify-center rounded-full border border-orange-100 bg-white text-slate-600 transition-colors hover:text-brand"
          >
            <Bell size={19} />
          </button>
        </div>
      </div>
    </header>
  );
}