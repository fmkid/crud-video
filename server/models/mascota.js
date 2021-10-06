import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const mascotaSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre obligatorio'] },
    tipo: { type: String, required: [true, 'Nombre obligatorio'] },
    genero: { type: String, required: [true, 'Nombre obligatorio'] },
    tamano: { type: String, required: [true, 'Nombre obligatorio'] },
    edad: { type: String, required: [true, 'Nombre obligatorio'] },
    descripcion: String,
    mascotaId: String,
    fecha_ingreso: { type: Date, default: Date.now },
    en_adopcion: { type: Boolean, default: true }
});

// Convertir a modelo
const Mascota = mongoose.model('Mascota', mascotaSchema);
export default Mascota;