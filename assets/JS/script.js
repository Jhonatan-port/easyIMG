var img = document.getElementById("img__procurada");
const btnProcura = document.getElementById("botao__procura");
const btnLimpa = document.getElementById("botao__limpar");
var divImg = document.getElementById("img__solicitada")


btnProcura.addEventListener("click", function(evento){
    var largura = document.getElementById("largura");
    var altura = document.getElementById("altura");
    urlImg = "https://picsum.photos/"+ largura.value +"/"+ altura.value
    img.src = urlImg
})

btnLimpa.addEventListener("click", function(evento){
    img.src=""
    
})