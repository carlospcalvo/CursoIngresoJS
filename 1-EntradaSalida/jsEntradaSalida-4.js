/*
	Debemos lograr tomar un dato por 'PROMPT'
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/

/*Enunciado:
Debemos lograr tomar un dato por 'PROMPT'
y lo muestro por 'id'
al presionar el botón 'mostrar'*/

function mostrar()
{
  var dato;

  dato = prompt("hola");

  dato = document.getElementById("elNombre").value;

}

/*
function mostrar()
{


  document.getElementById("elNombre").value = prompt("hola");

}
*/
