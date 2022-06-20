const { json } = require("express");
const express = require("express");

const Repuestoservice = require('../services/repuestos.service')
const servicio = new Repuestoservice();
const router = express.Router();

router.get('/', (req, res) => {
  const repuesto = servicio.findAll();
  res.status(200).json(repuesto);
});

router.post('/', (req, res) => {
  const body = req.body;
  servicio.create(body);
  res.status(201).json({
    mensaje: 'registro exitoso',
    datos: body
  });
});

router.put('/:id',async(req,res,) => {
  const { id }= req.params;
  try {
    const body = req.body;
    const repuesto =await servicio.update(id,body);
    res.status(200).json(repuesto);
  } catch (error) {
    res.status(404).json({
      mensaje: error.message
    });
  }

});

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body;
  servicio.update(id,body)
  res.status(200).json({
    mensaje: 'registro parcialmente actualizado',
    datos: servicio.findBy(id)
  });
});

router.delete('/:id',(req,res)=> {
  const {id} = req.params;
  servicio.delete(id);
  res.json({
  mensaje :('registro eliminado'),
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const repuesto = servicio.findBy(id);
  if (id == '10'){
    res.status(404).json(
      {
        mensaje: 'no se encuentra el repuesto solicitado'
      }
    );
  } else {
    res.status(200).json(repuesto);
  }
});

module.exports = router;
