
// import sal from 'sal.js'

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


const texts = ['C','C++','C#','Java','JavaScript','Python','Haskell','SML','Tensorflow','Keras','SDL','Bootstrap','HTML','CSS','Node.js','Unity','Photoshop','Illustrator','Blender','ML-Lex','ML-Yacc','Prolog','VHDL','NodeJS'];

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


