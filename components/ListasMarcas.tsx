import Link from 'next/link';
import { memo } from 'react';

// Si usas Next.js, puedes importar Image de next/image
// import Image from 'next/image';

interface Marca {
  id: number;
  nombre: string;
  imagen_url: string | null;
}

interface ListaMarcasProps {
  marcas: Marca[];
}

// Componente interno para cada marca (mejora rendimiento y legibilidad)
const MarcaItem = memo(({ marca }: { marca: Marca }) => {
  const hasImage = !!marca.imagen_url;

  return (
    <Link
      href={`/marcas/${marca.id}`}
      key={marca.id}
      aria-label={`Ver productos de la marca ${marca.nombre}`}
      className="group relative block bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1.5 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-95"
    >
      {/* Contenedor de la imagen con altura fija */}
      <div className="w-full h-28 bg-gradient-to-br from-gray-50 to-gray-100/70 rounded-xl flex items-center justify-center p-4 mb-3 transition-colors duration-300 group-hover:from-blue-50/30 group-hover:to-blue-100/20 overflow-hidden">
        {hasImage ? (
          // Si usas next/image, reemplaza img por:
          // <Image
          //   src={marca.imagen_url}
          //   alt={`Logo de ${marca.nombre}`}
          //   width={120}
          //   height={80}
          //   className="max-h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
          //   loading="lazy"
          // />
          <img
            src={marca.imagen_url!}
            alt={`Logo de ${marca.nombre}`}
            width={120}
            height={80}
            className="max-h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          // Placeholder mejorado
          <div className="flex flex-col items-center justify-center text-gray-400 gap-1.5">
            <svg
              className="w-8 h-8 stroke-[1.5]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 002-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-[10px] font-medium tracking-wider uppercase text-gray-400">
              Sin logo
            </span>
          </div>
        )}
      </div>

      {/* Nombre de la marca con subrayado animado */}
      <div className="w-full text-center pb-1 relative">
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
          {marca.nombre}
        </h3>
        {/* Línea decorativa que aparece en hover */}
        <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-1/3 group-hover:left-1/3" />
      </div>
    </Link>
  );
});

MarcaItem.displayName = 'MarcaItem';

export default function ListaMarcas({ marcas }: ListaMarcasProps) {
  if (!marcas || marcas.length === 0) {
    return (
      <div className="text-center p-12 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
        <svg
          className="mx-auto h-12 w-12 text-gray-300 mb-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
        <p className="text-gray-400 text-sm font-medium">
          No encontramos marcas disponibles.
        </p>
        <p className="text-gray-300 text-xs mt-1">Pronto añadiremos más.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
      {marcas.map((marca) => (
        <MarcaItem key={marca.id} marca={marca} />
      ))}
    </div>
  );
}