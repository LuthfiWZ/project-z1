import type { User, UserRole } from "@/types";

export const SESSION_COOKIE = "resepku_session";
export const ROLE_COOKIE = "resepku_role";

export function getRoleFromCookie(
  value?: string,
): UserRole | null {
  if (value === "admin" || value === "user") {
    return value;
  }

  return null;
}

export function isAdmin(user: User | null | undefined): boolean {
  return user?.role === "admin";
}