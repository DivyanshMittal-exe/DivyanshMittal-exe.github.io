
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

}
let offset = 1;
let offsetchange = 0.005;
function draw() {
    loadPixels()
    background('#f4f4f6');
    
    for (let k = 0; k < 5; k++){
    fill('#101218')
    stroke(255);

    beginShape();
    vertex(0,height);
    for (let i = 0; i < width; i++) {
        let h = map(noise(offset + 0.1*k, +  0.1*offset+ 0.01*i),0,1,0,height);

        vertex(i,h);
    }
    vertex(width,height);
    endShape(CLOSE);
    offset += offsetchange;
    console.log(offset)

    }
    
  
}

