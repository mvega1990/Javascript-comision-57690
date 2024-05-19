const iva = 1.21;
const descuentoMayorista = 0.2;

class Producto {
    constructor(id, nombre, marca, precio) {
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
    sumaIva() {
        return this.precio = this.precio * iva;
    }
    precioTotalMayorista(precio, descuento, iva, cantidad) {
        return ((precio - (precio * descuento)) * iva) * cantidad;
    }
}

let productos = [];

let producto1 = new Producto("1", "amoladora", "umi", 80000);
let producto2 = new Producto("2", "taladro", "lusqtoff", 70000);
let producto3 = new Producto("3", "pistola de calor", "gamma", 30000);
let producto4 = new Producto("4", "destornillador", "bremen", 10000);
let producto5 = new Producto("5", "alicate", "bremen", 8000);
let producto6 = new Producto("6", "pinza", "bremen", 6000);

productos.push(producto1, producto2, producto3, producto4, producto5, producto6);

console.table(productos);


function encontrarProducto() {
    let palabraClave = prompt("¿Qué producto estás buscando?").trim().toLowerCase();
    if (!isNaN(palabraClave) || palabraClave ===""){
        alert("ingrese datos validos")
        return null
        
    }
    let resultado = productos.find((producto) => producto.nombre.toLowerCase().includes(palabraClave));

    if (resultado) {
        alert("Tenemos ese producto")
        return resultado;
    } else {
        alert("No tenemos ese producto");
        return null;
    }
}
function filtrarProductosSegunPrecio(){
    let palabraClave= parseInt(prompt("Ingrese el valor maximo que quiere gastar"))
    if (isNaN(palabraClave) || palabraClave=="") {
      alert("Por favor, ingrese un número válido.");
      return;
  }
    let resultado = productos.filter(producto => producto.precio <= palabraClave)
    if(resultado.length>0){
        console.table(resultado);
    }else{
        alert ("No hay productos menores a ese precio");
    }
}

let iterar=true

    while (iterar) {
        let resultado = encontrarProducto();
        if (resultado) {
            iterar = confirm("¿Quieres comprar el producto?");
        let cantidad = parseInt(prompt("¿Cuántos necesita?\nSi son 5 o más, tienes un 20% de descuento"));
        if (cantidad >= 5) {
            alert("El valor de su compra es de " + resultado.precioTotalMayorista(resultado.precio, descuentoMayorista, iva, cantidad));
        } else {
            alert("El valor de su compra es de " + (resultado.precio * cantidad * iva));
        }
        iterar = confirm("¿Desea continuar?");
    }
}
filtrarProductosSegunPrecio()