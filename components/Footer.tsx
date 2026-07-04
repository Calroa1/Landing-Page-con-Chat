import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-100 mt-auto text-gray-600">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Cuadrícula de 3 columnas en pantallas grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* COLUMNA 1: Branding y Eslogan */}
          <div className="space-y-4">
            <span className="text-xl font-black tracking-wider text-blue-600">
              LA PISTA<span className="text-gray-900"> M&M</span>
            </span>
            <p className="text-sm text-gray-500 max-w-xs">
              Tu solución definitiva para la gestión, búsqueda y compra de repuestos originales para motocicletas.
            </p>
          </div>

          {/* COLUMNA 2: Enlaces de Navegación */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Plataforma
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/repuestos" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    Catálogo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Soporte
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/nosotros" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* COLUMNA 3: Ubicación con Google Maps */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Nuestra Ubicación
            </h3>
            
            {/* Contenedor del mapa */}
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-gray-100 shadow-sm relative group">
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!3m2!1ses!2sco!4v1783132869135!5m2!1ses!2sco!6m8!1m7!1soK859tgmYKJSz4KGojHcdQ!2m2!1d4.721571807541637!2d-74.2289710802838!3f189.67711816608966!4f2.713231939141039!5f0.7820865974627469" 
                  width="400" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Mapa de ubicación"
                />
            </div>
            
            <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-1">
              <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Sector El poblado Mosquera — Cundinamarca
            </p>
          </div>

        </div>

        {/* BARRA INFERIOR: Copyright */}
        <div className="mt-12 border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {currentYear} MotoShop. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-400">
            Desarrollado con Next.js & Supabase
          </p>
        </div>

      </div>
    </footer>
  )
}