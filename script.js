//const toggleButton = document.getElementsByClassName('toggle-button')[0]
//const navbarLinks = document.getElementsByClassName('navbar-links')[0]

//toggleButton.addEventListener('click', () =>{
   // navbarLinks.classList.toggle('active');  
//})


/*function myFunction() {
    var x = document.getElementsByClassName("nav-links");
    if (x.style.display === "block"){
        x.style.display = "none";
    }else {
        x.style.display = "block";
    }
}*/ 

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function(){
     menu_btn.classList.toggle('is-active');
     mobile_menu.classList.toggle('is-active');
})