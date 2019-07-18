/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

/*
function mostrar()
{

var clave = prompt("ingrese el número clave.");
contador = 0

while(clave != "utn750")
{
  clave = prompt("Clave incorrecta. Reingrese clave");
  contador ++;
  if (contador == 3)
    break;
}



}//FIN DE LA FUNCIÓN
*/
/*
function mostrar()
{
  var clave;
  contador = 0
  var error = false; //variable bandera o semaforo

  do
  {
    clave = prompt("Clave incorrecta, reingrese clave");
    contador++;

    if (contador == 3)
      {
        error = true;
        break;
      }
  }
  while (clave != "utn750");

  if(error=true)
    {
      alert("Error");
    }
  else
   {
      alert("Exito");
    }
}
*/

function mostrar()
{
  var clave = prompt("ingrese el número clave.");
  var error = false;
  var contador = 0;

  for( ; clave != "utn750"; )
  {
    clave = prompt("Ingrese la clave");
    if (contador == 3)
      {
        error = true;
        break;
  }

  if(error=true)
    {
      alert("Error");
    }
  else
    {
     alert("Exito");
    }
  }
}
