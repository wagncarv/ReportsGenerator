const btnOpenModal = document.querySelector("#openModal")
const modalWrapper = document.querySelector(".modal-wrapper")

btnOpenModal.addEventListener("click", openModal)
document.addEventListener("keydown", closeModal)

function openModal(){
    modalWrapper.classList.remove("invisible")
}

function closeModal(event){
    const isEscKey = event.key === "Escape"
    console.log(event)
    if(isEscKey){
        modalWrapper.classList.add("invisible")
    }
}

// document.addEventListener("keydown", function(event){
//     const isEscKey = event.key === "Escape"
//     console.log(event)
//     if(isEscKey){
//         modalWrapper.classList.add("invisible")
//     }
// })