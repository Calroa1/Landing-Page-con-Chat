// app/marcas/[id]/page.tsx
import Link from 'next/link';

interface Repuesto {
  id: number;
  nombre: string;
  precio: number;
  imagen_url: string | null;
  categoria: string;
}

// Simulando una consulta a la base de datos (Supabase) usando el ID de la marca
async function getRepuestosPorMarca(marcaId: string): Promise<Repuesto[]> {
  // Aquí harías tu: const { data } = await supabase.from('repuestos').select('*').eq('marca_id', marcaId)
  
  // Datos simulados para pruebas:
  return [
    { id: 101, nombre: "Pastillas de Freno Delanteras", precio: 45000, imagen_url: null, categoria: "Frenos" },
    { id: 102, nombre: "Kit de Arrastre Racing", precio: 180000, imagen_url: null, categoria: "Trasmisión" },
    { id: 103, nombre: "Filtro de Aceite Original", precio: 25000, imagen_url: null, categoria: "Mantenimiento" },
  ];
}

export default async function DetalleMarcaPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const repuestos = await getRepuestosPorMarca(id);

  return (
    <div className="min-h-screen bg-gray-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Botón para regresar al catálogo de marcas */}
        <div className="mb-6">
          <Link href="/marcas" className="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
            ← Volver a Marcas
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">
            Repuestos Disponibles
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Mostrando repuestos compatibles para la marca seleccionada (ID: {id}).
          </p>
        </div>

        {/* Grid de Repuestos / Productos */}
        {repuestos.length === 0 ? (
          <p className="text-gray-500">No hay repuestos registrados para esta marca aún.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {repuestos.map((repuesto) => (
              <div key={repuesto.id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between">
                
                {/* Imagen del Repuesto */}
                <div className="w-full aspect-square bg-gray-50 rounded-xl flex items-center justify-center p-4 mb-4">
                  {repuesto.imagen_url ? (
                    <img src={repuesto.imagen_url} alt={repuesto.nombre} className="max-h-full max-w-full object-contain" />
                  ) : (
                    <span className="text-xs text-gray-400 font-medium">Sin Imagen Ref</span>
                  )}
                </div>

                {/* Detalles e información */}
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    {repuesto.categoria}
                  </span>
                  <h3 className="text-sm font-bold text-gray-800 mt-2 line-clamp-2 min-h-[40px]">
                    {repuesto.nombre}
                  </h3>
                  <p className="text-lg font-black text-gray-900 mt-2">
                    ${repuesto.precio.toLocaleString('es-CO')}
                  </p>
                </div>

                {/* Botón de Acción */}
                <button className="w-full bg-gray-900 text-white text-xs font-bold py-3 rounded-xl mt-4 hover:bg-blue-600 transition-colors">
                  Ver Detalles
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}