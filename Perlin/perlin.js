
function setup() {
  createCanvas(1.0*window.innerWidth,1.0* window.innerHeight);

}
let offset = 1;
let koffset = 5;
let offsetchange = 0.002;
function draw() {
    loadPixels()
    background('#f4f4f6');
    colorMode(RGB,255,255,255,100)
    for (let k = 0; k < 5; k++){
    // fill('#0d0d0d')
    fill(color(13,13,13,k*20+20))
    stroke(255);

    beginShape();
    vertex(-0.1*width,1.1*height);
    for (let i = -0.1*width; i < 1.1*width; i+=2) {
        let h = map(noise(0.85*offset + 0.07*k, +  0.01*offset+ 0.0021*i),0,1,0,height);

        vertex(i,h+k*koffset);
    }
    vertex(1.1*width,1.1*height);
    endShape(CLOSE);
    offset += offsetchange;
    // console.log(offset)

    }
    
  
}

function windowResized() {
  resizeCanvas(1.0*window.innerWidth,1.0* window.innerHeight);

  
}