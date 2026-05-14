"use client";

/**
 * LANDING PAGE & CHAT WIDGET
 * --------------------------
 * Este archivo es la página principal (/) de tu aplicación.
 * Combina una sección de marketing (Hero, Features) con un widget de chat flotante.
 */

import { useState, useRef, useEffect } from "react";
import FeatureCard from "@/components/FeatureCard";
import Footer from "@/components/Footer";

// Definición del tipo de datos para los mensajes del chat
type Mensaje = {
  role: "user" | "assistant";
  content: string;
};

export default function LandingPage() {
  // --- ESTADOS (STATE) ---
  const [chat, setChat] = useState<Mensaje[]>([]); // Almacena el historial de la conversación
  const [input, setInput] = useState("");          // Almacena lo que el usuario escribe
  const [loading, setLoading] = useState(false);   // Indica si la IA está respondiendo
  const [isOpen, setIsOpen] = useState(false);     // Controla si el widget de chat está abierto/cerrado
  
  const chatEndRef = useRef<HTMLDivElement>(null); // Referencia para hacer scroll automático

  // --- EFECTOS (EFFECTS) ---
  // Hace scroll hacia abajo cada vez que el chat se actualiza
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  // --- LÓGICA DE ENVÍO (HANDLERS) ---
  async function enviarMensaje(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const nuevoMensaje: Mensaje = { role: "user", content: input };
    const historialActualizado = [...chat, nuevoMensaje];
    
    setChat(historialActualizado);
    setInput("");
    setLoading(true);

    try {
      // Llamada a tu propia API de Next.js (backend interno)
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: historialActualizado }),
      });

      const data = await res.json();
      if (data.error) {
        setChat((prev) => [...prev, { role: "assistant", content: `Error: ${data.error}` }]);
      } else {
        setChat((prev) => [...prev, { role: "assistant", content: data.respuesta }]);
      }
    } catch (err) {
      setChat((prev) => [...prev, { role: "assistant", content: "Error de conexión" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white dark:bg-[#050505] min-h-screen text-gray-900 dark:text-white selection:bg-blue-100 dark:selection:bg-blue-900">
      
      {/* --- SECCIÓN HERO (Marketing Principal) --- */}
      <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-40">
        {/* Luces de fondo (Blobs decorativos) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-400/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Badge de estado */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold mb-8 animate-in fade-in slide-in-from-bottom-3">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
             </span>
             PRÓXIMAMENTE V2.0
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent leading-[1.1]">
            La Inteligencia Artificial <br /> para humanos.
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Potencia tu flujo de trabajo con nuestro agente de IA avanzado. Rápido, seguro y diseñado para integrarse perfectamente en tu día a día.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/25">
              Empieza ahora
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
              Ver Demo
            </button>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN DE CARACTERÍSTICAS (Features) --- */}
      <section id="features" className="py-24 bg-gray-50 dark:bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Todo lo que necesitas</h2>
            <p className="text-gray-500">Diseñado para la máxima eficiencia y privacidad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Velocidad Extrema" 
              description="Respuestas inmediatas procesadas en la nube de alto rendimiento."
              icon="⚡"
              color="bg-yellow-50 text-yellow-600"
            />
            <FeatureCard 
              title="Privacidad Local" 
              description="Tus datos son tuyos. Encriptación de extremo a extremo en cada sesión."
              icon="🔒"
              color="bg-green-50 text-green-600"
            />
            <FeatureCard 
              title="Inteligencia GPT-4" 
              description="Basado en los modelos de lenguaje más avanzados del mercado."
              icon="🧠"
              color="bg-blue-50 text-blue-600"
            />
          </div>
        </div>
      </section>

      {/* Footer importado */}
      <Footer />

      {/* --- WIDGET DE CHAT (Flotante) --- */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'}`}>
        <div className="w-[380px] h-[550px] bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-gray-800 flex flex-col overflow-hidden">
          {/* Cabecera del chat */}
          <header className="bg-blue-600 p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center text-xl">🤖</div>
              <div>
                <p className="font-bold text-sm">NextIA Chat</p>
                <p className="text-[10px] opacity-70">En línea ahora</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          {/* Cuerpo del chat (Mensajes) */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {chat.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center opacity-40 text-center">
                <p className="text-sm">¿Cómo puedo ayudarte <br /> a mejorar hoy?</p>
              </div>
            )}
            {chat.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`p-4 rounded-2xl max-w-[85%] text-sm ${msg.role === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-tl-none border border-gray-100 dark:border-gray-700"}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input del chat */}
          <div className="p-5 border-t border-gray-50 dark:border-gray-800 bg-white dark:bg-gray-900">
            <form onSubmit={enviarMensaje} className="flex gap-2">
              <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Pregúntame algo..." 
                className="flex-1 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-sm outline-none focus:ring-1 focus:ring-blue-500 dark:text-white"
              />
              <button className="bg-blue-600 text-white px-4 rounded-xl font-bold shadow-lg shadow-blue-500/20">→</button>
            </form>
          </div>
        </div>
      </div>

      {/* Botón circular para abrir el chat */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 active:scale-95 transition-all z-50 group"
        >
          <span className="group-hover:rotate-12 transition-transform">💬</span>
        </button>
      )}
    </div>
  );
}
