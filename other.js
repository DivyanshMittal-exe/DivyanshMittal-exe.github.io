const hamburger = document.getElementById("collapsedButton");

const navbar = document.querySelector(".mainnavbar");
window.onscroll = () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrollingActive");
    hamburger.style.color = "black";
  } else {
    navbar.classList.remove("scrollingActive");
    hamburger.style.color = "white";
  }
};




// let nvbr = document.querySelector(".NavList");
// let nvbrnames = document.getElementsByClassName("navname");
// nvbr.addEventListener("mouseover", MouseOn);
// nvbr.addEventListener("mouseout", MouseOff);


function MouseOn() {
  for (let i = 0; i < nvbrnames.length; i++) {
    nvbrnames[i].style.display = 'block';

  }
  for (let i = 0; i < nvbrnames.length; i++) {
    nvbrnames[i].classList.remove('animate__animated', 'animate__fadeOutRight');
  }
  for (let i = 0; i < nvbrnames.length; i++) {
    nvbrnames[i].classList.add('animate__animated', 'animate__fadeInRight');
  }


  // nvbrnames.sty
  // nvbr.classList.add("scrollingActive");
}


function MouseOff() {
  for (let i = 0; i < nvbrnames.length; i++) {
    nvbrnames[i].classList.remove('animate__animated', 'animate__fadeInRight');
  }
  for (let i = 0; i < nvbrnames.length; i++) {
    nvbrnames[i].classList.add('animate__animated', 'animate__fadeOutRight');
  }
}


function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  //print(rect)
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)

  );
}


const abtmeheading = document.querySelector('#abtmehead');

document.addEventListener('scroll', function () {
  if (isInViewport(abtmeheading)) {
    abtmeheading.style.display = 'block';
    abtmeheading.classList.add('animate__animated', 'animate__fadeInUp');

  }


});






const NavLinks = document.getElementById("NavBarLinks");

hamburger.addEventListener('click', () => {
  console.log("clickes");
  NavLinks.classList.toggle("showNav");
  navbar.classList.toggle("scrollingActive2");

  // if (NavLinks.style.display != "none") {
  //     console.log("Hi");
  //     navbar.classList.add("scrollingActive");
  //   }else{
  //     navbar.classList.remove("scrollingActive");
  //   }

});

// data-bs-toggle="collapse"
//             data-bs-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"

let day = ''

let curs = "|";

switch (new Date().getDay()) {
  case 0:
    day = "sunday";
    break;
  case 1:
    day = "monday";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "thursday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "saturday";
}

txts = ["ace", "amazing", "astonishing", "astounding", "awe-inspiring", "awesome", "badass", "beautiful", "bedazzling", "bee's knees", "best", "breathtaking", "brilliant", "cat's meow", "cat's pajamas", "classy", "cool", "dandy", "dazzling", "delightful", "divine", "doozie", "epic", "excellent", "exceptional", "exquisite", "extraordinary", "fabulous", "fantastic", "fantabulous", "fine", "finest", "first-class", "first-rate", "flawless", "funkadelic", "geometric", "glorious", "gnarly", "good", "grand", "great", "groovy", "groundbreaking", "hunky-dory", "impeccable", "impressive", "incredible", "kickass", "kryptonian", "laudable", "legendary", "lovely", "luminous", "magnificent", "majestic", "marvelous", "mathematical", "mind-blowing", "neat", "outstanding", "peachy", "perfect", "phenomenal", "pioneering", "polished", "posh", "praiseworthy", "premium", "priceless", "prime", "primo", "rad", "remarkable", "riveting", "sensational", "shining", "slick", "smashing", "solid", "spectacular", "splendid", "stellar", "striking", "stunning", "stupendous", "stylish", "sublime", "super", "super-duper", "super-excellent", "superb", "superior", "supreme", "sweet", "swell", "terrific", "tiptop", "top-notch", "transcendent", "tremendous", "ultimate", "unreal", "well-made", "wicked", "wonderful", "wondrous", "world-class"]

let count = Math.floor(Math.random() * txts.length);
let index = 0;
let currentText = '';
let letter = '';
let art = ''
let typing = document.querySelector('#typing');
let removing = false;

(function type() {
  currentText = txts[count];
  // console.log(index,count,removing)
  // typing.textContent = "Stay bold & have "+ art + " " +letter ;
  if (letter.length == currentText.length && removing == false) {
    // count = (count + 1 + Math.floor(Math.random() * (txts.length - 1))) % txts.length;
    // index = 0;
    removing = true;
    setTimeout(type, 2000)
  } else {

    if (removing == false) {

      if (letter[0] == 'a' || letter[0] == 'e' || letter[0] == 'i' || letter[0] == 'o' || letter[0] == 'u') {
        art = "an";
      } else {
        art = "a";
      }
      
      letter = currentText.slice(0, ++index);

      let c = letter.length / currentText.length;
      let timeint = Math.floor((1.4 - Math.sin(Math.PI * c)) * 100);
      setTimeout(type, timeint)
    } else {
      if (index == 0) {
        removing = false;
        count = (count + 1 + Math.floor(Math.random() * (txts.length - 1))) % txts.length;
      } else {
        // currentText = txts[count]
        letter = letter.slice(0,--index);
        // index = 0
      }
      setTimeout(type, 10)
    }
  }

}());

(function typeCursor() {
  if (curs == "|") {
    curs = " ";
  } else {
    curs = "|";
  }
  setTimeout(typeCursor, 300)

}());

(function dispText() {
  typing.textContent = "Stay bold & have " + art + " " + letter + curs + day;
  setTimeout(dispText, 10);
}());

// let fancyend = document.querySelector('#endfancys');
// if(window.innerWidth < ){
//   fancyend
// }






// let daytoday = document.querySelector('#dayto');
// daytoday.textContent = day;


// document.body.addEventListener("mousemove",event =>{
//   const mouseX = event.clientX
//   const mouseY = event.clientY

//   gsap.to(".circle",{
//     x:mouseX,
//     y:mouseY,
//     stagger:-0.1
//   });
// });

// ScrollReveal().reveal('.card');

// let cards = document.querySelectorAll('.card');

// const appearOptions = {
//   threshold: 0.2,

// };

// const appearOnScroll = new IntersectionObserver(
//   function (
//     entries, appearOnScroll
//   ) {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting) {
//         return;
//       } else {
//         entry.target.classList.add('appear');
//         appearOnScroll.unobserve(entry.target);
//       }
//     })
//   }, appearOptions
// );

// cards.forEach(card => {
//   appearOnScroll.observe(card)
// })

// window.addEventListener('load', () => {
//   const prldr = document.querySelector('.prloader')
//   prldr.classList.add('finished')
// })

gsap.registerPlugin(ScrollTrigger);

gsap.to(".perlinAni",{
    scrollTrigger:{
        trigger:"#AboutMe",
        
        start: "10% 60%",
        end: "10% 30%",
        // toggleActions:"restart none none none",
        scrub: 1,
        // markers: true
    },
    y: "0"
    
});

gsap.to(".card",{
  scrollTrigger:{
      trigger:"#Projects",
      
      start: "top 70%",
      end: "5% 37%",
      // toggleActions:"restart none none none",
      scrub: 1,
      // markers: true
  },
  y: "0",
  // opacity:1,
  // duration: 0.25,
  stagger: { 
    each: 0.1,
    from: "center",
    // grid: "auto",
    // ease: "power2.inOut",
    // repeat: -1 
  }
  
});