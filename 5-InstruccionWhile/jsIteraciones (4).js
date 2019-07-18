/*
al presionar el botón
pedir un número entre 0 y 9 inclusive.
*/

/* version do-while

function mostrar()
{

	var numero ;

  do
  {
    numero = prompt("ingrese un número entre 0 y 9.")
    numero = parseInt(numero)
  }
  while (numero <0 || numero >9);
  document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN
*/

//version marian
function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

  while(numero < 0 || numero > 10)
  {
		alert("Dato incorrecto");
		numero = parseInt(prompt("Reingrese numero entre 0 y 10 "))
	}

	document.getElementById("Numero").value = numero;

}
