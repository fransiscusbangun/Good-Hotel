// navbar start
// const menuToggle = document.querySelector('.menu-toggle input');
// const nav = document.querySelector('nav ul');

// menuToggle.addEventListener('click', function() {
// nav.classList.toggle('slide');
// });

const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
    
        hamburger.addEventListener("click", mobliemmenu);
    
        function mobliemmenu() {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
        }
    
        window.addEventListener("scroll", function() {
          var header = document.querySelector("header");
          header.classList.toggle("sticky", window.scrollY > 0)
        })
// navbvar end

// darkmode start
let body = document.body;

function darkMode() {
    console.log('darkmmode di klik');
    body.classList.toggle("dark");
}
// darkmode end

// button to top start
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// button to top end

// datepicker start
$( function() {
    $( "#datepicker" ).datepicker();
  } );
// datepicker end

// resto start
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionIHeading');

for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
  var itemClass = this.parentNode.className;
  for (var i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordionItem close';
    
  }
  if (itemClass == 'accordionItem close') {
    this.parentNode.className = 'accordionItem open';
  }
}
// resto end

// testimonial start
var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

let x = 0;

upArrow.onclick = function(){
    if(x > "-2300") {
        x = x - 300;
        slide.style.top = x + "px";
    }
}
downArrow.onclick = function(){
    if(x < 0) {
        x = x + 300;
        slide.style.top = x + "px";
    }
}