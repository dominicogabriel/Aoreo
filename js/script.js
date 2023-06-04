// Toggle class active

const navbarNav = document.querySelector ('.navbar-nav');

// Hamburger clicked

document.querySelector ('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};


// Random click for nav disappearing

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});