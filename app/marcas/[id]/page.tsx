import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ModelosPage({ params }: PageProps) {
  // 1. Obtenemos el ID de la URL de forma segura
  const { id } = await params;
  const supabase = await createClient();

  // 2. Hacemos una consulta con filtro (.eq) para traer solo los modelos de esta marca
  const { data: modelos, error: errorModelos } = await supabase
    .from('modelos')
    .select('*')
    .eq('marca_id', id);

  // 3. Opcional: Traemos también el nombre de la marca para mostrarlo en el título
  const { data: marca } = await supabase
    .from('marcas')
    .select('nombre')
    .eq('id', id)
    .single();

  if (errorModelos) {
    return <div className="p-8 text-center text-red-500">Error al cargar los modelos.</div>;
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Botón para volver al inicio */}
      <Link href="/" className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1 mb-6">
        &larr; Volver a las marcas
      </Link>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-2 uppercase">
        Modelos de {marca?.nombre || 'la Marca'}
      </h1>
      <p className="text-gray-600 mb-8">
        Selecciona un modelo para ver las piezas y repuestos disponibles.
      </p>

      {/* Listado de modelos */}
      {!modelos || modelos.length === 0 ? (
        <div className="bg-white border rounded-2xl p-8 text-center text-gray-500">
          No hay modelos registrados para esta marca todavía.
        </div>
      ) : (
        // Busca esta sección dentro de tu app/marcas/[id]/page.tsx y reemplaza el mapeo:
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {modelos.map((modelo) => (
    /* CAMBIO AQUÍ: Ahora es un Link que lleva a la ruta dinámica del modelo para ver sus repuestos */
    <Link 
      href={`/modelos/${modelo.id}`}
      key={modelo.id}
      className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex items-center justify-between cursor-pointer group"
    >
      <span className="text-lg font-bold text-gray-800 uppercase group-hover:text-blue-600 transition-colors">
        {modelo.nombre}
      </span>
      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        Ver Repuestos &rarr;
      </span>
    </Link>
  ))}
</div>
      )}
    </main>
  );
}