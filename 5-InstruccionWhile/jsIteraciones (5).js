/*
Al presionar el botón
pedir un sexo 'f' para femenino,
'm' para masculino
*/

/*
function mostrar()
{

var sexo = prompt("ingrese 'f' ó 'm'.");

while(sexo != "f" && sexo != "m")
  {
    alert("Eso no es un sexo, bolchevique");
    sexo = prompt("Ingrese 'f' o 'm'");
  }

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN

*/

function mostrar()
{

var sexo = prompt("ingrese 'f' ó 'm'.");

do
  {
    sexo = prompt("Ingrese 'f' ó 'm'");
  }
while (sexo != "f" && sexo != "m");

document.getElementById('Sexo').value=sexo;
}
