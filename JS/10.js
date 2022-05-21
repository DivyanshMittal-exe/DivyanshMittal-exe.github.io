let abtmeart = function (sketch) {

    var x = 0;
    var y = 0;
    var spacing = 40;

    sketch.setup = function () {
        const canvas_div = document.getElementById('SideAni');
        var Height = window.innerHeight;
        var Width = canvas_div.offsetWidth;
        let canvas = sketch.createCanvas(Width, Height);
        // let canvas = createCanvas(Width,Height );
        canvas.parent('SideAni');
        sketch.background('#1f1d2b');
    }

    sketch.draw = function () {
        for (let index = 0; index < 20; index++) {
            sketch.stroke('rgba(59, 254, 216,1)');

            if (window.innerWidth < 768) {
                sketch.strokeWeight(Math.floor((sketch.width * y) / (100 * sketch.height)));

            } else {
                sketch.strokeWeight(Math.floor(sketch.width / 150));

            }
            Math.random(1) < 0.5 ? sketch.line(x, y, x + spacing, y + spacing) : sketch.line(x, y + spacing, x + spacing, y);
            if (x > sketch.width) {
                x = 0;
                y += spacing;
            } else {
                x += spacing;
            }

            if (y > 1.1 * sketch.height) {
                sketch.noLoop();
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
}

function setabt() {
    var abtart = new p5(abtmeart);
    const canvas_div = document.getElementById('SideAni');
    var Height = window.innerHeight
    var Width = canvas_div.offsetWidth;

    console.log("Hello")
    abtart.resizeCanvas(Width, Height);
    // abtart.windowResized()

    abtart.loop()
}


setabt()



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
