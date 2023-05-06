let producto1 = alert("bondiolo" + " tendra un valor de $3000")
let producto2 = alert("panceta" + " tendra un valor de $2500")
let producto3 = alert("jamon cocido" + " tendra un valor de $1500") 


let producto = prompt("ingrese los productos que desea combrar: ");
let valor1 = parseInt(prompt("ingrese el valor del primer producto"))
let valor2 = parseInt(prompt("ingrese el valor del segundo producto"))
let descuento = parseInt(prompt("¿cuantas porciones compro? (si compra 2 porciones tendra un descuento del 10%)"));


function suma(valor1, valor2) {
    resultado = valor1 + valor2
}
suma(valor1, valor2)

alert ("el valor sin descuento es de " + parseInt(resultado))

while ((producto != "") && (descuento <= 2)) {
    alert("por elegir mas de 2 porciones usted pagara " + parseInt(resultado * 0.9));
    break;
}

