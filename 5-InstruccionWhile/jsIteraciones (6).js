/*
Al presionar el botón pedir 5 números
e informar la suma acumulada y el promedio.
*/

function mostrar()
{

	var contador=0;
	var acumulador=0;

  while(contador < 15)
  {
    contador=contador+3;
    console.log(contador);

  }

  acumulador = contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
