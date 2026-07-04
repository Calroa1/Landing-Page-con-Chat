// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header' // <-- tu Header mejorado
import Footer from '@/components/Footer' // <-- crearemos uno abajo

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'La Pista M&M - Repuestos y accesorios',
  description: 'Encuentra los mejores repuestos para tu vehículo en La Pista M&M',
  keywords: 'repuestos, autos, motos, accesorios, mecánica',
  authors: [{ name: 'La Pista M&M' }],
  openGraph: {
    title: 'La Pista M&M',
    description: 'Repuestos de calidad para tu vehículo',
    url: 'https://tudominio.com',
    siteName: 'La Pista M&M',
    images: [
      {
        url: 'https://tudominio.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* ✅ Comentario cerrado correctamente */}
      <body
        className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100/50 flex flex-col antialiased`}
      >
        {/* Header - sticky con efecto vidrio */}
        <Header />

        {/* Contenido principal con padding superior para compensar el header sticky */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}