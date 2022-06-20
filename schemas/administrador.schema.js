const Joi = require('joi')

const id = Joi.string().uuid()
const Correo = Joi.string().email();
const Password = Joi.string().min(1).max(30);

const crearAdministradorSchema = Joi.object({
  // id: id.required(),
  Correo: Correo.required(),
  Password: Password.required(),
})

const actualizarAdministradorSchema = Joi.object({
  // id: id.required(),
  Correo,
  Password,
})

const findByAdministradorSchema = Joi.object({
  id: id.required()
})
module.exports = {crearAdministradorSchema,actualizarAdministradorSchema,findByAdministradorSchema}
