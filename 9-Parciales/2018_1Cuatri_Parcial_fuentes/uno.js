
function mostrar()
{
    var largo;
    var ancho;
    var perimetro;

    largo = parseInt(prompt("Ingrese el largo"));
    ancho = parseInt(prompt("Ingrese el ancho"));
    perimetro = ancho * 2 + largo * 2;

    alert("El perimetro del rectangulo es " + perimetro);


}
