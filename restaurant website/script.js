const  toggleButton = document.querySelector(".bi-list");
const  navItems = document.querySelector(".nav-items");

toggleButton.addEventListener('click' , ()=>{
    navItems.classList.toggle('active');
})

