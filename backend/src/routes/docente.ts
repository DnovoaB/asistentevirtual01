import express from 'express';
import { subirContenido, obtenerContenido } from '../controllers/docenteController';
import multer from 'multer';
import { auth } from '../middleware/auth';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/subir', auth, upload.single('archivo'), subirContenido);
router.get('/contenido', auth, obtenerContenido);

export default router;

