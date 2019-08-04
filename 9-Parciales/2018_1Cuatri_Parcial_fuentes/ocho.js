/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares.                                            OK
b) La cantidad de números impares.                                          OK
c) La cantidad de ceros.                                                    OK
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.
*/

function mostrar()
{
    var num;
    var letra;
    var seguir = true;
    var numPar = 0;
    var numImpar = 0;
    var ceros = 0;
    var acumPos = 0;
    var contPos = 0;
    var promPos;
    var sumaNeg=0;
    var flag=0;
    var numMax;
    var numMin;
    var letMax;
    var letMin;

    do
    {
        letra = prompt('ingrese una letra');
        
        num = parseInt(prompt('ingrese un numero'));
    //Validacion del numero
        while (!(num < 100 && num >-100))
        {
            num = parseInt(prompt('error reingrese numero'));
        }
    //consultar al usuario si quiere seguir introduciendo datos
        seguir = confirm("Desea continuar?");
    //contador pares
        if(num % 2 == 0 && num!=0)
        {
            numPar++;
        }
    //contador impares
        else if(!(num % 2 == 0 || num == 0))
        {
            numImpar++;
        }
    //contador ceros
        else if (num == 0)
        {
            ceros++;
        }
    //acumulador positivos para el promedio
        if(num>0)
        {
            contPos++;
            acumPos = acumPos + num;
        }
    //suma (acumulador) negrativos
        if(!(num>0))
        {
            sumaNeg = sumaNeg + num;
        }
    //Flags para maximos y minimos
        if(num < numMin || flag == 0)
        {
            numMin = num;
            letMin = letra;
            flag++
        }

        if(num > numMax || flag == 1)
        {
            numMax = num;
            letMax = letra;
            flag++
        }

    }while (seguir==true)
    //promedio 
    promPos = acumPos / contPos

    document.write('La cantidad de numeros pares es ' + numPar + "<br>");
    document.write("La cantidad de numeros impares es " + numImpar + "<br>");
    document.write("La cantidad de ceros es " + ceros + "<br>");
    document.write("El promedio de todos los numeros positivos ingresados es " + promPos + "<br>");
    document.write("La suma de todos los numeros negativos es " + sumaNeg + "<br>");
    document.write("El minimo es " + numMin + " y su letra correspondiente es " + letMin + "<br>");
    document.write("El maximo es " + numMax + " y su letra correspondiente es " + letMax + "<br>");
    
}