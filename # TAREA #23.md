# TAREA #23

## PARTICIPANTES
1. Juan Camilo Serna R.

## Ejercicio #1
Escribir un programa.....

```javascript
var nombre = prompt("ingresa nombre");
console.log("ahora estas en la matrix "+nombre);
```
![I1](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio1.png)

## Ejercicio #2
Escribir un programa.....

```javascript
var num1 = Number(prompt("Ingrese el número con decimales"));
var num2 = Number(prompt("Ingrese el número entero"));
var resultado = num1 + num2;
console.log("El resultado es: "+resultado); 
alert("El resultado es: "+resultado);
```
![I2](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio2.png)


## Ejercicio #3
Escribir un programa.....

```javascript
var num1 = Number(prompt("Ingrese el primer número"));
var num2 = Number(prompt("Ingrese el segundo número"));
var suma = num1 + num2;
console.log("El resultado de la suma es: "+ suma); 
alert("El resultado de la suma es: "+ suma);
var num3 = Number(prompt("Ingrese el tercer número"));
console.log("El resultado de la multiplicación es: "+ (suma*num3)); 
alert("El resultado de la multiplicación es: "+ (suma*num3));
```
![I3](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio3.png)

## Ejercicio #4
Escribir un programa.....

```javascript
var num1 = Number(prompt("Ingrese la cantidad de kilómetros recorridos"));
var num2 = Number(prompt("Ingrese los litros de combustible gastados"));
var resultado = num1/num2;
console.log("El consumo por kilómetro es: "+ resultado); 
alert("El consumo por kilómetro es: "+ resultado);
```
![I4](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio4.png)


## Ejercicio #5
Escribir un programa.....

```javascript
var far = Number(prompt("Ingrese la temperatura en Fahrenheit"));
var celsius =(5/9)*(far-32);
console.log("La temperatura en Celsius es: "+ celsius); 
alert("La temperatura en Celsius es: "+ celsius);
```
![I5](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio5.png)


## Ejercicio #6
Escribir un programa.....

```javascript
var num1 = Number(prompt("Ingrese el primer número")); 
var num2 = Number(prompt("Ingrese el segundo número"));
var num3 = Number(prompt("Ingrese el tercer número"));
var prom = (num1 + num2 +num3)/3;
console.log("El promedio es: "+ prom); 
alert("El promedio es: "+ prom);
```
![I6](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio6.png)

## Ejercicio #7
Escribir un programa.....

```javascript
var num1 = Number(prompt("Ingrese un número"));
var resultado = num1-(num1*0.15);
console.log("Descontando el 15% es: "+resultado); 
alert("Descontando el 15% es: "+resultado);
```
![I7](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio7.png)

## Ejercicio #8
Escribir un programa.....

```javascript
var palabra1 = prompt("Ingrese la primera palabra");
var palabra2 = prompt("Ingrese la segunda palabra");
var resultado =  `${palabra1} ${palabra2}`;
console.log(resultado); 
alert(resultado);
```
![I8](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio8.png)

## Ejercicio #9
Escribir un programa.....

```javascript
var texto = prompt("Ingrese un texto");
console.log(`El primer carácter del texto es ${texto.slice(0,1)}`); 
alert(`El primer carácter del texto es ${texto.slice(0,1)}`);
var num = texto.length;
var indice = prompt(`Ingrese un número entre 0 y ${num-1}`);
console.log(`El carácter ${indice} del texto es ${texto.slice(indice,indice+1)}`); 
alert(`El carácter ${indice} del texto es ${texto.slice(indice,indice+1)}`);
```
![I9](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio9.png)

## Ejercicio #10
Escribir un programa.....

```javascript
var shows = prompt("Ingrese el número de shows vistos");
if (shows > 3){
    console.log(true); 
    alert(true);
}
else {
    console.log(false); 
    alert(false); 
}
```
![I10](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio10.png)

## Ejercicio #11
Escribir un programa.....

```javascript
var fecha = Number(prompt("Ingrese la fecha"))
var aux3 = parseInt(fecha%10000);
var aux2 = parseInt((fecha/10000)%100);
var aux1 = parseInt(fecha/1000000);
console.log(`${aux1}/${aux2}/${aux3}`); 
alert(`${aux1}/${aux2}/${aux3}`); 
```
![I11](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio11.png)

## Ejercicio #12
Escribir un programa.....

```javascript
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

```
![I12](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio12.png)

## Ejercicio #13
Escribir un programa.....

```javascript
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
```
![I3](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio13.png)

## Ejercicio #14
Escribir un programa.....

```javascript
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
```
![I14](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio14.png)

## Ejercicio #15
Escribir un programa.....

```javascript
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

```
![I15](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio15.png)

## Ejercicio #16
Escribir un programa.....

```javascript
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

```
![I16](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio16.png)

## Ejercicio #17
Escribir un programa.....

```javascript
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

```
![I17](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio17.png)

## Ejercicio #18
Escribir un programa.....

```javascript
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

```
![I18](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio18.png)

## Ejercicio #19
Escribir un programa.....

```javascript
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

```
![I19](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio19.png)

## Ejercicio #20
Escribir un programa.....

```javascript
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

```
![I20](https://github.com/jcserna/Tarea6JavaScript/blob/main/images/ejercicio20.png)
