console.log("Hellow World");

let suma = 3 + 5;
document.write("El resultado de la suma  3 + 5 es " + suma);

let numero = prompt("Ingresa un número para validar si es número primo")
if(numero == 2 || numero == 3){
    document.write("<br> El número " + numero + ' es número primo')
} else if(numero % 2 == 0 || numero % 3 == 0){
    document.write("<br> El número " + numero + ' no es número primo');
} 
else {
    document.write("<br> Ingresa un número valido");
}

let calificacion = prompt('Ingresa una calificación del 0 - 10')
console.log('Tu calificacion es ' + calificacion);
if (calificacion < 11 && calificacion > 8.9){
    document.write("<br> Tu calificación de " + calificacion + ' es Sobresaliente');
} else if(calificacion < 9 && calificacion > 6.9){
    document.write("<br> Tu calificación de " + calificacion + ' es Notable');
} else if(calificacion < 8 && calificacion > 5.9){
    document.write("<br> Tu calificación de " + calificacion + ' es Bien');
} else if(calificacion < 6 && calificacion > 4.9){
    document.write("<br> Tu calificación de " + calificacion + ' es Suficiente');
} else if(calificacion < 5 && calificacion > 2.9){
    document.write("<br> Tu calificación de " + calificacion + ' es insuficiente');
} else if(calificacion < 3 && calificacion > -0.1){
    document.write("<br> Tu calificación de " + calificacion + ' es Muy deficiente');
}else {
    document.write('<br> Haz que "calificacion" sea un numero entre 0 y 10');
}