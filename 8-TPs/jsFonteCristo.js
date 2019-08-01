/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo
nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:

a.	Se pedirán un número positivo y se mostrará
la cantidad de números pares desde el número ingresado hasta el cero.

b.	Se pedirán un número positivo y se mostrará
la cantidad de números impares desde el número ingresado hasta el cero.

c.	Se pedirán un número positivo y se mostrará
la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.

d.	Se pedirán un número positivo y se mostrará
si el número es un número primo o no.

e.	Se pedirán un número positivo y se mostrará
la cantidad de números Primos desde el número ingresado hasta el cero.
*/

function NumerosPares()
/*Se pedirá un número positivo y se mostrará
la cantidad de números pares desde el número ingresado hasta el cero.*/
{
  var contPar=0;
  numero = parseInt(document.getElementById("numero").value);

  for(var i = 0; i<=numero; i++)
  {
    if(i % 2 == 0)
    {
      ++contPar;
    }
  }
  alert("Números pares= " + contPar);
}

function NumerosImpares()
/*Se pedirá un número positivo y se mostrará
la cantidad de números impares desde el número ingresado hasta el cero.*/
{
  var contImpar=0;
  numero = parseInt(document.getElementById("numero").value);

  for(var i = 0; i<=numero; i++)
  {
    if(i % 2 != 0)
    {
      ++contImpar;
    }
  }
  alert("Números impares= " + contImpar);
}

function NumerosDivisibles()
/* Se pedirán un número positivo y se mostrará
la cantidad de números divisibles de este número que se encuentran desde el 1 al 100. */
{
  var numDiv=0;
  numero = parseInt(document.getElementById("numero").value);

  for(var i=0; i<=100; i++)
  {
    if(numero % i == 0)
    {
      ++numDiv;
    }
  }
  alert("Números divisibles= " + numDiv);
}

function VerificarPrimo()
/*Se pedirá un número positivo y se mostrará
si el número es un número primo o no.*/
{
  var numDiv=0;
  numero = parseInt(document.getElementById("numero").value);

  for(var i=0; i<=100; i++)
  {
    if(numero % i == 0)
    {
      ++numDiv;
    }
  }
  if(numDiv>2)
  {
    alert("No es primo");
  }
  else
  {
    alert("Es primo");
  }
}

function NumerosPrimos()
/*Se pedirán un número positivo y se mostrará
la cantidad de números Primos desde el número ingresado hasta el cero.*/
{
  var numPrimos=0;
  var numDiv=0;
  numero = parseInt(document.getElementById("numero").value);

  for(var i=0;i<numero;i++)
  {
    if(numero % i == 0)
    {
      ++numDiv;
      console.log(numDiv);
    }
  }
/*
  if(numDiv=2)
  {

  }
*/

}
