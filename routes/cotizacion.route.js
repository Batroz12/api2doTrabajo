const express = require("express");
const controlValidar = require('../middlewares/validar.middleware');
const {crearClienteSchema,crearVehiculoSchema,crearCotizacionSchema} = require("../schemas/cotizacion.schema");
const CotizacionService = require('../services/cotizacion.service')
const servicio = new CotizacionService();
const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('')
// });

router.get('/listaC', async (req, res, next) => {
  try {
    const lista = await servicio.ListaC();
    res.status(200).json(lista);
  } catch (error) {
    next(error)
  }
});

// router.get('/listaV', (req, res) => {
//   res.status(200).json(servicio.ListaV())
// });

router.post('/NuevoC', controlValidar(crearClienteSchema, 'body'), async (req, res, next) => {
  try {
  const body = req.body;
  const NuevoCliente = await servicio.NuevoCliente(body);
  res.status(200).json({
    mensaje: "Datos agregados",
    Datos: NuevoCliente
  });
  } catch (error) {
    next(error)
  }
});

router.post('/NuevoV',controlValidar(crearVehiculoSchema,'body') ,async (req, res, next) => {
  try {
    const body = req.body;
    const NuevoVehiculo = await servicio.NuevoVehiculo(body);
    res.status(200).json({
      mensaje: "Datos agregados",
      Datos: NuevoVehiculo
    });
  } catch (error) {
    next(error)
  }
});
module.exports = router;
