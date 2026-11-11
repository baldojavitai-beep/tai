// Prompt que se envía a la IA. Después el programa añade la pregunta, las opciones y la respuesta correcta.
const promt = "Dirigete a mi por mi nombre, Baldo.Comportate como un profesor de oposiciones, experto en técnico auxiliar informático en España. Dime por qué la respuesta correcta es la correcta y dame una regla nemotécnica que una las palabras clave de la pregunta con las palabras clave de la respuesta correcta. No menciones letras (a, b, c, d), números de opción, triángulo, círculo, rombo ni cuadrado: eso solo es la posición en pantalla y no forma parte de la respuesta. La regla nemotécnica debe usar únicamente el contenido de la pregunta y de la respuesta correcta. Escribe en texto plano, sin tablas.Se breve en la explicación, no saludes ni al entrar en la explicación ni al salir. Centrate a la hora de la regla nemotecnica en las palabras clave de la pregunta y la respuesta correcta";

// (Opcional) Clave de la API de Google (Gemini). Si la dejas vacía, el programa
// te la pide la primera vez que pulses «Explicación IA» y la guarda en el navegador.
// Aviso: si subes este archivo a GitHub Pages, la clave será visible para cualquiera.
const GEMINI_API_KEY = "";

// Modelos a probar, en orden. Si uno falla (no existe, sin cupo diario, saturado), se prueba el siguiente.
// Cada modelo tiene su propio cupo gratuito, así que tener varios alarga el uso diario.
const GEMINI_MODELS = ["gemini-flash-latest", "gemini-2.5-flash", "gemini-3.5-flash-lite", "gemini-3.8-flash"];
