//Ejercicio 1
//var nombre = prompt("ingresa nombre");
//console.log("ahora estas en la matrix "+nombre);

//Ejercicio 2
/*
var num1 = Number(prompt("Ingrese el número con decimales"));
var num2 = Number(prompt("Ingrese el número entero"));
var resultado = num1 + num2;
console.log("El resultado es: "+resultado); 
alert("El resultado es: "+resultado);
*/

//Ejercicio 3
/*
var num1 = Number(prompt("Ingrese el primer número"));
var num2 = Number(prompt("Ingrese el segundo número"));
var suma = num1 + num2;
console.log("El resultado de la suma es: "+ suma); 
alert("El resultado de la suma es: "+ suma);
var num3 = Number(prompt("Ingrese el tercer número"));
console.log("El resultado de la multiplicación es: "+ (suma*num3)); 
alert("El resultado de la multiplicación es: "+ (suma*num3));
*/

//Ejercicio 4
/*
var num1 = Number(prompt("Ingrese la cantidad de kilómetros recorridos"));
var num2 = Number(prompt("Ingrese los litros de combustible gastados"));
var resultado = num1/num2;
console.log("El consumo por kilómetro es: "+ resultado); 
alert("El consumo por kilómetro es: "+ resultado);
*/

//Ejercicio 5
/*
var far = Number(prompt("Ingrese la temperatura en Fahrenheit"));
var celsius =(5/9)*(far-32);
console.log("La temperatura en Celsius es: "+ celsius); 
alert("La temperatura en Celsius es: "+ celsius);
*/

//Ejercicio 6 
/*
var num1 = Number(prompt("Ingrese el primer número")); 
var num2 = Number(prompt("Ingrese el segundo número"));
var num3 = Number(prompt("Ingrese el tercer número"));
var prom = (num1 + num2 +num3)/3;
console.log("El promedio es: "+ prom); 
alert("El promedio es: "+ prom);
*/

//Ejercicio 7
/*
var num1 = Number(prompt("Ingrese un número"));
var resultado = num1-(num1*0.15);
console.log("Descontando el 15% es: "+resultado); 
alert("Descontando el 15% es: "+resultado);
*/

//Ejercicio 8
/*
var palabra1 = prompt("Ingrese la primera palabra");
var palabra2 = prompt("Ingrese la segunda palabra");
var resultado =  `${palabra1} ${palabra2}`;
console.log(resultado); 
alert(resultado);
*/

//Ejercicio 9
/*
var texto = prompt("Ingrese un texto");
console.log(`El primer carácter del texto es ${texto.slice(0,1)}`); 
alert(`El primer carácter del texto es ${texto.slice(0,1)}`);
var num = texto.length;
var indice = prompt(`Ingrese un número entre 0 y ${num-1}`);
console.log(`El carácter ${indice} del texto es ${texto.slice(indice,indice+1)}`); 
alert(`El carácter ${indice} del texto es ${texto.slice(indice,indice+1)}`);
*/

//Ejercicio 10 

var shows = prompt("Ingrese el número de shows vistos");
if (shows > 3){
    console.log(true); 
    alert(true);
}
else {
    console.log(false); 
    alert(false); 
}
