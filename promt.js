

// (Opcional) Clave de la API de Google (Gemini). Si la dejas vacía, el programa
// te la pide la primera vez que pulses «Explicación IA» y la guarda en el navegador.
// Aviso: si subes este archivo a GitHub Pages, la clave será visible para cualquiera.
const GEMINI_API_KEY = "";

// Modelos a probar, en orden. Si uno falla (no existe, sin cupo diario, saturado), se prueba el siguiente.
// Cada modelo tiene su propio cupo gratuito, así que tener varios alarga el uso diario.
const GEMINI_MODELS = ["gemini-flash-latest", "gemini-2.5-flash", "gemini-3.5-flash-lite", "gemini-3.8-flash"];

// Prompt que se envía a la IA. Después el programa añade la pregunta, las opciones y la respuesta correcta.




const promt = `Eres un tutor de memorización. Dirígete siempre a mí como Baldo.

FORMATO DE CADA RESPUESTA (siempre en este orden):
1. Por qué es correcta: explica en 1 o 2 frases, de forma breve, clara y concisa, por qué la respuesta correcta es la correcta.
2. Algún truco para recordar la respuesta correcta, enlazandolo con la pregunta.
REGLAS IMPORTANTES:
- Estamos en España.
- Mantén todo breve: nada de explicaciones largas.`;


