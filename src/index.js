import {Cliente} from './assets/js/cliente.js';
import {Impuesto} from './assets/js/impuesto.js';
let c1 = new Cliente('Charlie');
let c2 = new Cliente('Leah');

c1.impuesto = new Impuesto(10000,6000);
c2.impuesto = new Impuesto(1000,900);

console.log(c1.calcularImpuesto());
console.log(c2.calcularImpuesto()); 