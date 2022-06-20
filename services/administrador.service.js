const faker = require("faker")
const boom = require("@hapi/boom");
class administradorService{
  constructor(){
    this.administrador = []
    this.generarAdministrador()
  }
  generarAdministrador(){
     const limite = 10
     for (let index = 0; index < limite; index++) {
       this.administrador.push({
        id: faker.datatype.uuid(),
        correo: faker.internet.email(),
        contraseña: faker.internet.password(),
        esVisible: faker.datatype.boolean()
       })
     }
  }
  async create(Administrador){
    Administrador.id = faker.datatype.uuid();
    this.administrador.push(Administrador)
  }
  async update(id,Administrador){
    const posicion = this.administrador.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("administrador no encontrado");
    }
    this.administrador[posicion] = Administrador;
    return this.administrador[posicion];
  }
  async delete(id){
    const posicion = this.administrador.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("Administrador no encontrado");
    }
    this.administrador.splice(posicion, 1);
    return {
      mensaje: "Administrador eliminado",
      id
    };
  }
  async findAll(){
    return this.administrador
  }
  async findBy(id){
    const Administrador = this.administrador.find(item => item.id === id)
    if (!Administrador) {
      throw boom.notFound("Administrador no encontrado");
    }
    if (!Administrador.esVisible) {
      throw boom.forbidden("Administrador no accesible");
    }
    return Administrador;
  }
}

module.exports = administradorService
