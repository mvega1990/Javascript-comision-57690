

let producto1 = "martillo"
let producto2 = "pinza"
let producto3 = "destornillador"
let producto4 = "taladro"
const iva = 1.21
let precioMartillo = 1000
let precioPinza = 1200
let precioDestornillador = 1500
let precioTaladro = 2000
let descuentoMayorista = 0.2

function precioTotal(precio, iva, cantidad) {
   return (precio * iva) * cantidad
}

function precioTotalMayorista(precio, descuento, iva, cantidad) {
   return ((precio - (precio * descuento)) * iva) * cantidad
}
alert("Tenemos estos productos: Martillo, pinzas, destornillador y taladro")
let iterar = confirm("Queres comprar algun producto?")
while (iterar) {
   let producto = prompt("Ingrese el producto que quiere comprar").toLowerCase();
   let cantidad = parseInt(prompt("Cuantos necesita?\nSi son 5 o mas tenes un 20% de desc"))
   if (producto == "" || cantidad === "" || isNaN(cantidad)) {
      alert("ingresa datos validos")
   } else if (producto == producto1 && cantidad >= 5) {
      alert("El total incluido de la compra con iva es de " + "$"+ precioTotalMayorista(precioMartillo, descuentoMayorista, iva, cantidad))
   } else if (producto == producto2 && cantidad >= 5) {
      alert("El total incluido de la compra con iva es de " + "$"+ precioTotalMayorista(precioPinza, descuentoMayorista, iva, cantidad))
   } else if (producto == producto3 && cantidad >= 5) {
      alert("El total incluido de la compra con iva es de " +"$"+ precioTotalMayorista(precioDestornillador, descuentoMayorista, iva, cantidad))
   } else if (producto == producto4 && cantidad >= 5) {
      alert("El total incluido  de la compra con iva es de " +"$"+ precioTotalMayorista(precioTaladro, descuentoMayorista, iva, cantidad))
   } else if (producto == producto1 && cantidad < 5) {
      alert("El total incluido de la compra con iva es de " +"$"+ precioTotal(precioMartillo, iva, cantidad))
   } else if (producto == producto2 && cantidad < 5) {
      alert("El total incluido de la compra con iva es de " +"$"+ precioTotalMayorista(precioPinza, iva, cantidad))
   } else if (producto == producto3 && cantidad < 5) {
      alert("El total incluido de la compra con iva es de " +"$"+ precioTotalMayorista(precioDestornillador, iva, cantidad))
   } else if (producto == producto4 && cantidad < 5) {
      alert("El total incluido de la compra con iva es de " +"$"+ precioTotalMayorista(precioTaladro, iva, cantidad))
   } else {
      alert("no tenemos ese producto")
   }
   iterar = confirm("queres saber el precio de otra compra?")
}