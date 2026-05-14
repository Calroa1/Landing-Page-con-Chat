import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">NextIA</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Características</Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Precios</Link>
          <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Nosotros</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-medium text-gray-600">Iniciar Sesión</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
            Empezar Gratis
          </button>
        </div>
      </div>
    </header>
  );
}
