var altura = document.querySelector("#altura")
var peso = document.querySelector("#peso")
var button = document.querySelector("#submite")
var h3 = document.querySelector("h3")
var tr = document.querySelector("tr")

var magreza = document.querySelector("#magreza")
var normal = document.querySelector("#normal")
var sobrepeso = document.querySelector("#sobrepeso")
var obesidade = document.querySelector("#obesidade")
var obesidadeGrave = document.querySelector("#obesidadeGrave")

button.addEventListener("click", function(){
    imc = (parseFloat(peso.value) / (parseFloat(altura.value) * parseFloat(altura.value)));
    h3.innerHTML = ("SEU IMC: " + imc.toFixed(2))


    magreza.style.backgroundColor = "white"
    normal.style.backgroundColor = "white"
    sobrepeso.style.backgroundColor = "white"
    obesidade.style.backgroundColor = "white"
    obesidadeGrave.style.backgroundColor = "white"

        if(altura.value == ""){
            altura.style.borderColor = "rgb(238, 52, 52)"
            h3.innerHTML = ("Preencha a ALTURA")
        }
        if(peso.value == ""){
            peso.style.borderColor = "rgb(238, 52, 52)"
            h3.innerHTML = ("Preencha o PESO")
        }


        if(imc < 18.5){
            magreza.style.backgroundColor = "aquamarine"
        }
        if(imc >= 18.5 && imc <= 24.9){
            normal.style.backgroundColor = "aquamarine"
        }
        if(imc >= 25 && imc <= 29.9){
            sobrepeso.style.backgroundColor = "aquamarine"
        }
         if(imc >= 30 && imc <= 39.9){
            obesidade.style.backgroundColor = "aquamarine"
        }
        if(imc >= 40){
            obesidadeGrave.style.backgroundColor = "aquamarine"
        }
})