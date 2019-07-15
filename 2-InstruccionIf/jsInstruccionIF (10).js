function mostrar()
{
	var nota
	
	nota = Math.floor(Math.random() * (10 - 1)) + 1;

	if (nota >= 9)
		alert(nota + ": EXCELENTE");
	
	else if (nota < 9 && nota >= 4)
		alert(nota + ": APROBO");
	 
	else if (nota < 4)
		alert(nota + ": Vamos, la proxima se puede");
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN