/*Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".*/
function mostrar()
{
    var numeroUno;
    var numeroDos;
    var suma;
    numeroUno = parseInt(prompt('Ingrese el primer numero'));
    numeroDos = parseInt(prompt('Ingrese el segundo numero'));

    if (numeroUno == numeroDos)
    {
        alert(numeroUno + "" + numeroDos);
    }
    else if (numeroUno > numeroDos)
    {
        alert(numeroUno-numeroDos);
    }
    else if (numeroUno < numeroDos)
    {
        alert(numeroUno + numeroDos);
        if (numeroUno + numeroDos > 10)
        {
            alert("La suma es " + (numeroUno + numeroDos) + " y supero el 10");
        }
    }/*
    else if (numeroUno + numeroDos > 10)
    {
        suma = numeroUno + numeroDos;
        
    }*/
}
