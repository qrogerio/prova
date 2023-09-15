function MediaDosNumeros(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var numero3 = parseInt(document.getElementById("numero3").value);
    var media = (numero1 + numero2 + numero3)/3 
    document.getElementById("resultado").innerHTML = "A média desses três valores são: " + media  + ".";


}
