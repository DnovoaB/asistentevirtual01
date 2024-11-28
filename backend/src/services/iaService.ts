import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const generarRespuesta = async (pregunta: string): Promise<string> => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: pregunta,
      max_tokens: 150
    });

    if (!completion.data.choices || completion.data.choices.length === 0) {
      throw new Error('No se recibió una respuesta válida de la IA');
    }

    const respuesta = completion.data.choices[0].text;
    return respuesta ? respuesta.trim() : 'No se pudo generar una respuesta';

  } catch (error) {
    console.error('Error al generar respuesta:', error);
    throw new Error('No se pudo generar una respuesta');
  }
};

