function valorPorHora(){

    var horas = parseInt(document.getElementById("horas").value);
    var valorHora = parseInt(document.getElementById("valorHora").value);
    var resultado = horas * valorHora
    document.getElementById("resultado").innerHTML = "Você recebe: " + resultado  + " R$ por mes.";


}