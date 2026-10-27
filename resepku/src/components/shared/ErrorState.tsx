import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorStateProps {
  message?: string;
  onRetry: () => void;
}

export function ErrorState({
  message = "Terjadi kesalahan saat memuat data.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-red-100 bg-white px-5 py-10 text-center"
    >
      <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-red-50 text-red-600">
        <AlertCircle size={28} aria-hidden="true" />
      </div>

      <h2 className="text-lg font-bold text-ink">Ups, ada kendala</h2>
      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        {message}
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-brand hover:bg-orange-50"
      >
        <RefreshCw size={16} aria-hidden="true" />
        Coba lagi
      </button>
    </div>
  );
}