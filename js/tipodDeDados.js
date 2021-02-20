////////////////////////////////////////////////////////////////
function exec(value){
    const exec = document.querySelector("#exec")
    if(typeof value == "object" || typeof value == "function"){
        exec.innerHTML = JSON.stringify(value)
    }else{
        exec.innerHTML = value
    }

}

////////////////////////////////////////////////////////////////
// String
// exec("olá")
// exec(`soma ${1+1}`)

//Number
// exec(33)
// exec(12.5/4.7)

//Boolean
// true
// false

//null && undefined
// null
// undefined

//object
const pessoa = {nome: "wagner carvalho", idade: 30, andar: function(){console.log("andar")}}
// exec(pessoa)

//Array
const lista = ["pão", 10, "água", "arroz"]
exec(lista)

