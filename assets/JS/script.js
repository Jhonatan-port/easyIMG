var img = document.getElementById("img__procurada");
const btnProcura = document.getElementById("botao__procura");
const btnLimpa = document.getElementById("botao__limpar");
var divImg = document.getElementById("img__solicitada");
var checkBlur = document.getElementById("check__blur");
var checkGray = document.getElementById("check__grayscale")




btnProcura.addEventListener("click", function (evento) {
    var largura = document.getElementById("largura");
    var altura = document.getElementById("altura");

    if (!checkBlur.checked && !checkGray.checked) {
        buscaimagem(largura.value, altura.value)
    } else if (checkBlur.checked && !checkGray.checked) {
        buscaImagemBlur(largura.value, altura.value)
    } else if (!checkBlur.checked && checkGray.checked) {
        buscaimagemPretoEBranco(largura.value, altura.value)
    } else {
        buscaimagemPretoEBrancoBlur(largura.value, altura.value)
    }
})

btnLimpa.addEventListener("click", function (evento) {
    img.src = "./assets/IMAGENS/img_placeholder.jpg"

})

//Funções
function buscaimagem(largura, altura) {
    urlImg = "https://picsum.photos/" + largura + "/" + altura
    img.src = urlImg
}
function buscaImagemBlur(largura, altura) {
    urlImg = "https://picsum.photos/" + largura + "/" + altura + "?blur=5"
    img.src = urlImg
}
function buscaimagemPretoEBranco(largura, altura) {
    urlImg = "https://picsum.photos/" + largura + "/" + altura + "?grayscale"
    img.src = urlImg
}
function buscaimagemPretoEBrancoBlur(largura, altura) {
    urlImg = "https://picsum.photos/" + largura + "/" + altura + "?grayscale&blur=5"
    img.src = urlImg
}