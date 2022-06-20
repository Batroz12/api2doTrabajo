const faker = require("faker")
const boom = require("@hapi/boom");

class AutoService{
  constructor(){
    this.autos=[{
      id: faker.datatype.uuid(),
      nombre: "4Runner",
      imagen: "https://www.toyotaperu.com.pe/sites/default/files/camioneta-4Runner-Toyota-4x4.png",
      precio: 23100
    },
    {
      id: faker.datatype.uuid(),
      nombre: "Avanza",
      imagen: "https://www.toyotaperu.com.pe/sites/default/files/avanza-listado_0.png",
      precio: 82680
    },
    {
      id: faker.datatype.uuid(),
      nombre: "Hilux",
      imagen: "https://www.toyotaperu.com.pe/sites/default/files/HILUX.png",
      precio: 160280
    }
  ]
    //this.GenerarDatos();
  }

  GenerarDatos() {
    const size = 10;
    for (let index = 0; index < size; index++) {
      this.autos.push({
        id: faker.datatype.uuid(),
        nombre: faker.commerce.productName(),
        precio: parseInt(faker.commerce.price()),
        imagen: faker.image.imageUrl()
      });
    }
  }

  create(auto) {
    const costo = auto.precio;
    if (costo < 10000) {
      throw boom.notFound("El Costo minimo de un Auto es $10000");
    } 
    auto.id = faker.datatype.uuid();
    this.autos.push(auto);
  }

  update(id, auto) {
    const posicion = this.autos.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw boom.notFound("Auto no encontrado");
    }
    this.autos[posicion] = auto;
    return this.autos[posicion];
  }

  delete(id) {
    const posicion = this.autos.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw boom.notFound("Auto no encontrado");
    }
    this.autos.splice(posicion, 1);
    return {
      mensaje: "Auto Eliminado",
      id
    };
  }

  findAll(){
    return new Promise((resolve,reject)=>{
    setTimeout(() =>{
      resolve (this.autos);
    },
      1000)
   });
  }

  findBy(id){
    const auto = this.autos.find(item =>item.id == id);
    if (!auto){
      throw boom.notFound("Auto no encontrado");
    }
    if (!auto.id){
      throw boom.forbidden("Auto no encontrado");
    }
    return auto;
  }

}

module.exports = AutoService;
