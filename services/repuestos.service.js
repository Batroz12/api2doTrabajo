const faker = require("faker")

class Repuestoservice{
  constructor(){
    this.repuestos=[{
      id: faker.datatype.uuid(),
      nombre: "LLantas PCR",
      imagen: "https://www.imporcadi.com/wp-content/uploads/2021/07/llanta-trailer.png",
      precio: "S/400"
    },
    {
      id: faker.datatype.uuid(),
      nombre: "Timones",
      imagen: "https://www.nicepng.com/png/full/338-3380707_mazda-gt-custom-steering-wheel.png",
      precio: "S/680"
    },
    {
      id: faker.datatype.uuid(),
      nombre: "Faroles",
      imagen: "https://scdn.autoersatzteile.de/catalog/categories/513x196/27.png?rev=94077826",
      precio: "S/1280"
    }
  ]
    //this.GenerarDatos();
  }

  GenerarDatos() {
    const size = 10;
    for (let index = 0; index < size; index++) {
      this.repuestos.push({
        id: faker.datatype.uuid(),
        nombre: faker.commerce.productName(),
        precio: parseInt(faker.commerce.price()),
        imagen: faker.image.imageUrl()
      });
    }
  }

  create(repuesto) {
    repuesto.id = faker.datatype.uuid();
    this.repuestos.push(repuesto);
  }

  update(id, repuesto) {
    const posicion = this.repuestos.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("repuesto no encontrado");
    }
    this.repuestos[posicion] = repuesto;
    return this.repuestos[posicion];
  }

  delete(id) {
    const posicion = this.repuestos.findIndex(item => item.id == id);
    if (posicion === -1) {
      throw new Error("Producto no encontrado");
    }
    this.repuestos.splice(posicion, 1);
    return {
      mensaje: "operacion realizada",
      id
    };
  }

  findAll() {
    return this.repuestos;
  }

  findBy() {
    return this.repuestos.find(item => item.id === id);
  }
}

module.exports = Repuestoservice;
