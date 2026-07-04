'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Array con los enlaces del menú para reutilizar
const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/repuestos', label: 'Repuestos' },
  { href: '/nosotros', label: 'Nosotros' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Cerrar menú al redimensionar a md (768px) o más
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Cerrar menú al pulsar Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Cerrar menú al hacer clic fuera del menú y del botón
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* -------- LOGO -------- */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 group">
              {/* Ícono SVG (pista de carreras) */}
              <svg
                className="h-8 w-8 text-blue-600 transition-transform group-hover:scale-105"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
              <span className="text-xl font-black tracking-widest text-blue-600 sm:text-2xl">
                LA PISTA<span className="text-gray-800"> M&M</span>
              </span>
            </Link>
          </div>

          {/* -------- MENÚ DESKTOP -------- */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Menú principal"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {label}
                  {/* Subrayado animado */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* -------- BOTÓN DE ACCIÓN (Desktop) -------- */}
          <div className="hidden md:flex items-center">
            <Link
              href="/login"
              className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-200 hover:shadow-blue-500/50 hover:scale-105 active:scale-95"
            >
              Ingresar
            </Link>
          </div>

          {/* -------- BOTÓN HAMBURGUESA (Móvil) -------- */}
          <div className="flex md:hidden">
            <button
              ref={buttonRef}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <span className="sr-only">Menú principal</span>
              {isMenuOpen ? (
                // Icono de cerrar (X) con rotación
                <svg
                  className="h-6 w-6 rotate-90 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* -------- MENÚ MÓVIL (Slide + Overlay) -------- */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute top-0 left-0 w-full bg-white shadow-xl transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.stopPropagation()} // Evita que el clic interno cierre el menú
        >
          <div className="space-y-1 px-4 pb-6 pt-4">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 px-4 py-3 text-base font-semibold text-white shadow-md shadow-blue-500/30 transition-transform active:scale-95"
              >
                Ingresar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}