/*Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
Curso de ingreso UTN FRA
*/
function mostrar()
{
    var nota;
    var sexo;
    var contador;
    var acumulador = 0;
    var notaMin;
    var contadorVarones = 0;
    var flag=0;
    var promedio;
    var sexoMin;

    for(contador =0; contador < 5; contador++)
    {
        nota = parseInt(prompt('ingrese la nota'));

        while (!(nota > 0 && nota < 10))                    //VALIDACION MEDIANTE LA NEGACION DE LOS REQUISITOS
        {
            nota = parseInt(prompt("eso no es una nota"));
        }

        sexo = prompt('ingrese el sexo');
        
        while (!(sexo == "f" || sexo =="m"))
        {
            sexo = prompt("eso no es un sexo bolchevique");
        }

        acumulador = acumulador + nota;

        if (sexo == "m" && nota >= 6)
        {
            contadorVarones++
        }

        if (nota < notaMin || flag == 0)                        //FLAG PARA MINIMOS Y/O MAXIMOS
        {
            notaMin = nota;
            sexoMin = sexo;
            flag = 1;
        }
        
        promedio = acumulador / contador;

    }

    alert("a) el promedio de las notas es " + promedio);
    alert('b) la nota mas baja es ' + notaMin + ' y su sexo es ' + sexoMin);
    alert('c) La cantidad de varones que su nota haya sido mayor o igual a 6 es de ' + contadorVarones + " alumnos.");
}
