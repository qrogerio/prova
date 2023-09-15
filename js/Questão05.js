function diaDaSemana(){

    var dia = parseInt(document.getElementById("dia").value);
    var resultado = document.getElementById("resultado");
        var diasdaSemana = ['Domingo', 'Segunda-feira', 'Terça-feria', 'Quarta-feira', 'Quinta-feira', 'Sexta-feita', 'Sábado'];

    if(dia >=1 && dia <=7) {
        resultado.innerHTML = "O dia é: " + diasdaSemana[dia - 1];}
        else {resultado.innerHTML = "Digite um número de 1 a 7.";



        }

}