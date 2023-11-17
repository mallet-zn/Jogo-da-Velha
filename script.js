var jogador, vencedor = null

var jogadorSelecionado = document.getElementById('jogador-selecionado')
var vencedorSelecionado = document.getElementById('vencedor-selecionado')
var quadrados = document.getElementById('quadrado')

changePlayer('X')

function select(id) {

    if (vencedor !== null) {
        return
    }

    var quadrado = document.getElementById(id)
    if (quadrado.innerHTML !== '-') {
        return
    }

    quadrado.innerHTML = jogador
    quadrado.style.color = '#000'

    if (jogador === 'X') {
        jogador = 'O'
    } else {
        jogador = 'X'
    }

    changePlayer(jogador)
    checkWinner()
}

function changePlayer(valor) {
    jogador = valor
    jogadorSelecionado.innerHTML = jogador
}

function checkWinner() {
    var quadrado1 = document.getElementById(1)
    var quadrado2 = document.getElementById(2)
    var quadrado3 = document.getElementById(3)
    var quadrado4 = document.getElementById(4)
    var quadrado5 = document.getElementById(5)
    var quadrado6 = document.getElementById(6)
    var quadrado7 = document.getElementById(7)
    var quadrado8 = document.getElementById(8)
    var quadrado9 = document.getElementById(9)

    if (checkSequence(quadrado1, quadrado2, quadrado3)) {
        changeColor(quadrado1, quadrado2, quadrado3)
        changeWinner(quadrado1)

        return
    }

    if (checkSequence(quadrado4, quadrado5, quadrado6)) {
        changeColor(quadrado4, quadrado5, quadrado6)
        changeWinner(quadrado4)

        return
    }

    if (checkSequence(quadrado7, quadrado8, quadrado9)) {
        changeColor(quadrado7, quadrado8, quadrado9)
        changeWinner(quadrado7)

        return
    }

    if (checkSequence(quadrado1, quadrado4, quadrado7)) {
        changeColor(quadrado1, quadrado4, quadrado7)

        return
    }

    if (checkSequence(quadrado1, quadrado4, quadrado7)) {
        changeColor(quadrado1, quadrado4, quadrado7)
        changeWinner(quadrado1)

        return
    }

    if (checkSequence(quadrado2, quadrado5, quadrado8)) {
        changeColor(quadrado2, quadrado5, quadrado8)
        changeWinner(quadrado2)

        return
    }

    if (checkSequence(quadrado3, quadrado6, quadrado9)) {
        changeColor(quadrado3, quadrado6, quadrado9)
        changeWinner(quadrado3)

        return
    }

    if (checkSequence(quadrado1, quadrado5, quadrado9)) {
        changeColor(quadrado1, quadrado5, quadrado9)
        changeWinner(quadrado1)

        return
    }

    if (checkSequence(quadrado3, quadrado5, quadrado7)) {
        changeColor(quadrado3, quadrado5, quadrado7)
        changeWinner(quadrado3)

    }
}

function changeWinner(quadrado) {
    vencedor = quadrado.innerHTML
    vencedorSelecionado.innerHTML = vencedor
}

function changeColor(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checkSequence(quadrado1, quadrado2, quadrado3) {
    var winner = false

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        winner = true
    }

    return winner
}

function reset() {
    vencedor = null
    vencedorSelecionado.innerHTML = ''

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i)
        quadrado.innerHTML = '-'
        quadrado.style.color = '#eee'
        quadrado.style.background = '#eee'
    }

    changePlayer('X')
}