import { Provinces } from "@/app/constant/provinsi";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProvincePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Provinces.map((province) => ({
    slug: province.id.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: ProvincePageProps) {
  const { slug } = await params;
  const province = Provinces.find(
    (p) => p.id.toLowerCase() === slug.toLowerCase()
  );

  if (!province) {
    return {
      title: "Province Not Found",
    };
  }

  return {
    title: `${province.title} - Nusantara`,
    description: province.description || province.short_description,
  };
}

export default async function ProvincePage({ params }: ProvincePageProps) {
  const { slug } = await params;
  const province = Provinces.find(
    (p) => p.id.toLowerCase() === slug.toLowerCase()
  );

  if (!province) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative h-[600px] w-full overflow-hidden">
        {province.image_url && (
          <Image
            src={province.image_url}
            alt={province.title}
            fill
            className="object-cover opacity-0/60 animate-fadeIn"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {province.title}
            </h1>
            {province.title_en && (
              <p className="text-xl text-gray-200">{province.title_en}</p>
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl px-4 py-12">
        {province.short_description && (
          <div className="mb-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              {province.short_description}
            </p>
          </div>
        )}

        {province.description && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Tentang {province.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {province.description}
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {province.capital && (
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Ibu Kota
              </h3>
              <p className="text-xl font-bold text-gray-900">
                {province.capital}
              </p>
            </div>
          )}

          {province.population && (
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Populasi
              </h3>
              <p className="text-xl font-bold text-gray-900">
                {province.population}
              </p>
            </div>
          )}

          {province.area_km2 && (
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Luas Wilayah
              </h3>
              <p className="text-xl font-bold text-gray-900">
                {province.area_km2.toLocaleString("id-ID")} km²
              </p>
            </div>
          )}

          {province.region && (
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Region
              </h3>
              <p className="text-xl font-bold text-gray-900">
                {province.region}
              </p>
            </div>
          )}

          {province.island && (
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Pulau
              </h3>
              <p className="text-xl font-bold text-gray-900">
                {province.island}
              </p>
            </div>
          )}

          {province.coordinates && (
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">
                Koordinat
              </h3>
              <p className="text-xl font-bold text-gray-900">
                {province.coordinates[0].toFixed(4)}°,{" "}
                {province.coordinates[1].toFixed(4)}°
              </p>
            </div>
          )}
        </div>
        <Button className="bg-main text-white font-bold border-2 border-black shadow-shadow px-4 sm:px-6 text-sm sm:text-base">
          <Link
            href="/#map"
            className=""
          >
            Back
          </Link>
        </Button>
      </div>
    </div>
  );
}
