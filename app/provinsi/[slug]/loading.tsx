export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="relative h-[400px] w-full overflow-hidden bg-gray-200 animate-pulse">
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-6xl">
            <div className="h-12 bg-gray-300 rounded w-1/3 mb-2" />
            <div className="h-6 bg-gray-300 rounded w-1/4" />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <div className="h-6 bg-gray-200 rounded w-full mb-2 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-5/6 animate-pulse" />
        </div>
        <div className="mb-12">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4 animate-pulse" />
          <div className="h-5 bg-gray-200 rounded w-full mb-2 animate-pulse" />
          <div className="h-5 bg-gray-200 rounded w-full mb-2 animate-pulse" />
          <div className="h-5 bg-gray-200 rounded w-4/5 animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-white/80 p-6 rounded-2xl shadow-2xl border border-white/20 animate-pulse"
            >
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
              <div className="h-6 bg-gray-300 rounded w-3/4" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block h-12 bg-gray-200 rounded-lg w-48 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
