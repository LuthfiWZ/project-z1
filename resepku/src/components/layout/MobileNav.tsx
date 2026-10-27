"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  CalendarDays,
  LayoutDashboard,
  ShoppingBasket,
  Star,
} from "lucide-react";

import { cn } from "@/lib/utils";

const items = [
  { label: "Beranda", href: "/dashboard", icon: LayoutDashboard },
  { label: "Resep", href: "/resep", icon: BookOpen },
  { label: "Menu", href: "/rencana-makan", icon: CalendarDays },
  { label: "Belanja", href: "/belanja", icon: ShoppingBasket },
  { label: "Favorit", href: "/favorit", icon: Star },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigasi mobile"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-orange-100 bg-white/95 px-1 pt-2 backdrop-blur lg:hidden"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 8px)" }}
    >
      <div className="mx-auto grid max-w-lg grid-cols-5">
        {items.map(({ label, href, icon: Icon }) => {
          const active =
            pathname === href ||
            (href !== "/dashboard" && pathname.startsWith(`${href}/`));

          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl px-1 text-[10px] font-medium transition-colors sm:text-xs",
                active
                  ? "text-brand"
                  : "text-slate-500 hover:text-brand",
              )}
            >
              <Icon
                size={21}
                strokeWidth={active ? 2.5 : 1.8}
                aria-hidden="true"
              />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}