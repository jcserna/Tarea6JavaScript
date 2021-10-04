//Ejercicio 1
/*
var nombre = prompt("ingresa nombre");
Jconsole.log("ahora estas en la matrix "+nombre);
*/

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
var indice = Number(prompt(`Ingrese un número entre 0 y ${num-1}`));
console.log(`El carácter ${indice} del texto es ${texto.slice(indice,indice+1)}`); 
alert(`El carácter ${indice} del texto es ${texto.slice(indice,indice+1)}`);
*/

//Ejercicio 10 
/*
var shows = prompt("Ingrese el número de shows vistos");
if (shows > 3){
    console.log(true); 
    alert(true);
}
else {
    console.log(false); 
    alert(false); 
}
*/

//Ejercicio 11
/*
var fecha = Number(prompt("Ingrese la fecha"))
var aux3 = parseInt(fecha%10000);
var aux2 = parseInt((fecha/10000)%100);
var aux1 = parseInt(fecha/1000000);
console.log(`${aux1}/${aux2}/${aux3}`); 
alert(`${aux1}/${aux2}/${aux3}`); 
*/

//Ejercicio 12
/*
var numero = Number(prompt("Ingrese el número"));
if(numero == 0){
    console.log("El número es cero"); 
    alert("El número es cero");
}

else if(numero%2 == 0){
    console.log("El número es par"); 
    alert("El número es par");
}

else{
    console.log("El número es impar"); 
    alert("El número es impar");
}
*/

//Ejercicio 13
/*
var edad = Number(prompt("Ingrese su edad"));
var nArticulos = Number(prompt("Ingrese el número de artículos comprados"))
if(edad >= 18 && nArticulos > 1){
    console.log(true); 
    alert(true);
}
else{
    console.log(false); 
    alert(false);
}
*/

//Ejercicio 14
/*
var texto = prompt("Ingrese el texto");
var num = texto.length;
if(num == 0){
    console.log("El texto no tiene caractéres"); 
    alert("El texto no tiene caractéres"); 
}
else if(num%2 == 0){
    console.log("El texto tiene número de caractéres pares"); 
    alert("El texto tiene número de caractéres pares");
}

else{
    console.log("El texto tiene número de caractéres impares"); 
    alert("El texto tiene número de caractéres impares");
}
*/

//Ejercicio15
/*
var palabra1 = prompt("Ingrese la primera palabra");
var palabra2 = prompt("Ingrese la segunda palabra");
if (palabra1 == palabra2){
    console.log("Las dos palabras tienen la misma cantidad de letras"); 
    alert("Las dos palabras tienen la misma cantidad de letras");
}
else if(palabra1 < palabra2){
    console.log(true); 
    alert(true);
}
else{
    console.log(false); 
    alert(false);
}
*/
 
//Ejercicio 16
/*
var nom1 = prompt("Nombre 1");
var nom2 = prompt("Nombre 2");
var ultimoNom1 = (nom1.substr(-1));
var ultimoNom2 = (nom2.substr(-1));
var primerNom1 = nom1.slice(0,1);
var primerNom2 = nom2.slice(0,1);

if(ultimoNom1==ultimoNom2 || primerNom1==primerNom2)
{
    console.log(true); 
    alert(true);
}
else{
    console.log(false); 
    alert(false);
}
*/

//Ejercicio 17
/*
var numero = Number(prompt("Ingrese un número"));
if(numero < 0){
    numero = numero * (-1);
    console.log(numero); 
    alert(numero); 
}
else {
    console.log(numero); 
    alert(numero); 
}
*/

//Ejercicio 18
/*
var num1 = Number(prompt("Ingrese el primer número"));
var num2 = Number(prompt("Ingrese el segundo número"))
var temp;
if(num1==num2){
    console.log("Los números son iguales"); 
    alert("Los números son iguales"); 
}
else if(num2>num1){
    temp=num2;
    console.log(temp); 
    alert(temp);
}
else{
    temp=num1;
    console.log(temp); 
    alert(temp);
}
*/

//Ejercicio 19
var letra = prompt("Ingrese la letra");
if(letra.length>1){
    console.log("No se puede procesar el dato"); 
        alert("No se puede procesar el dato");
}
else if(letra.length==1){
switch (letra) {
    case "a":
        console.log("Es vocal"); 
        alert("Es vocal");
      break;
    case "e":
        console.log("Es vocal"); 
        alert("Es vocal");
      break;
    case "i":
        console.log("Es vocal"); 
        alert("Es vocal");
      break;
    case "o":
        console.log("Es vocal"); 
        alert("Es vocal");
      break;
    case "u":
        console.log("Es vocal"); 
        alert("Es vocal");
      break;
    default:
        console.log("La letra no es vocal"); 
        alert("La letra no es vocal"); 
  }
}


//Ejercicio 20
/*
var num1 = Number(prompt("Ingrese el primer número"));
var temp = num1;
var num2 = Number(prompt("Ingrese el segundo número"));
if(num2<temp){
    temp = num2;
}
var num3 = Number(prompt("Ingrese el tercer número"));
if(num3<temp){
    temp = num3;
}
    console.log(temp); 
    alert(temp);
*/

