//createElement
const div = document.createElement("div")
div.innerHTML = "Olá dev"

//append prepend
// const body = document.querySelector("body")
// body.append(div)
// body.prepend(div)

//INSERT BEFORE insertBefore
const body = document.querySelector("body")
body.insertBefore(div, body.querySelector("script"))

//SIMULAR insertAfter
const header = document.querySelector("header")
body.insertBefore(div, header.nextElementSibling)
