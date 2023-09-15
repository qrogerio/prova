function MostrarImc(){
    var peso = parseInt (document.getElementById("peso").value)
    var altura = parseInt (document.getElementById("altura").value)
    var calcularImc = peso / (altura * altura);
    document.getElementById("resultado").innerHTML = "Seu Imc é: " + calcularImc + calcularImc.toFixed(2);


}