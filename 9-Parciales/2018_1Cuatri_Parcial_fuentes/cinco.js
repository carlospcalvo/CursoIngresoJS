/*pedir el ingreso de un planeta del sistema solar 
Si es la tierra mostrar "acá vivimos". 
Si está más cerca del sol, "acá hace más calor". 
Si está más lejos del sol, "acá hace más frio". 
Si no es un planeta valido informarlo. 
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).*/

function mostrar()
{
    var planeta;

    planeta = prompt('ingrese un planeta');
    //planeta = planeta.toLowercase();    
    
    while 
    (planeta != "mercurio" &&
    planeta != "venus" &&
    planeta != "tierra" &&
    planeta != 'marte' &&
    planeta != 'jupiter' &&
    planeta != 'saturno' &&
    planeta != 'urano' &&
    planeta != 'neptuno')
    {
        planeta = prompt('Planeta no valido, reingrese');
    }
 
    switch(planeta)
    {
        case "mercurio": 
        case "venus":
            alert("aca hace mas calor");
            break;
        case "tierra":
            alert("aca vivimos");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("aca hace mas frio");
            break;           
    }
}
