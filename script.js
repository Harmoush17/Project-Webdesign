// to make the navigation appear
const mobileMenu = document.querySelector('#mobile-menu')
const navUl = document.querySelector('.nav-items')
const navLinks = document.querySelectorAll('.nav-links');

mobileMenu.addEventListener("click", function(){
    navUl.classList.toggle("appear")
})

navLinks.forEach((navLink) =>{
    navLink.addEventListener('click', () => {
        navUl.classList.toggle("appear")
    })
})


// document.addEventListener('mouseenter', function())