class CotizacionService {
  cotizacion = []
  Cliente = []
  Vehiculo = []

  constructor() {
    this.Cotizacion=[
    this.Cliente = [],
    this.Vehiculo = []]
  }

  async ListaC(){
    return this.Cotizacion
    // return this.Cliente
    // return this.Vehiculo
  }
  // ListaV(){
  //   return this.Vehiculo
  // }

  NuevaCotizacion(aux){
    const tamaño = this.Cotizacion.length
    if (tamaño == 0){
      aux.id = 1
    }else{
      aux.id = this.Cotizacion[tamaño-1].id + 1
    }
    this.Cotizacion.push(aux)
  }
  
  async NuevoCliente(aux){
    const tamaño = this.Cliente.length
    if (tamaño == 0){
      aux.id = 1
    }else{
      aux.id = this.Cliente[tamaño-1].id + 1
    }
    this.Cliente.push(aux)
  }

  async NuevoVehiculo(aux){
    const tamaño = this.Vehiculo.length
    if (tamaño == 0){
      aux.id = 1
    }else{
      aux.id = this.Vehiculo[tamaño-1].id + 1
    }
    this.Vehiculo.push(aux)
  }

}
module.exports = CotizacionService;
