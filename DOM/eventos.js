//events
function print(){
    console.log('function print()')
    const el = document.createElement("div")
    const text = document.createTextNode("function print()")
    el.append(text)
    document.body.appendChild(el)
}

//eventos de teclado
// const input = document.querySelector("input")

// input.onkeypress = function(){
//     console.log("Rodou")
// }

//diversos eventos
const h1 = document.querySelector("h1")

// h1.addEventListener('click',print)

//OUTRA FORMA DE ACIONAR FUNÇÃO
// h1.onclick = print

//ARGUMENTO event
//ARGUMENTO EVENT
const input = document.querySelector("input")
input.onkeypress = function(event){
    console.log(event.key)
    console.log(event.currentTarget)
    console.log(event.currentTarget.value)
}
