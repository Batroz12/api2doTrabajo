const express = require('express');

const AutoService = require('../services/autos.service');
const controlValidar = require('../middlewares/validar.middleware');
const {
  crearAutoSchema,
  actualizarAutoSchema,
  findByAutoSchema,
  eliminarAutosSchema,
} = require('../schemas/Auto.schema');

const servicio = new AutoService();
const router = express.Router();

// GET --> Mostrar
router.get('/',async (req, res) => {
  const auto = await servicio.findAll();
  res.status(200).json(auto);
});

// POST --> Crear
router.post(
  '/',
  controlValidar(crearAutoSchema, 'params'),
  async (req, res) => {
    try {
      const body = await req.body;
      servicio.create(body);
      res.status(201).json({
        mensaje: 'Auto registrado con exito',
        datos: body,
      });
    } catch (error) {
      res.status(404).json({
        mensaje: error.message,
      });
    }
  }
);

// PUT --> Actualizar
router.put(
  '/:id',
  controlValidar(actualizarAutoSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    try {
      const body = req.body;
      const auto = await servicio.update(id, body);
      res.status(200).json(auto);
    } catch (error) {
      res.status(404).json({
        mensaje: error.message,
      });
    }
  }
);

// DELETE --> Eliminar
router.delete(
  '/:id',
  controlValidar(eliminarAutosSchema, 'params'),
  (req, res) => {
    try {
      const { id } = req.params;
      const salida = servicio.delete(id);
      res.json(salida);
    } catch (error) {
      res.status(404).json({
        mensaje: error.message,
      });
    }
  }
);

router.get(
  '/:id',
  controlValidar(findByAutoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const auto = await servicio.findBy(id);
      res.json(auto);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
