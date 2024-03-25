"use strict";

var _cliente = require("./assets/js/cliente.js");
var _impuesto = require("./assets/js/impuesto.js");
var c1 = new _cliente.Cliente('Charlie');
var c2 = new _cliente.Cliente('Leah');
c1.impuesto = new _impuesto.Impuesto(10000, 6000);
c2.impuesto = new _impuesto.Impuesto(1000, 900);
console.log(c1.calcularImpuesto());
console.log(c2.calcularImpuesto());