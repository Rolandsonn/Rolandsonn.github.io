const modalBtn = document.querySelector('#button_main')      // Вызываем классы 
const backDrop = document.querySelector('#backDrop')
const modalClose = document.querySelector('[data-modal-close]')



function modalToggler (element) {           //Создаем функцию тоглер, 
    element.classList.toggle("hidden")
}
console.log(modalBtn);
modalBtn.addEventListener("click", () =>{modalToggler(backDrop)} )  

backDrop.addEventListener("click", (e) =>{
    if(e.target.classList.contains('overlay')){
        modalToggler(backDrop)
    }
    // else{
    //     alert('В этом элементе нет такого класса')
    // }
} )

modalClose.addEventListener("click", () =>{modalToggler(backDrop)} )








