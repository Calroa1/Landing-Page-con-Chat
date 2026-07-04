'use client'

import { useState, useEffect } from 'react'

export default function BotonWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false)

  // Mostramos un mensaje automático a los 3 segundos para enganchar al usuario
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)
    return () => clearTimeout(timer)
    }, [])

  // Reemplaza esto con tu número real (código de país + número sin espacios ni el signo +)
  // Ejemplo para Colombia: 573001234567
  const numeroTelefono = '573202789391'
  const mensajePredeterminado = encodeURIComponent('Hola! Quisiera más información sobre los repuestos.')
  const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajePredeterminado}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 font-sans">
      
      {/* MENSAJE EMERGENTE (Tooltip) */}
      <div
        className={`bg-white text-gray-800 text-sm font-medium px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 max-w-xs transition-all duration-500 transform ${
          showTooltip 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
        <p className="text-xs">¿Necesitas ayuda con algún repuesto? ¡Escríbenos!</p>
        <button 
          onClick={() => setShowTooltip(false)}
          className="text-gray-400 hover:text-gray-600 ml-1 font-bold text-xs"
        >
          ✕
        </button>
      </div>

      {/* BOTÓN FLOTANTE */}
      <div className="relative group">
        {/* Efecto de Onda Pulsante Profesional */}
        <div className="absolute inset-0 bg-green-500 rounded-full blur-sm opacity-40 animate-ping group-hover:opacity-0 transition-opacity duration-300"></div>
        
        <a
          href={urlWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Chatear por WhatsApp"
        >
          {/* Logo de WhatsApp SVG Oficial */}
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.479 4.884 1.479 5.481 0 9.932-4.451 9.935-9.935.002-2.657-1.023-5.155-2.887-7.021-1.866-1.866-4.35-2.891-7.004-2.893-5.48 0-9.93 4.45-9.933 9.933-.001 1.744.475 3.393 1.38 4.843l-.993 3.633 3.718-.975zm11.365-4.43c-.328-.164-1.94-.957-2.242-1.068-.301-.11-.522-.164-.743.164-.221.328-.855 1.068-1.048 1.287-.193.219-.386.246-.714.082-.328-.164-1.386-.51-2.64-1.627-.976-.87-1.633-1.946-1.824-2.274-.192-.329-.02-.507.144-.67.147-.146.328-.384.492-.575.164-.192.219-.329.328-.548.11-.219.055-.411-.027-.575-.082-.164-.743-1.792-1.018-2.456-.268-.644-.542-.556-.743-.566-.19-.01-.41-.011-.629-.011-.218 0-.575.082-.876.411-.3.329-1.148 1.122-1.148 2.736 0 1.614 1.176 3.174 1.34 3.393.164.22 2.313 3.532 5.602 4.954.783.339 1.395.541 1.872.692.786.25 1.5.214 2.064.13.629-.094 1.94-.794 2.215-1.56.274-.767.274-1.423.192-1.56-.082-.136-.3-.218-.628-.382z" />
          </svg>
        </a>
      </div>

    </div>
  )
}