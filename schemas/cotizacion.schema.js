const Joi = require('joi')
//Cliente
const Dni = Joi.string().min(8);
const Nombre = Joi.string().max(20);
const Apellido = Joi.string().max(25);
const Email = Joi.string().email();
const Telefono = Joi.string().min(9);
const Departamento = Joi.string().max(10);
//Vehiculo
const Marca = Joi.string().max(20);
const Estado = Joi.string().max(20);
const Modelo = Joi.string().max(20);
const Version = Joi.string().max(20);

const crearCotizacionSchema = Joi.object({
})

const crearClienteSchema = Joi.object({
  Dni: Dni.required(),
  Nombre: Nombre.required(),
  Apellido: Apellido.required(),
  Email: Email.required(),
  Telefono: Telefono.required(),
  Departamento: Departamento.required(),
})

const crearVehiculoSchema = Joi.object({
  Marca: Marca.required(),
  Estado: Estado.required(),
  Modelo: Modelo.required(),
  Version: Version.required(),
})

module.exports = {crearClienteSchema,crearVehiculoSchema,crearCotizacionSchema}
