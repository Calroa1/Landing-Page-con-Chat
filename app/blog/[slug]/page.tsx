/**
 * PÁGINA DE POST DEL BLOG
 * -----------------------
 * En Next.js 15+, 'params' es una Promesa. 
 * Debemos usar 'await' para obtener los valores.
 */

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  // Esperamos a que los parámetros estén listos
  const { slug } = await params;

  return (
    <main className="max-w-4xl mx-auto p-8 pt-24">
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
        <h1 className="text-4xl font-extrabold mb-4 capitalize">
          {slug.replace(/-/g, ' ')}
        </h1>
        <p className="text-gray-500 mb-8">
          Publicado el {new Date().toLocaleDateString()} • 5 min de lectura
        </p>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Estás leyendo la publicación con el identificador: <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-blue-600">{slug}</span>.
          </p>
          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-300">
              💡 Este es un ejemplo de ruta dinámica en Next.js. Puedes cambiar el nombre en la URL para ver cómo cambia este contenido.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
