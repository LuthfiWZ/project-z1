import type { ReactNode } from "react";
import { cookies } from "next/headers";

import { AppHeader } from "@/components/layout/AppHeader";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { ROLE_COOKIE } from "@/lib/auth";

export default function AppLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = cookies();
  const roleCookie = cookieStore.get(ROLE_COOKIE)?.value;

  const role = roleCookie === "admin" ? "admin" : "user";
  const userName = role === "admin" ? "Admin Resepku" : "Ayu";

  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <AppSidebar role={role} userName={userName} />

      <div className="min-h-screen lg:pl-64">
        <AppHeader userName={userName} />

        <main className="page-container py-6 pb-28 sm:py-8 sm:pb-28 lg:pb-10">
          {children}
        </main>
      </div>

      <MobileNav />
    </div>
  );
}