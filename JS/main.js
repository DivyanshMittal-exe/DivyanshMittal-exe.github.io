
// import sal from 'sal.js'

import {FontAwesomeIcon} from "@fortawesome/fontawesome-free/js/all.js"

import 'bootstrap'
// import 'requirejs'
import TagCloud from 'TagCloud';
// sal({
//     threshold: 0.1,
//     once: false,
//   });


// Bckground Vid

const vid = document.querySelector(".vidbg")

document.addEventListener("mousedown", function(){
    vid.pause()
});
document.addEventListener("mouseup", function(){
    vid.play()
});

console.log(window.matchMedia)

if (window.matchMedia && !window.matchMedia('(prefers-color-scheme: dark)').matches) {
    const favicon = document.querySelector("link[rel~='icon']");
    favicon.href = '/Assets/Images/Logo.png';
    // console.log("Hi")
}



// Skill sphere 

// const TagCloud = require('TagCloud');

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


const container = document.querySelector('.skillsphere');
let w = container.clientWidth;

var h = container.clientHeight;

let r = Math.floor(Math.min(w,h)/2);


const texts = ['C','C++','C#','Java','JavaScript','Python','Haskell','SML','Tensorflow','Keras','SDL','Bootstrap','HTML','CSS','Unity','Photoshop','Illustrator','Blender','ML-Lex','ML-Yacc','Prolog','VHDL','NodeJS', 'Dart','Flutter','Django'];

const options = {
    radius: r,
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 135,
    keep:true
};

let tg = TagCloud('.skillsphere', shuffle(texts), options);


window.addEventListener("resize", function(){
    var container = document.querySelector('.skillsphere');


    var child = document.querySelector(".tagcloud");

    // Delete child
    container.removeChild(child);

    let w = container.clientWidth;

    // container.style.height = w;
    var h = container.clientHeight;

    let r = Math.floor(Math.min(w,h)/2);
    const options = {
        radius: r,
        maxSpeed: 'normal',
        initSpeed: 'fast',
        direction: 135,
        keep:true
    };
    
    tg = TagCloud('.skillsphere', shuffle(texts), options);
    
});




import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";

import ScrollToPlugin from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
// const panels = gsap.utils.toArray("#AboutMe");
// let tween = gsap.to('#AboutMe', {
// 	xPercent: 0,
// 	ease: "none",
// 	scrollTrigger: {
// 		trigger: "#AboutMe",
// 		pin: true,
//         markers:true,
// 		start: "top bottom",
// 		scrub: 1,
// 		snap: {
// 			snapTo: 1 ,
// 			inertia: false,
// 			duration: {min: 0.1, max: 0.1}
// 		},
// 		end: 0
// 	}
// });



/* Panels */
// const panels = gsap.utils.toArray(".gsapclass");

// console.log(panels.length)
// let tween = gsap.to(panels, {
// 	xPercent: -100 * ( panels.length - 1 ),
// 	ease: "none",
// 	scrollTrigger: {
// 		trigger: "#main",
// 		pin: true,
// 		start: "top top",
// 		scrub: 1,
//         markers:true,
// 		snap: {
// 			snapTo: 1 / (panels.length - 1),
// 			inertia: false,
// 			duration: {min: 0.1, max: 0.1}
// 		},
// 		end: "bottom"
// 	}
// });



// const scroller = document.getElementById('AboutMe');


// window.addEventListener("scroll", function(){
    
//     let height = scroller.clientHeight;
//     let scrollHeight = scroller.scrollHeight - height;
//     let scrollTop = scroller.scrollTop;
//     let percent = Math.floor(scrollTop / scrollHeight * 100);

//     console.log(height)
//     console.log(scrollHeight)
// });

/** code by webdevtrick ( https://webdevtrick.com ) **/
// const updateScrollPercentage = function() { 
//     const heightOfWindow = window.innerHeight,
//         contentScrolled = window.pageYOffset,
//         bodyHeight = document.body.offsetHeight,
//         percentage = document.querySelector("[data-scrollPercentage] .percentage")
//         percentageVal = document.querySelector("#percentage-value")

//     if(bodyHeight - contentScrolled <= heightOfWindow) {
//         percentageVal.textContent = percentage.style.width = "100%"
//     }
//     else {
//         const total = bodyHeight - heightOfWindow,
//             got = contentScrolled,
//             percent = parseInt((got/total) * 100)
//         percentageVal.textContent = percentage.style.width = percent + "%"
//     }
// }

// window.addEventListener('scroll', updateScrollPercentage)


function openDialog(button) {
    var dialog = button.closest('.card').querySelector('dialog');
    dialog.showModal();
}
    
function closeDialog(button) {
    var dialog = button.closest('dialog');
    dialog.close();
}
    