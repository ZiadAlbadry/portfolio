/*======================= navbar =====================*/ 

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

/*====================== Scroll Reveal =======================*/

ScrollReveal ({
    distance:'80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img , .services-container , .portfolio-box , .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-content h1, .abou-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*============================ typed ====================================*/

const typed = new Typed('.multiple-text',{
    strings: ['Web Developer','Web Design','Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
})

function more(){
    var dots = document.getElementById('dots');
    var more = document.getElementById('more');
    var button = document.getElementById('btn');

    if(dots.style.display == "inline"){
        dots.style.display="none";
        button.innerHTML='Read Less';
        more.style.display="inline";
    }
    else{
        button.innerHTML='Read More';
        more.style.display="none";
        dots.style.display="inline";
    }
    
    
}

