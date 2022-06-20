const faker = require("faker")
const boom = require("@hapi/boom");
class usuarioService{
  constructor(){
    this.usuario = []
    this.generarUsuario()
  }
  generarUsuario(){
     const limite = 10
     for (let index = 0; index < limite; index++) {
       this.usuario.push({
        id: faker.datatype.uuid(),
        Correo: faker.internet.email(),
        Password: faker.internet.password(),
        esVisible: faker.datatype.boolean()
       })
     }
  }
  async create(Usuario){
    Usuario.id = faker.datatype.uuid();
    this.usuario.push(Usuario)
  }
  async update(id,Usuario){
    const posicion = this.usuario.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw boom.notFound("usuario no encontrado");
    }
    this.usuario[posicion] = Usuario;
    return this.usuario[posicion];
  }
  async delete(id){
    const posicion = this.usuario.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("Usuario no encontrado");
    }
    this.usuario.splice(posicion, 1);
    return {
      mensaje: "Usuario eliminado",
      id
    };
  }
  async findAll(){
    return this.usuario
  }
  async findBy(id){
    const Usuario = this.usuario.find(item => item.id === id)
    if (!Usuario) {
      throw boom.notFound("Usuario no encontrado");
    }
    if (!Usuario.esVisible) {
      throw boom.forbidden("Usuario no accesible");
    }
    return Usuario;
  }
}

module.exports = usuarioService
