var x = 0;
var y = 0;
var spacing = 40;



function setup() {

    const canvas_div = document.getElementById('SideAni');
    var Height = canvas_div.offsetHeight;
    var Width = canvas_div.offsetWidth;
    let canvas = createCanvas(Height, Width);
    // let canvas = createCanvas(Width,Height );
    canvas.parent('SideAni');
    background('#1f1d2b');


}

function draw() {
    for (let index = 0; index < 20; index++) {
        strokeWeight(round(width / 300));
        stroke('#3bfed8');
        random(1) < 0.5 ? line(x, y, x + spacing, y + spacing) : line(x, y + spacing, x + spacing, y);
        if (x > width) {
            x = 0;
            y += spacing;
        } else {
            x += spacing;
        }

        if (y > 1.1 * height) {
            noLoop();
        }

    }

}

function windowResized() {
    const canvas_div = document.getElementById('SideAni');
    var Height = canvas_div.offsetHeight;
    var Width = canvas_div.offsetWidth;
    resizeCanvas(Width, Height);
    background('#0d0d0d');
    x = 0;
    y = 0;
    loop()
}

window.addEventListener("load", function(){
    const canvas_div = document.getElementById('SideAni');
    var Height = canvas_div.offsetHeight;
    var Width = canvas_div.offsetWidth;
    resizeCanvas(Width, Height);
    background('#1f1d2b');
    x = 0;
    y = 0;
    loop()
});