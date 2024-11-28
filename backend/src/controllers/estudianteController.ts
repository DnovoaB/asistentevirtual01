import type { Request, Response } from 'express';
import { generarRespuesta } from '../services/iaService';
import { procesarImagenMatematica } from '../services/ocrService';

export const enviarPregunta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { pregunta } = req.body;
    const respuesta = await generarRespuesta(pregunta);
    res.json({ respuesta });
  } catch (error) {
    console.error('Error al procesar la pregunta:', error);
    res.status(500).json({ message: 'Error al procesar la pregunta' });
  }
};

export const procesarImagen = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({ message: 'No se ha subido ninguna imagen' });
      return;
    }

    const resultado = await procesarImagenMatematica(req.file.path);
    res.json({ resultado });
  } catch (error) {
    console.error('Error al procesar la imagen:', error);
    res.status(500).json({ message: 'Error al procesar la imagen' });
  }
};

