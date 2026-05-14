import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// ✨ Aquí defines la personalidad que quieras
const SYSTEM_PROMPT = {
  role: "system",
  content:
    "Eres un asistente experto en tecnología, amable y que siempre responde en español. " +
    "Mantén las respuestas claras y útiles.",
};

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error("Se requiere un array de mensajes");
    }

    // Construye el array completo: system + historial
    const fullMessages = [SYSTEM_PROMPT, ...messages];

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: fullMessages,
    });

    const respuesta = completion.choices[0]?.message?.content || "";
    return Response.json({ respuesta });
  } catch (error: any) {
    console.error("Error en agente:", error);
    return Response.json(
      { error: error.message || "Error del servidor" },
      { status: 500 }
    );
  }
}