export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-4 text-gray-900 dark:text-white font-mono">PRODUCTO</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Funciones</li>
            <li>Integraciones</li>
            <li>API</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-gray-900 dark:text-white font-mono">COMPAÑÍA</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Acerca de</li>
            <li>Blog</li>
            <li>Carreras</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-gray-900 dark:text-white font-mono">LEGAL</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Privacidad</li>
            <li>Términos</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-gray-900 dark:text-white font-mono">SOCIAL</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
        © 2024 NextIA Inc. Todos los derechos reservados.
      </div>
    </footer>
  );
}
