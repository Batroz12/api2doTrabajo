const express = require("express");
const controlValidar = require('../middlewares/validar.middleware');
const {crearUsuarioSchema,actualizarUsuarioSchema,findByUsuarioSchema} = require("../schemas/usuario.schema");
const usuarioService = require('../services/usuario.service');
const servicio = new usuarioService();
const router = express.Router();

//Metodos
router.get('/', async (req, res, next) => {
  // servicio.findAll().then(data =>{
  //   res.status(200).json(data);
  // });
  try {
  const Usuario = await servicio.findAll();
  res.status(200).json(Usuario);
  } catch (error) {
    next(error)
  }
});

router.post('/', controlValidar(crearUsuarioSchema, 'body'), async(req, res, next) => {
  try {
    const body = req.body;
    const usuario = await servicio.create(body);
    res.status(201).json({
      mensaje: 'registro exitoso',
      datos: usuario
    });
  } catch (error) {
    next(error)
  }
});

router.put('/:id',controlValidar(actualizarUsuarioSchema, 'body'),async (req, res, next) => {
  try {
    const { id }= req.params;
      const body = {
        id: id,
        ...req.body
      }
      const Usuario =await servicio.update(id,body);
      res.status(200).json({
        mensaje: 'Usuario actualizado',
        datos: Usuario
      });
  } catch (error) {
    next(error)
  }
});

router.patch('/:id',controlValidar(actualizarUsuarioSchema, 'body'), async (req,res, next) => {
  try {
    const { id }= req.params;
      const body = {
        id: id,
        ...req.body
      }
      const Usuario =await servicio.update(id,body);
      res.status(200).json({
        mensaje: 'Usuario parcialmente actualizado',
        datos: Usuario
      });
  } catch (error) {
    next(error)
  }
});

// router.patch('/:id',async (req, res, next) => {
//   try {
//   const { id } = req.params
//   const body = req.body;
//   const Usuario = await servicio.update(id,body);
//   res.status(200).json(Usuario);
//   } catch (error) {
//     // res.status(404).json({
//     //   mensaje: error.message
//       // datos: servicio.findBy(id)
//     // });
//     next(error);
//   }
// });

router.delete('/:id',controlValidar(findByUsuarioSchema, 'params'), async (req,res, next)=> {
  try {
    const {id} = req.params;
    const UsuarioEliminado = await servicio.delete(id);
    res.status(200).json({
    mensaje :('perfil de usuario eliminado'),
    });
  } catch (error) {
    next(error)

  }
});

router.get('/:id', controlValidar(findByUsuarioSchema, 'params') , async(req, res, next) => {
  try {
    const { id } = req.params;
    const Usuario = await servicio.findBy(id);
    res.json(Usuario);
  } catch (error) {
    next(error);
  }
  // if (id == '10'){
  //   res.status(404).json(
  //     {
  //       mensaje: 'no se encuentra el perfil solicitado'
  //     }
  //   );
  // } else {
  //   res.status(200).json(Usuario);
  // }
});

module.exports = router;
