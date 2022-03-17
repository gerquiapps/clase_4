import { Moto, Auto } from './classes.js';

var moto1 = new Moto('Honda', 'CBR', 380000, 1000);
var moto2 = new Moto('Yamaha', 'YBR', 420000, 1200);

var auto1 = new Auto('Ford', 'Fiesta', 550000, 4);
var auto2 = new Auto('Renault', 'Clio', 350000, 5);

console.log(moto1.getDescripcion());
console.log(moto2.getDescripcion());
console.log(auto1.getDescripcion());
console.log(auto2.getDescripcion());
