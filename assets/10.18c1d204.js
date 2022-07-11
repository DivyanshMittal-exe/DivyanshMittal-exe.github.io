// import { p5 } from 'p5js-wrapper';

// import  from 'p5'

let abtmeart = function (sketch) {

    var x = 0;
    var y = 0;
    var spacing = 40;
    var drawarray1;
    var drawarray2;
    let perc = 0;

    sketch.setup = function () {
        const canvas_div = document.getElementById('SideAni');
        var Height = window.innerHeight;
        var Width = canvas_div.offsetWidth;
        let canvas = sketch.createCanvas(Width, Height);
        // let canvas = createCanvas(Width,Height );
        canvas.parent('SideAni');
        sketch.background('#1f1d2b');
        drawarray1 = Array.from({length:(sketch.width/spacing) + 10}, () =>  Array.from({length:(sketch.height/spacing)+10}, () => (Math.floor(Math.random() * 1000))%2));
        drawarray2 = Array.from({length:(sketch.width/spacing) + 10}, () =>  Array.from({length:(sketch.height/spacing)+10}, () => (Math.floor(Math.random() * 1000))%2));
    }

    sketch.draw = function () {
        sketch.background('#1f1d2b');
        if (window.innerWidth < 768) {
            sketch.strokeWeight(Math.floor((sketch.width * y) / (100 * sketch.height)));

        } else {
            sketch.strokeWeight(Math.floor(sketch.width / 150));

        }
        // console.log(sketch.perc*sketch.width*sketch.height/(spacing*spacing))

        for (let i = 0; i < sketch.width/spacing; i++) {
            for (let j = 0; j < sketch.height/spacing; j++) {
                
                if (j*sketch.width/spacing + i >  sketch.perc*sketch.width*sketch.height/(spacing*spacing)){
                    
                    sketch.stroke('rgba(1, 223, 179, 1)')
                    drawarray1[i][j] ? sketch.line(i*spacing, j*spacing, i*spacing + spacing, j*spacing + spacing) : sketch.line(i*spacing, j*spacing + spacing, i*spacing + spacing, j*spacing);
                }else{
                    sketch.stroke('rgba(237, 106, 90, 1)')
                    drawarray2[i][j] ? sketch.line(i*spacing, j*spacing, i*spacing + spacing, j*spacing + spacing) : sketch.line(i*spacing, j*spacing + spacing, i*spacing + spacing, j*spacing);
                }

                
            }
        }
    }

    sketch.windowResized = function () {
        const canvas_div = document.getElementById('SideAni');
        var Height = window.innerHeight
        var Width = canvas_div.offsetWidth;
        sketch.resizeCanvas(Width, Height);
        sketch.background('#1f1d2b');
        x = 0;
        y = 0;
        sketch.loop()
    }

    sketch.reroll = function(){
        if(sketch.perc >=0 && sketch.perc <= 100){
            
            let a = sketch.perc*sketch.width*sketch.height/(spacing*spacing)
            let j = Math.floor(a/(sketch.width/spacing))
            let i = Math.floor( a - j * (sketch.width/spacing))

            drawarray1[i][j] = Math.floor(Math.random() * 1000)%2
            drawarray2[i][j] = Math.floor(Math.random() * 1000)%2
        }
    }
}


var abtart = new p5(abtmeart);

function setabt() {
    const canvas_div = document.getElementById('SideAni');
    var Height = window.innerHeight
    var Width = canvas_div.offsetWidth;

    console.log("Hello")
    abtart.resizeCanvas(Width, Height);

    abtart.loop()
}


setabt()


const scroller = document.getElementById('AboutMe');



window.addEventListener("scroll", function(){
    
    var rect = scroller.getBoundingClientRect();
    // console.log(rect)
    // if(rect.y < 0){
        abtart.perc = (-rect.y/rect.height)*1.5
        abtart.reroll()

    // }
    // console.log(rect.y/rect.height)
    // console.log(abtart.perc)

});



let perlinS = function (sketch) {

    let offset = 1;
    let koffset = 5;
    let offsetchange = 0.002;

    sketch.setup = function () {

        const canvas_div = document.getElementById('perlindiv');
        var Height = canvas_div.offsetHeight
        var Width = canvas_div.offsetWidth;
        let canvas = sketch.createCanvas(Width, Height);
        canvas.parent('perlindiv');
    }


    sketch.draw = function () {

        sketch.clear();
        sketch.loadPixels()
        sketch.colorMode(sketch.RGB, 255, 255, 255, 100)
        for (let k = 0; k < 5; k++) {
            // fill('#0d0d0d')
            sketch.fill(sketch.color(244,246,249, k * 20 + 20))
            sketch.stroke(sketch.color(171,123,101,255));

            sketch.beginShape();
            sketch.vertex(-0.1 * sketch.width, 1.1 * sketch.height);
            for (let i = -0.1 * sketch.width; i < 1.1 * sketch.width; i += 2) {
                let h = sketch.map(sketch.noise(0.85 * offset + 0.07 * k, +0.01 * offset + 0.0021 * i), 0, 1, 0, sketch.height);
                sketch.vertex(i, h + k * koffset);
            }
            sketch.vertex(1.1 * sketch.width, 1.1 * sketch.height);
            sketch.endShape(sketch.CLOSE);
            offset += offsetchange;
        }
    }
    sketch.windowResized = function () {
        const canvas_div = document.getElementById('perlindiv');
        var Height = canvas_div.offsetHeight
        var Width = canvas_div.offsetWidth;
        sketch.resizeCanvas(Width, Height);
    }

}


function Pset() {
    var perl = new p5(perlinS);
    const canvas_div = document.getElementById('perlindiv');
    var Height = canvas_div.offsetHeight
    var Width = canvas_div.offsetWidth;

    console.log("Hello")
    perl.resizeCanvas(Width, Height);

    perl.loop()
}


Pset()
