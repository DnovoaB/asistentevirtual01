import Tesseract from 'tesseract.js';
import { exec } from 'child_process';
import util from 'util';

const execPromise = util.promisify(exec);

export const procesarImagenMatematica = async (imagePath: string): Promise<string> => {
  try {
    const { data: { text } } = await Tesseract.recognize(imagePath);
    const result = await execPromise(`python -c "import sympy; print(sympy.sympify('${text}'))""`);
    
    return result.stdout.trim();
  } catch (error) {
    console.error('Error al procesar la imagen:', error);
    throw new Error('No se pudo procesar la imagen');
  }
};

