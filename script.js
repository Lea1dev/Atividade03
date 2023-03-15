const imagens = ["img/robotron-azul.png", "img/robotron-amarelo.png", "img/robotron-branco.png", "img/robotron-preto.png", "img/robotron-rosa.png", "img/robotron-vermelho.png"];
function proximaCor(){
    var imagemAtual = document.getElementById('roboDefault');
    switch(imagemAtual.getAttribute("src")){
        case "img/robotron-azul.png":
        case "img/robotron.png":
            contador = 1;
            imagemAtual.src = imagens[1];
            break;
        case "img/robotron-amarelo.png":
            contador += 1;
            imagemAtual.src = imagens[2];
            break;
        case "img/robotron-branco.png":
            contador += 1;
            imagemAtual.src = imagens[3];
            break;
        case "img/robotron-preto.png":
            contador += 1;
            imagemAtual.src = imagens[4];
            break;
        case "img/robotron-rosa.png":
            contador += 1;
            imagemAtual.src = imagens[5];
            break;
    }
}

function voltarCor(){
    var imagemAtual = document.getElementById('roboDefault');
    switch(imagemAtual.getAttribute("src")){
        case "img/robotron-amarelo.png":
            contador -= 1;
            imagemAtual.src = imagens[0];
            break;
        case "img/robotron-branco.png":
            contador -= 1;
            imagemAtual.src = imagens[1];
            break;
        case "img/robotron-preto.png":
            contador -= 1;
            imagemAtual.src = imagens[2];
            break;
        case "img/robotron-rosa.png":
            contador -= 1;
            imagemAtual.src = imagens[3];
            break;
        case "img/robotron-vermelho.png":
            contador -= 1;
            imagemAtual.src = imagens[4];
            break;
    }
}
