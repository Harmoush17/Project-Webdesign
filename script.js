// to make the navigation appear
const mobileMenu = document.querySelector('#mobile-menu')
const navUl = document.querySelector('.nav-items')
mobileMenu.addEventListener("click", function(){
    navUl.classList.toggle("appear")
})

// document.addEventListener('mouseenter', function())