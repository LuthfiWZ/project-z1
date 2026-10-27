interface LoadingSkeletonProps {
  count?: number;
}

export function LoadingSkeleton({
  count = 3,
}: LoadingSkeletonProps) {
  return (
    <div
      aria-label="Sedang memuat data"
      aria-busy="true"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
    >
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-orange-100 bg-white p-4"
        >
          <div className="h-40 animate-pulse rounded-xl bg-orange-50" />
          <div className="mt-4 h-5 w-3/4 animate-pulse rounded bg-orange-50" />
          <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-orange-50" />
          <div className="mt-5 h-10 animate-pulse rounded-xl bg-orange-50" />
        </div>
      ))}
    </div>
  );
}