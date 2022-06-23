const modalBtn = document.querySelector('#button_main')      // Вызываем классы 
const backDrop = document.querySelector('#backDrop')
const modalClose = document.querySelector('[data-modal-close]')



function modalToggler (el) {           //Создаем функцию тоглер, 
    el.classList.toggle("hidden")
}

modalBtn.addEventListener("click", () => {modalToggler(backDrop)} )  

backDrop.addEventListener("click", (e) =>{
    // if(e.target.classList.contains('overlay'))
    if(e.target === e.currentTarget){
        modalToggler(e.target)
    }
    // else {
    //     alert('В этом элементе нет такого класса')
    // }
} )

modalClose.addEventListener("click", () =>{modalToggler(backDrop)} )







