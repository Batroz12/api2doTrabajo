const faker = require("faker")

class AccesorioService{
  constructor(){
    this.accesorios=[{
      id: faker.datatype.uuid(),
      nombre: "Reproductor",
      imagen: "https://cdn.autoteiledirekt.de/thumb?id=15750846&m=0&n=0&lng=es&rev=94077826",
      precio: "S/2100"
    },
    {
      id: faker.datatype.uuid(),
      nombre: "Tapabucos",
      imagen: "https://media.autoteiledirekt.de/360_photos/16368508/preview.jpg",
    precio: "S/2680"
    },
    {
      id: faker.datatype.uuid(),
      nombre: "Cubre Asientos",
      imagen: "https://cdn.autoteiledirekt.de/thumb?id=13626718&m=0&n=0&lng=es&rev=94077826",
      precio: "S/280"
    }
  ]
    //this.GenerarDatos();
  }

  GenerarDatos() {
    const size = 10;
    for (let index = 0; index < size; index++) {
      this.accesorios.push({
        id: faker.datatype.uuid(),
        nombre: faker.commerce.productName(),
        precio: parseInt(faker.commerce.price()),
        imagen: faker.image.imageUrl()
      });
    }
  }

  create(accesorio) {
    accesorio.id = faker.datatype.uuid();
    this.accesorios.push(accesorio);
  }

  update(id, accesorio) {
    const posicion = this.accesorios.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("accesorio no encontrado");
    }
    this.accesorios[posicion] = accesorio;
    return this.accesorios[posicion];
  }

  delete(id) {
    const posicion = this.accesorios.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("Producto no encontrado");
    }
    this.accesorios.splice(posicion, 1);
    return {
      mensaje: "operacion realizada",
      id
    };
  }

  findAll() {
    return this.accesorios;
  }

  findBy() {
    return this.accesorios.find(item => item.id === id);
  }
}

module.exports = AccesorioService;
