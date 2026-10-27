"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOpen,
  CalendarDays,
  ChefHat,
  LayoutDashboard,
  LogOut,
  ShieldCheck,
  ShoppingBasket,
  Star,
  UserRound,
} from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Resep Saya", href: "/resep", icon: BookOpen },
  { label: "Rencana Makan", href: "/rencana-makan", icon: CalendarDays },
  { label: "Daftar Belanja", href: "/belanja", icon: ShoppingBasket },
  { label: "Favorit", href: "/favorit", icon: Star },
  { label: "Profil", href: "/profil", icon: UserRound },
];

interface AppSidebarProps {
  role?: "user" | "admin";
  userName?: string;
}

export function AppSidebar({
  role = "user",
  userName = "Pengguna",
}: AppSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  function logout() {
    document.cookie = "resepku_session=; path=/; max-age=0; samesite=lax";
    document.cookie = "resepku_role=; path=/; max-age=0; samesite=lax";

    toast.success("Kamu telah keluar dari Resepku.");
    router.replace("/login");
    router.refresh();
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-orange-100 bg-white lg:flex">
      <Link
        href="/dashboard"
        className="flex h-20 items-center gap-3 px-6"
        aria-label="Resepku, buka dashboard"
      >
        <span className="flex size-11 items-center justify-center rounded-2xl bg-brand text-white">
          <ChefHat size={25} />
        </span>
        <span>
          <span className="block text-xl font-extrabold tracking-tight text-ink">
            Resepku<span className="text-brand">.</span>
          </span>
          <span className="block text-xs text-muted-foreground">
            Dapur lebih teratur
          </span>
        </span>
      </Link>

      <div className="px-4 pt-5">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Menu utama
        </p>

        <nav aria-label="Navigasi utama" className="space-y-1">
          {menuItems.map(({ label, href, icon: Icon }) => {
            const active =
              pathname === href ||
              (href !== "/dashboard" && pathname.startsWith(`${href}/`));

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                  active
                    ? "bg-orange-50 text-brand"
                    : "text-slate-600 hover:bg-orange-50 hover:text-brand",
                )}
              >
                <Icon size={19} aria-hidden="true" />
                {label}
              </Link>
            );
          })}

          {role === "admin" && (
            <Link
              href="/admin"
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                pathname.startsWith("/admin")
                  ? "bg-orange-50 text-brand"
                  : "text-slate-600 hover:bg-orange-50 hover:text-brand",
              )}
            >
              <ShieldCheck size={19} aria-hidden="true" />
              Admin
            </Link>
          )}
        </nav>
      </div>

      <div className="mt-auto border-t border-orange-100 p-4">
        <div className="mb-3 flex items-center gap-3 rounded-xl bg-orange-50 p-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-orange-200 font-bold text-orange-800">
            {userName.trim().charAt(0).toUpperCase() || "R"}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">
              {userName}
            </p>
            <p className="text-xs text-muted-foreground">
              {role === "admin" ? "Administrator" : "Anggota Resepku"}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={logout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={18} aria-hidden="true" />
          Keluar
        </button>
      </div>
    </aside>
  );
}