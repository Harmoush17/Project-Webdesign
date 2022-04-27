// let welKom = document.getElementById('welkom');
// window.onload = function(){
//     let value = onload;
//     welKom.style.display = 'block';
//     welKom.style.transformDelay = '1s';
// }


// to make the navigation appear
const mobileMenu = document.querySelector('#mobile-menu')
const navUl = document.querySelector('.nav-items')
mobileMenu.addEventListener("click", function(){
    navUl.classList.toggle("appear")
})