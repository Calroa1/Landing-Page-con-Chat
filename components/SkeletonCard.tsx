export default function SkeletonCard() {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-4 animate-pulse">
      {/* Espacio para la imagen */}
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-xl mb-4"></div>
      
      {/* Espacio para el título */}
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
      
      {/* Espacio para el texto */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
    </div>
  );
}
