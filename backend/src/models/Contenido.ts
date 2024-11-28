import mongoose from 'mongoose';

const contenidoSchema = new mongoose.Schema({
  archivo: { type: String, required: true },
  cronograma: { type: String, required: true },
  fechaSubida: { type: Date, default: Date.now },
});

const Contenido = mongoose.model('Contenido', contenidoSchema);

export default Contenido;

