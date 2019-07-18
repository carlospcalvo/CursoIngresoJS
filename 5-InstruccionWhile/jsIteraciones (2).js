/*
al presionar el botón mostrar
10 repeticiones con números DESCENDENTES,
desde el 10 al 1.
*/
/*
function mostrar()
{
	alert('iteración while');

  var num = 10;

  while(num > 0)
  {
    alert(num);
    --num;
  }

}//FIN DE LA FUNCIÓN
*/

function mostrar()
{
  for (var contador = 10; contador > 0; --contador)
  {
    alert(contador);
  }
}
