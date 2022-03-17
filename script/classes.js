export class Vehiculo {

    constructor(marca, modelo, precio, tipo) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.tipo = tipo;
    }

    getMarca() {
        return this.marca;
    }

    getModelo() {
        return this.modelo;
    }

    getPrecio() {
        return this.precio;
    }

    getDescripcion() {
        return `${this.tipo}, marca: ${this.marca}, modelo: ${this.modelo}, precio: ${this.precio}`;
    }

}


export class Auto extends Vehiculo {

    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio, 'Auto');
        this.puertas = puertas;
    }

    getPuertas() {
        return this.puertas;
    }

}

export class Moto extends Vehiculo {

    constructor(marca, modelo, precio, cilindrada) {
        super(marca, modelo, precio, 'Moto');
        this.cilindrada = cilindrada;
    }

    getCilindrada() {
        return this.cilindrada;
    }

}
