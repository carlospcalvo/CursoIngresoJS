/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados
ej.: "Usted se llama José y tiene 66 años" 	*/

/*Enunciado:
Debemos lograr tomar nombre y edad por ID.
mostrarlos concatenados
ej.: "Usted se llama José y tiene 66 años"
*/

function mostrar()
{
  var nombre;
  var edad;

  nombre = document.getElementById("elNombre").value;

  //document.getElementById("elNombre").value = prompt("Su nombre");

  edad = document.getElementById("laEdad").value;

  //document.getElementById("laEdad").value = prompt("Su edad");

  alert("Usted se llama " + nombre + " y tiene " + edad + " años.")
}

