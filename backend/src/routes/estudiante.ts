import express from 'express';
import { enviarPregunta, procesarImagen } from '../controllers/estudianteController';
import multer from 'multer';
import { auth } from '../middleware/auth';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/pregunta', auth, enviarPregunta);
router.post('/imagen', auth, upload.single('imagen'), procesarImagen);

export default router;

