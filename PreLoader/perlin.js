let r_mul = 10;

let k;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background('#474747');
  k = Math.min(width/14,height/14);

}

let iInitial = 0;
let offset = 30;
let perlinfrac = 0.02;
let radius_spill = 1;
let radiusfac = 2;
let radiusMax = 100
 
// let offset = Math.random()*1024;
// let koffset = 100;
// let offsetchange = 0.02;
function draw() {
    // console.log(frameCount)
    // noStroke()
    // fill('#FF6978')
    // stroke(255);
    // push();
    // translate(0,height);
    // rotate(Math.atan(-height/width));
    // translate(0,Math.sqrt(width*width+height*height)*(1/2 - speed*frameCount))
    // beginShape();

    
    // let i = -0.1*width;
    // for (; i*i < 1.1*(width*width+height*height); i+=30) {
    //     let h = map(noise(offset,0.003*i),0,1,-height/4,height/4);
        
    //     vertex(i,h);
        
    // }
    // vertex(i,1.1*Math.sqrt(width*width+height*height));
    // vertex(0,1.1*Math.sqrt(width*width+height*height));
    // endShape(CLOSE);
    // offset += offsetchange;
    // pop()

    // if((1 - speed*frameCount) <= 0 ){
    //   noLoop();
    //   // erase();
    //   // quad(0,0,0,height,width,height,width,0)
    //   // noErase();
    // }

      
 
      fill('#363636')
      stroke(255);

      translate(width/2,height/2);
  
      beginShape();
      
          
          for (let i = iInitial; i < iInitial+ 360; i+=5) {
              let localOffset = map(noise(radiusMax*radiusfac + perlinfrac*k*radiusfac*Math.cos(i* Math.PI/180) ,radiusMax*radiusfac + perlinfrac*k*radiusfac*Math.sin(i* Math.PI/180) ,frameCount*0.05),0,1,0,offset);
              let x = (k*radiusfac+localOffset)*Math.cos((i - iInitial)* Math.PI/180);
              let y = (k*radiusfac+localOffset)*Math.sin((i - iInitial)* Math.PI/180);



              vertex(x,y);
          }
          
          endShape(CLOSE);
          iInitial+=1;
}

function windowResized() {
  resizeCanvas(1.0*window.innerWidth,1.0* window.innerHeight);

  
}