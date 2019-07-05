/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var result;

    sueldo = document.getElementById("sueldo").value;
    
    sueldo = parseInt(sueldo);
    
    result = document.getElementById("resultado").value;
    
    document.getElementById("resultado").value = (sueldo * 1.1);
}
