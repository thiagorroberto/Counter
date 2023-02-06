function diminui() {
    let numero = document.querySelector("h3")
    let n = numero.innerText
    numero.innerHTML = n-1
}

function aumenta() {
    let numero = document.querySelector("h3")
    let n = parseInt(numero.innerText)
    numero.innerHTML = n + 1
    
}

function reseta() {
    let numero = document.querySelector("h3")
    numero.innerHTML = 0
}

function positivo(numero) {
    let num = document.querySelector("h3")
    if(numero > 0) {
        num.style.color = green;
    }
}

function negativo(numero) {
    let num = document.querySelector("h3")
    if(numero < 0) {
        num.style.color = red;
    }
}



