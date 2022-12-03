var img = document.getElementById("img__procurada");
const btnProcura = document.getElementById("botao__procura");
const btnLimpa = document.getElementById("botao__limpar");
var divImg = document.getElementById("img__solicitada");
var checkBlur = document.getElementById("check__blur");
var checkGray = document.getElementById("check__grayscale")




btnProcura.addEventListener("click", function(evento){
    var largura = document.getElementById("largura");
    var altura = document.getElementById("altura");
    if(!checkBlur.checked && !checkGray.checked){
    urlImg = "https://picsum.photos/"+ largura.value +"/"+ altura.value
    console.log(urlImg);
    img.src = urlImg
    }else if (checkBlur.checked && !checkGray.checked){
        urlImg = "https://picsum.photos/"+ largura.value +"/"+ altura.value + "?blur=5"
        console.log(urlImg);
        img.src = urlImg
    }else if (!checkBlur.checked && checkGray.checked){
        urlImg = "https://picsum.photos/"+ largura.value +"/"+ altura.value + "?grayscale"
        console.log(urlImg);
        img.src = urlImg
    }else {
        urlImg = "https://picsum.photos/"+ largura.value +"/"+ altura.value + "?grayscale&blur=5"
        console.log(urlImg);
        img.src = urlImg
    }
})

btnLimpa.addEventListener("click", function(evento){
    img.src="./assets/IMAGENS/img_placeholder.jpg"
    
})