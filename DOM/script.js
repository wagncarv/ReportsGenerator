//
// let titulo = document.getElementById("titulo")
// console.log(titulo)

// let title = document.querySelector("#titulo")
// console.log(title)

// let elements = document.querySelectorAll("meta")
// elements.forEach(el => console.log(el.name))
// console.log(elements)

//innerText
// const el = document.getElementById("titulo")
// el.innerText = "Olá devs"

//MANIPULAR CAMPOS HTML
// const el = document.querySelector("input")
// el.value = "Valor qualquer"

//MANIPULAR ATRIBUTOS
// const header = document.querySelector("header")
// header.setAttribute("id", "header")

// const headerid = document.querySelector("#header")
// console.log(headerid)
// console.log(headerid.getAttribute("id"))

//
// console.log(headerid.getAttribute("class"))

// header.removeAttribute("id")
// headerid.removeAttribute("class")

// header.setAttribute("class", "bg header")


//ALTERANDO ESTILOS classList e style
// const el = document.querySelector("body")
// el.style.backgroundColor = "#00ff00"
// console.log(el.style.backgroundColor)

//CLASSlist
const el = document.querySelector("body")
el.classList.add("active", "green")
console.log(el.classList)

// el.classList.remove("active")
//toggle = se classe existir, tira, se não, põe
el.classList.toggle("active")