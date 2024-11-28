import type { Request, Response } from 'express';
import Contenido from '../models/Contenido';

export const subirContenido = async (req: Request, res: Response): Promise<void> => {
  try {
    const { cronograma } = req.body;
    const archivo = req.file;

    if (!archivo) {
      res.status(400).json({ message: 'No se ha subido ningún archivo' });
      return;
    }

    const nuevoContenido = new Contenido({
      archivo: archivo.path,
      cronograma,
    });

    await nuevoContenido.save();

    res.status(201).json({
      message: 'Contenido subido exitosamente',
      contenido: nuevoContenido
    });
  } catch (error) {
    console.error('Error al subir contenido:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const obtenerContenido = async (_req: Request, res: Response): Promise<void> => {
  try {
    const contenido = await Contenido.find();
    res.status(200).json(contenido);
  } catch (error) {
    console.error('Error al obtener contenido:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

