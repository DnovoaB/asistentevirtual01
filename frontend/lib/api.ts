import axios from "axios";
import { CohereClient } from "cohere-ai";
import * as Tesseract from "tesseract.js";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
const COHERE_API_KEY = "hR5rMz8fJMcgEMEC6oUVPcR5ZEfFd8ZVGWDl8Oex";

const cohere = new CohereClient({
  token: COHERE_API_KEY,
});

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Función para verificar afirmaciones matemáticas
const checkAffirmation = (statement: string) => {
  // Expresión regular para detectar afirmaciones con operaciones básicas
  const affirmationRegex = /^(\d+(?:\.\d+)?)\s*([\+\-\*\/\^])\s*(\d+(?:\.\d+)?)\s*=\s*(\d+(?:\.\d+)?)$/;
  const match = statement.match(affirmationRegex);

  if (match) {
    const num1 = parseFloat(match[1]);
    const operator = match[2];
    const num2 = parseFloat(match[3]);
    const userAnswer = parseFloat(match[4]);

    let correctAnswer: number;
    switch (operator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      case '/':
        correctAnswer = num1 / num2;
        break;
      case '^':
        correctAnswer = Math.pow(num1, num2);
        break;
      default:
        return null; // Operación no reconocida
    }

    const isCorrect = Math.abs(correctAnswer - userAnswer) < 0.0001; // Tolerancia para errores de punto flotante
    return { isCorrect, correctAnswer };
  }

  return null; // No es una afirmación válida
};

const mathTutorPrompt = `Eres un tutor experto en matemáticas, física y cálculos. RESPONDE SIEMPRE EN ESPAÑOL de manera CLARA, DIRECTA y CONCISA.

IMPORTANTE: Resuelve cualquier tipo de operación o problema matemático, incluyendo pero no limitado a:
- Aritmética: suma, resta, multiplicación, división, potencias, raíces
- Álgebra: ecuaciones, sistemas de ecuaciones, factorización, simplificación de expresiones
- Geometría: áreas, volúmenes, perímetros, trigonometría, teorema de Pitágoras
- Cálculo: límites, derivadas, integrales, series
- Física: leyes del movimiento, termodinámica, electricidad y magnetismo, óptica
- Estadística: medidas de tendencia central, probabilidad, distribuciones, regresión

Sigue estos pasos para resolver el problema:

1. Identifica los datos relevantes y las incógnitas.
2. Plantea las ecuaciones necesarias o selecciona la fórmula apropiada.
3. Resuelve paso a paso, mostrando cada operación realizada.
4. Verifica los resultados y comprueba que la solución tenga sentido en el contexto del problema.
5. Proporciona la respuesta final de forma clara y concisa.

Si el problema contiene un error o es imposible de resolver, explica por qué y cómo se podría corregir.

RESTRICCIONES:
- Usa SOLO español.
- SÉ BREVE y PRECISO en tus explicaciones.
- MUESTRA los cálculos clave.
- Si la respuesta es un número, redondea a 4 decimales si es necesario.
- Si la respuesta es una expresión algebraica, simplifícala lo máximo posible.`;

export const sendQuestion = async (question: string) => {
  try {
    // Primero verificar si la pregunta es una afirmación
    const affirmationCheck = checkAffirmation(question);

    if (affirmationCheck) {
      const { isCorrect, correctAnswer } = affirmationCheck;
      if (isCorrect) {
        return { respuesta: `¡Correcto! La afirmación "${question}" es verdadera.`, error: null };
      } else {
        return {
          respuesta: `Incorrecto. La afirmación "${question}" no es verdadera. La respuesta correcta es ${correctAnswer.toFixed(0)}.`,
          error: null,
        };
      }
    }

    // Si no es una afirmación, envíala a Cohere para resolverla como una pregunta
    const response = await cohere.generate({
      model: "command",
      prompt: `${mathTutorPrompt}

               Problema o pregunta matemática: ${question}`,
      maxTokens: 1000,
      temperature: 0.1,
    });

    return {
      respuesta: response.generations[0].text,
      error: null,
    };
  } catch (error) {
    console.error("Error al procesar la pregunta matemática:", error);
    throw new Error("Error al procesar la pregunta matemática");
  }
};

export const uploadImage = async (image: File) => {
  try {
    const worker = await Tesseract.createWorker("spa");
    const imageData = await readFileAsDataURL(image);
    const {
      data: { text },
    } = await worker.recognize(imageData);
    await worker.terminate();

    console.log("Texto extraído de la imagen:", text);

    const response = await cohere.generate({
      model: "command",
      prompt: `${mathTutorPrompt}

               Problema o pregunta matemática extraída de la imagen:
               "${text}"
               
               IMPORTANTE: Si el texto extraído de la imagen no es claro o contiene errores, menciona esto en tu respuesta y procede con la mejor interpretación posible.`,
      maxTokens: 1000,
      temperature: 0.1,
    });

    return {
      resultado: response.generations[0].text,
      error: null,
    };
  } catch (error) {
    console.error("Error al procesar la imagen:", error);
    throw new Error("Error al procesar la imagen matemática");
  }
};

const readFileAsDataURL = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

