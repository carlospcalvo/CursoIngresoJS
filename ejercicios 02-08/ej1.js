function ej1()
{
  var altura;
  var base;
  var hipo;
  var angulo;
  var superficie;

  angulo=parseInt(prompt("Ingrese el ángulo(º) formado por los catetos"));

  while(angulo==90)
  {
    altura=parseInt(prompt("Ingrese el largo (cm) del cateto adyacente"));
    base=parseInt(prompt("Ingrese el largo (cm) del cateto opuesto"));
    hipo=parseInt(prompt("Ingrese el largo (cm) de la hipotenusa"));

    superficie=(altura*base)/2
    alert("La superficie del triángulo es " + superficie + "cm cuadrados")
    break
  }
  if (angulo!=90)
  {
    alert("No es un triángulo rectángulo");
  }
}

function ej2()
/*Ejercicio 2: Se deberá cargar tenistas hasta que el usuario quiera.
Los datos a cargar serán nombre, edad, partidos ganados, partidos perdidos.
Deberemos calcular:
el promedio de edad,                            OK
cantidad de tenistas con record positivo,       OK
nombre del tenista con más victorias,           ?
nombre del tenista con más derrotas.            ?                 */
{
    var nombre;
    var edad;
    var pg;
    var pp;
    var contRatio=0;
    var promEdad;
    var contador=0;
    var seguir=true;
    var nombreMax;
    var nombreMin;
    var ganadorMax;
    var ganadorMin;

    do
    {
      do
      {
        nombre = prompt("Nombre del tenista");
      } while (isNaN(nombre)==false);

      do
      {
        edad = parseInt(prompt("Edad del tenista"));
      } while (isNaN(edad)||edad<0);

      pg = parseInt(prompt("Partidos ganados"));
      pp = parseInt(prompt("Partidos perdidos"));

      if (pg-pp>0)
      {
        contRatio++;
      }

      if(contador=1)
      {
        nombreMax = nombre;
      }

      seguir= confirm("Desea continuar cargando tenistas?");
    }while(seguir!=false);



    contador = ++contador;
    promEdad = edad/contador;

    alert("promedio de edad " + promEdad + "años"); //funciona
    alert("Cantidad de tenistas con ratio positivo= " + contRatio); //funciona

}

function ej3()
/*Se deben ingresar productos hasta que el usuario quiera.
Pedir nombre del producto, precio (>0) y temperatura de conservación (entre -10º y 20º)
Deberemos informar promedio de precio,
nombre del producto de precio máximo,
nombre del producto de precio mínimo,
precio máximo cuya temperatura de conservacón sea bajo cero,
temperatura mínima cuya tem. de conservación sea sobre cero*/
{
  var producto;

}

function ej4()
/*Se deberá pedir 10 números entre -100 y 900 y deberemos informar:
cantidad de números pares, cantidad de ceros, promedio de pares,
cantidad de números divisibles por 3,
el promedio de los números menores a 300,
la multiplicacón acumulada de los números mayores a 500 y el mayor número que sa primo*/
{
  var numero;
  var numPar=0;
  var ceros=0;
  var promPares;
  var divisiblesPor3=0;
  var multipAcum;
  var mayorPrimo;
  var contador=0;

  for( ; contador<10; contador++)
  {
    numero=parseInt(prompt("ingrese un numero"));

    if (numero%2==0)
    {
      numPar=numPar++;
    }
    else if (numero==0)
    {
      ceros=ceros++;
    }
    else if (numero%3==0)
    {
      divisiblesPor3=divisiblesPor3++;
    }

  }

}
