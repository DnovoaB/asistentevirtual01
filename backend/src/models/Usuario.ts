import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, enum: ['docente', 'estudiante'], required: true },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;

