(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    // const mobileMenuRef = document.querySelector("data-menu");
    // console.log(1);
    menuBtnRef.addEventListener("click", () => {
        console.log(menuBtnRef.getAttribute("aria-expanded"));
        const expanded = 
            menuBtnRef.getAttribute("aria-expanded") === "true"  || false;


    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

        // mobileMenuRef.classList.toggle("is-open");
    });
})();




