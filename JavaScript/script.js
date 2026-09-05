//Vaiáveis
let numero1, numero2, resultado1;

//Processamnto
function somar() {
    //Entrada
    numero1 = parseInt(document.getElementById("numero1").value);
    numero2 = parseInt(document.getElementById("numero2").value);

    //Processamnto
    resultado1 = numero1 + numero2;

    //Saída
    document.getElementById("resultado1").innerHTML ="Resultado " + resultado1;

}

//Vaiáveis

let Celsius, F;

function converter() {
    //Entrada
    Celsius= parseFloat(document.getElementById("celsius").value);


    //Processamnto
    F = (Celsius * 9 / 5 ) + 32;

    //Saída
    document.getElementById("resultado2").innerHTML ="F = "  + F;



}

//Vaiáveis

let , Volume, Raio, Altura;

function calcular() {
    //Entrada
    Volume= parseFloat(document.getElementById("altura").value);


    //Processamnto
    Volume = Atura * Raio * 3.14;

    //Saída
    document.getElementById("resultado3").innerHTML = 



}