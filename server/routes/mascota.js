import express from 'express';
const router = express.Router();

// importar el modelo mascota
import Mascota from '../models/mascota';

// Agregar una mascota
router.post('/mascota', async (req, res) => {
    const body = req.body;
    try {
        const mascotaDB = await Mascota.create(body);
        res.status(200).json(mascotaDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Get con parámetros
router.get('/mascota/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const mascotaDB = await Mascota.findOne({ _id });
        res.json(mascotaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Get con todos los documentos
router.get('/mascota', async (req, res) => {
    try {
        const mascotaDb = await Mascota.find();
        res.json(mascotaDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Delete eliminar una mascota
router.delete('/mascota/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const mascotaDb = await Mascota.findByIdAndDelete({ _id });
        if (!mascotaDb) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(mascotaDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Put actualizar una mascota
router.put('/mascota/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const mascotaDb = await Mascota.findByIdAndUpdate(
            _id,
            body,
            { new: true });
        res.json(mascotaDb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Exportamos la configuración de express app
module.exports = router;