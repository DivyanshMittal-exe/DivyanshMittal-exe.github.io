import {FontAwesomeIcon} from "@fortawesome/fontawesome-free/js/all.js"
import 'bootstrap'
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

tippy('[data-tippy-content]',{
    placement: 'right',
    animation: 'shift-away',
});

tippy('[top-data-tippy-content]',{
    placement: 'top',
    animation: 'shift-away',
});


// let prog = document.getElementsByClassName("progline")[0]
// let progl = document.getElementsByClassName("prog_l_top")[0]




// window.addEventListener("scroll", function(){
    
//     let rect = prog.getBoundingClientRect();
//     let baseline = this.window.innerHeight;
//     let perc  = (0.65*baseline - rect.top)/(rect.height);

//     if(perc>1){
//         progl.style.height = prog.clientHeight

//     }else if(perc<0){
//         progl.style.height = 0

//     }else{
//         progl.style.height = perc*prog.clientHeight
//         // console.log("perc");

//     }

//     console.log(perc);


// });


import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";

import ScrollToPlugin from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


let lines = document.querySelectorAll(".prog_l_top")

function gsapCreate(el) {
    gsap.to(el, {
    yPercent: 100,
    // height: 'auto',
    // scaleY: 1, 
    // yPercent: 100,

    scrollTrigger: {
      trigger: el,
      scrub: 1,
    //   markers:true,
      start: "top 65%",
      end: "bottom 65%"
    }
})
}

lines.forEach(gsapCreate)





