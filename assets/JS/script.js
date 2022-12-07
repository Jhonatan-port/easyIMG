var img = document.getElementById("img__procurada");
const btnProcura = document.getElementById("botao__procura");
const btnLimpa = document.getElementById("botao__limpar");
var divImg = document.getElementById("img__solicitada");
var checkBlur = document.getElementById("check__blur");
var checkGray = document.getElementById("check__grayscale")




btnProcura.addEventListener("click", function () {

    if (document.getElementById("largura").value == '') {
        console.log(document.getElementById("largura").value);
        document.getElementById("largura").value = '500'
        var largura = document.getElementById("largura");
    } else {
        var largura = document.getElementById("largura");
    }

    if (document.getElementById("altura").value == '') {
        document.getElementById("altura").value = '500'
        var altura = document.getElementById("largura");
    } else {
        var altura = document.getElementById("altura");
    }

    if (!checkBlur.checked && !checkGray.checked) {
        buscaImagem(largura.value, altura.value)
    } else if (checkBlur.checked && !checkGray.checked) {
        buscaImagemBlur(largura.value, altura.value)
    } else if (!checkBlur.checked && checkGray.checked) {
        buscaImagemPretoEBranco(largura.value, altura.value)
    } else {
        buscaImagemPretoEBrancoBlur(largura.value, altura.value)
    }
})

btnLimpa.addEventListener("click", function (evento) {
    img.src = "./assets/IMAGENS/img_placeholder.jpg"

})

//Funções
function buscaImagem(largura, altura) {
    urlImg = "https://picsum.photos/" + largura + "/" + altura
    img.src = urlImg
}
function buscaImagemBlur(largura, altura) {
    urlImg = "https://picsum.photos/" + largura + "/" + altura + "?blur=5"
    img.src = urlImg
}
function buscaImagemPretoEBranco(largura, altura) {
    urlImg = "https://picsum.photos/" + largura + "/" + altura + "?grayscale"
    img.src = urlImg
}
function buscaImagemPretoEBrancoBlur(largura, altura) {
    urlImg = "https://picsum.photos/" + largura + "/" + altura + "?grayscale&blur=5"
    img.src = urlImg
}