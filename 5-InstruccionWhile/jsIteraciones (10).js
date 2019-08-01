/*
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos.        OK
2-Suma de los positivos.        OK
3-Cantidad de positivos.        OK
4-Cantidad de negativos.        OK
5-Cantidad de ceros.            OK
6-Cantidad de números pares.    OK
7-Promedio de positivos.        OK
8-Promedios de negativos.       OK
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/
function mostrar()
{

  var contPos=0;
  var contNeg=0;
  var contCero=0;
  var contPar=0;
  var numero;
  var numPos;
  var numNeg;
  var sumaPos=0;
  var sumaNeg=0;
  var promPos;
  var promNeg;
  var diferencia;
  var respuesta=true;



	while(respuesta!=false)
	{
    numero = parseInt(prompt("Ingrese un número"));


    if (numero > 0)  //si es positivo
      {
        numPos = numero;
        sumaPos = sumaPos + numPos;   //suma positivos

        ++contPos;                    //cantidad positivos
        if (numPos % 2 == 0)
          {
            ++contPar;
          }
      }

    else if (numero < 0)
      {
        numNeg = numero;
        sumaNeg = sumaNeg + numNeg;   //suma negativos

        ++contNeg;                    //cantidad negativos

        if (numNeg % 2 == 0)
          {
            ++contPar;
          }
      }

    else if (numero == 0)
     {
       ++contCero;
     }


     respuesta = confirm("Desea ingresar más números?");

  }

  if (contPos == 0)
    {
      promPos = 0;
    }
  else                              //promedio positivos
    {
      promPos = sumaPos / contPos;
    }

  if (contNeg == 0)
    {
      promNeg = 0;
    }
  else                              //promedio negativos
    {
      promNeg = sumaNeg / contNeg;
    }

  diferencia = sumaPos - sumaNeg;

  document.write("suma positivos= " + sumaPos + "<br>" + "cantidad positivos= " + contPos + "<br>");
  document.write("suma negativos= " + sumaNeg + "<br>" + "cantidad negativos= " + contNeg + "<br>");
  document.write("ceros= " + contCero + "<br>");
  document.write("cantidad pares= " + contPar + "<br>");
  document.write("promedio positivos= " + promPos + "<br>");
  document.write("promedio negativos= " + promNeg + "<br>")
  document.write("diferencia= " + diferencia + "<br>");
}//FIN DE LA FUNCIÓN
