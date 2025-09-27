export default function PageSkeleton() {
  return (
    <div className="p-6 space-y-4">
      <div className="h-8 w-32 bg-gray-800 rounded animate-pulse" />
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="p-4 border-b border-gray-800 animate-pulse">
          <div className="flex space-x-3">
            <div className="h-12 w-12 rounded-full bg-gray-800" />
            <div className="flex-1 space-y-3">
              <div className="h-4 w-1/3 bg-gray-800 rounded" />
              <div className="h-4 w-2/3 bg-gray-800 rounded" />
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="aspect-square bg-gray-800 rounded-2xl" />
                <div className="aspect-square bg-gray-800 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}