function estilizarPeloHorario(){
    var hora = new Date().getHours()
    var minutos = new Date().getMinutes()
    var txthora = pegarComponente("h2#txt-horario")

    txthora.innerText = `Agora são ${hora}:${minutos}`
                
    var corFundoAtual

    if (hora > 5 && hora < 12){
        corFundoAtual = pegarVariavelCSS("--cor-dia")
        definirSombra(8, 8, 16)
        mudarFoto("dia")
    }

    else if (hora > 18){
        corFundoAtual = pegarVariavelCSS("--cor-noite")
        definirSombra(2, 2, 4)
        mudarFoto("noite")
    }

    else {
        corFundoAtual = pegarVariavelCSS("--cor-tarde")
        definirSombra(4, 4, 8)
        mudarFoto("tarde")
    }

    mudarFundo(corFundoAtual)
}

function pegarComponente(componente){
    return document.querySelector(componente)
}

function mudarFundo(cor){
document.body.style.backgroundColor = cor
}

function pegarVariavelCSS(variavel){
    return getComputedStyle(document.documentElement).getPropertyValue(variavel)
}

function definirSombra(horizontal, vertical, blur){
    var main = pegarComponente("main")
    main.style.boxShadow = `${horizontal}px ${vertical}px ${blur}px rgba(0, 0, 0, 0.25)`
}

function mudarFoto(foto){
    pegarComponente("img.imagem").src = `imagens/${foto}.png`
    pegarComponente("source.imagem").src = `imagens/${foto}-small.png`
    
}