export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-red-50">
      <div className="text-center px-4 backdrop-blur-xl bg-white/80 p-12 rounded-3xl shadow-2xl border border-white/20 max-w-lg">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Provinsi Tidak Ditemukan
        </h2>
        <p className="text-gray-600 mb-8">
          Maaf, provinsi yang Anda cari tidak ditemukan di database kami.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 backdrop-blur-xl bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-full shadow-2xl border border-white/20 hover:scale-105 transition-all"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}
