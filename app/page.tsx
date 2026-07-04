import { createClient } from '@/utils/supabase/server';
import ListaMarcas from '@/components/ListasMarcas';

export default async function HomePage() {
  // 1. Consultamos los datos en el Servidor
  const supabase = await createClient();
  const { data: marcas, error } = await supabase.from('marcas').select('*');

  if (error) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500 font-semibold">Error al cargar la plataforma.</p>
      </div>
    );
  }

  // 2. Renderizamos la estructura limpia
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Contenedor principal */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        
        {/* Encabezado */}
        <div className="mb-12 text-center sm:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Catálogo de Marcas
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Selecciona una marca para explorar los repuestos y componentes disponibles.
          </p>
        </div>

        {/* Invocamos el componente y le inyectamos los datos mediante props */}
        <ListaMarcas marcas={marcas || []} />

      </main>
    </div>
  );
}