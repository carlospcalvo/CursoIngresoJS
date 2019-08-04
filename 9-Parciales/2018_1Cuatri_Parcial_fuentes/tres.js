/*Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id.*/
function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio = parseInt(prompt("Precio"));
    descuento = parseInt(prompt("descuento(%)"));
    precioFinal = precio - (precio*descuento/100);
    document.getElementById('elPrecioFinal').value = precioFinal; 

}
