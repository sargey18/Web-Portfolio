//constants 
const menuBars =document.getElementById('menu-bars');
const overlay =document.getElementById('overlay');
const nav1 =document.getElementById('nav-1');
const nav2 =document.getElementById('nav-2');
const nav3 =document.getElementById('nav-3');
const nav4 =document.getElementById('nav-4');
const nav5 =document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];
//future and supporting skills  







//transparent header end 




//slected header leement start 

$(document).on('click', '.item-selection', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

// seclected header element end 



//type writer start----------------------------

const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//type method 

TypeWriter.prototype.type = function() {
    //current index of word 
    const current = this.wordIndex % this.words.length;
    //get full text of current word
    const fullTxt = this.words[current];

    //check if deleting 
    if(this.isDeleting) {
        //remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);

    } else {
        //add char 
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //insert txt into element 
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //initial type speed 
    let typeSpeed = 300;

    if(this.isDeleting) {
        typeSpeed /= 2;
    }

    // if word is complete 
    if(!this.isDeleting && this.txt === fullTxt) {
        //make pause at the end
        typeSpeed = this.wait; 
        //set delete to true 
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        //move to next word
        this.wordIndex++;
        //pause before start typing 
        typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed)

}




// init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //init typewriter 
    new TypeWriter(txtElement, words, wait);
}


//header menu bar start-------------------

//control navigation animation 
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) =>{
        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
    });
}

function toggleNav() {
    //toggle: menu bars open/closed
    menuBars.classList.toggle('change');
    //toggle:menu active 
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        //Animate in overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        //animate in - nave items 
        navAnimation('out', 'in');
    } else {
        //animate out - overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        //anime out - nav items 
        navAnimation('in', 'out');
    }
}


//header menu bar end -------------------





//owl carousel start-----------------------------------



$('.owl-carousel').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav:false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav:false
        }
    }
});

//owl carousel end ---------------------------------------------

//future and supporting skills start ---------------------


const futureButton = document.querySelector('.future-btn');
futureButton.addEventListener('click', onFutureClick);

function onFutureClick() {
    console.log('clicked!')

    // jQuery: const container = $('.future-skills-cards-container');
    const container = document.querySelector('.future-skills-cards-container');
    const activeElements = container.querySelectorAll('.outerEl:not(.hidden)');
    const hiddenElements = container.querySelectorAll('.outerEl.hidden');

    // Hide all active elements
    activeElements.forEach(element => element.classList.add('hidden'));

    // Hide all active elements
    hiddenElements.forEach(element => element.classList.remove('hidden'));
}


//future and supporting skills end ---------------------


//header menu bar event listner ----------------
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav );
})


function a (someParam) {
    return someParam;
}
a(10); // 10









//init on dom load 

document.addEventListener('DOMContentLoaded', init);

//supporting skills and projects button event listener 

//transparent header start----------------
window.addEventListener("scroll", function(){
    var nav = document.querySelector(".navbar");
    nav.classList.toggle("sticky", window.scrollY > 0);

})


/*
    Functions and variables
    DOM manipulation (getting elements and changing them)
    Different type of variables (arrays, plain objects)
    Strings and numbers methods
    Array methods (.forEach, .map, .find, .filter)
    Making AJAX requests (fetch, axios, ...)
*/ 