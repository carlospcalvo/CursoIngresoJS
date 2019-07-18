/*
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
  var mesDelAño = document.getElementById('mes').value;

  switch(mesDelAño)
  {
    case "Enero":
    {
      alert("Winter is coming.");
      break;
    }
    case "Febrero" :
    {
      alert("Winter is coming.");
      break;
    }
    case "Marzo":
    {
      alert("Winter is coming.");
      break;
    }
    case "Abril":
    {
      alert("Winter is coming.");
      break;
    }
    case "Mayo":
    {
      alert("Winter is coming.");
      break;
    }
    case "Junio":
    {
      alert("Winter is coming.");
      break;
    }
    case "Julio":
    {
      alert("Winter is here.");
      break;
    }
    case "Agosto":
    {
      alert("Winter is here.");
      break;
    }
    case "Septiembre":
    {
      alert("Winter is gone.");
      break;
    }
    case "Octubre":
    {
      alert("Winter is gone.");
      break;
    }
    case "Noviembre":
    {
      alert("Winter is gone.");
      break;
    }
    case "Diciembre":
    {
      alert("Winter is gone.");
      break;
    }
  }




}//FIN DE LA FUNCIÓN
