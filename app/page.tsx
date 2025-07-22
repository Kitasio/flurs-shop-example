import Image from "next/image";
import Link from 'next/link';
import Header from '@/components/Header';

interface PosterFormat {
  name: string;
  price: number;
}

export interface Poster {
  formats: { data: PosterFormat[] };
  id: string;
  images: { data: string[] };
  name: string;
}

export default function Home() {
  const posters: Poster[] = [
    {
      id: "1",
      formats: { data: [{ name: "A3", price: 20 }] },
      images: { data: ["https://flurs.fly.storage.tigris.dev/the_hanged_man.webp"] },
      name: "The hanged man",
    },
    {
      id: "2",
      formats: { data: [{ name: "A3", price: 20 }] },
      images: { data: ["https://flurs.fly.storage.tigris.dev/teeth.webp"] },
      name: "Teeth",
    },
    {
      id: "3",
      formats: { data: [{ name: "A3", price: 20 }] },
      images: { data: ["https://flurs.fly.storage.tigris.dev/party.webp"] },
      name: "Party",
    },
    {
      id: "4",
      formats: { data: [{ name: "A3", price: 20 }] },
      images: { data: ["https://flurs.fly.storage.tigris.dev/among_the_green.webp"] },
      name: "Among the green",
    },
  ];

  return (
    <>
      <Header />
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 sm:gap-6">
          {posters.map((poster) => (
            <Link
              href={`/${poster.id}`}
              key={poster.id}
              className="group text-left w-full block"
              aria-label={`View details for ${poster.name}`}
            >
              <div className="aspect-square mb-4 overflow-hidden bg-gray-50 relative">
                {/* Use the first image from the images array */}
                <Image
                  src={poster.images.data[0]}
                  alt={poster.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain group-hover:scale-101 transition-transform duration-300"
                  priority={posters.indexOf(poster) < 4}
                />
              </div>
              <div className="px-2">
                <h3 className="font-serif text-xl sm:text-lg text-gray-900 mb-1 truncate" title={poster.name}>
                  {poster.name}
                </h3>
                {/* Show price from the first format */}
                <p className="text-lg sm:text-base text-gray-500">
                  From ${poster.formats.data[0]?.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
