   
let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");
let num3 = prompt("Ingrese el tercer número:");

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

function buscar(){
    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    console.log("Tus números de menor a mayor son: " + numeros.join(", "));
    numeros.reverse();
    console.log("Tus números de mayor a menor son: " + numeros.join(", "));

    if (num1 === num2 || num1 === num3) {
        console.log("Tienes dos números iguales");
    }else if (num2 === num3 || num3 === num1) {
        console.log("Tienes dos números iguales");
    }
}
buscar();



