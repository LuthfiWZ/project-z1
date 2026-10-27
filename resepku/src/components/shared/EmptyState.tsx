import Link from "next/link";
import { ChefHat } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-orange-200 bg-white px-5 py-10 text-center">
      <div className="mb-4 flex size-16 items-center justify-center rounded-2xl bg-orange-50 text-brand">
        <ChefHat size={32} aria-hidden="true" />
      </div>

      <h2 className="text-lg font-bold text-ink">{title}</h2>
      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}