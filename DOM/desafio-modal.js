const btnOpenModal = document.querySelector("#openModal")
const modalWrapper = document.querySelector(".modal-wrapper")

btnOpenModal.addEventListener("click", openModal)
document.addEventListener("keydown", closeModal)

function openModal(){
    modalWrapper.classList.remove("invisible")
}

function closeModal(event){
    if(event.key === "Escape"){
        modalWrapper.classList.add("invisible")
    }
}
