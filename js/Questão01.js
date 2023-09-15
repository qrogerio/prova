function mostrarIdade(){
    var idade = parseInt (document.getElementById("idade").value)
    var AnoDeNascimento = 2023 - idade
    document.getElementById("resultado").innerHTML = "Você nasceu no ano de " + AnoDeNascimento + ".";


}
