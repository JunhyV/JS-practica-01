let calificacion = 9;

if (calificacion <= 10 && calificacion >= 9.1 ){ console.log("Sobresaliente");} 
else if(calificacion <= 9 && calificacion >= 7.1 ){ console.log("Notable");} 
else if(calificacion <= 7 && calificacion >= 6.1 ){ console.log("Bien");} 
else if(calificacion <= 6 && calificacion >= 5.1 ){ console.log("Suficiente");} 
else if(calificacion <= 5 && calificacion >= 3.1 ){ console.log("Insuficiente");}
else if(calificacion <= 3 && calificacion >= 0 ){ console.log("Muy deficiente");}
else{ console.log("Tu calificacion no es válida"); }
