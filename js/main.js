
//Toggle navaigation menu//
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');

const toggleMenu = () =>{
    menuElement.classList.toggle('active');
    menuToggleButton.classList.toggle('active');
};

menuToggleButton.addEventListener('click', toggleMenu);

//Remove Active class from and icon on link click//
const removeActiveLinkClass = e => {
    if(e.target.classList.contains('list-link')){
    menuElement.classList.remove('active');
    menuToggleButton.classList.remove('active');
    }
}


document.addEventListener('click', removeActiveLinkClass);

//Toggle theme and store selection within local storage
const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('darkTheme');

if(currentTheme){
    bodyElement.classList.add('dark-theme');
};

const toggleTheme = () => {
    bodyElement.classList.toggle('dark-theme');

    if(bodyElement.classList.contains('dark-theme')){
        localStorage.setItem('darkTheme', 'active');
    }else{
        localStorage.removeItem('darkTheme');
    }

};

themeToggleButton.addEventListener('click', toggleTheme);



//header background//

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});


//scroll top//

let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY > 0);
});

//scroll reveal//

const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});

sr.reveal('.home-title, .section-title-01', {origin: 'top'});
sr.reveal('.scroll-reveal-left, .copyright, .btn.btn', {origin: 'left'});
sr.reveal('.scroll-reveal-right, .section-title-02', {origin: 'right'});
sr.reveal('.tech-stack-item, .right, .portfolio-heading', {interval: 250});
sr.reveal('.left', {origin: 'top', interval: 250});
sr.reveal('.form-container, footer', {origin: 'top'});
sr.reveal('.footer-box', {origin: 'top', interval: 500});