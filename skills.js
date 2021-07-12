var myfont;
function preload(){
    // textu = loadImage('mona.jpg')
    myfont = loadFont('PlayfairDisplay.ttf');
}

// skilllist=["HTML","python","CSS","JS","C","Java","Flutter","Bootstrap","C#","Unity","Django","C++","PS","Illustrator","","","","","","","","","","","","","","","","","","","","","",""]


// skilllist=["","","","Django","", 
//           "","","Flutter","",
//           "HTML","","","JS","",
//           "","C++","","","Java",
//           "","","","","C",
//           "","","","","",
//           "CSS","","","C#","",
//           "","","python","","",
//           "","","","","Bootstrap",
//           "Photoshop","","","Unity","",]

skilllist = [
  "","","","Illustrator","","",      
  "C++","","","","Unity","",
  "","","CSS","","","",
  "","","C#","","","Bootstrap",
  "","HTML","","","Flutter","",
  "","","","","PS","",
  "","","","","","",
  "","","Django","","","",
  "","","","","","Java",
  "","Python","","","","",
  "","","","C","","",
  "","","","JS","","",


]

function makeBox(x,y,z,r,i,rotn){
  textSize(r/10);
      textFont(myfont);
      // rotateX(-rotn[1])
      // rotateY(-rotn[2])
      // rotateZ(-rotn[3])

      translate(x,y,z);
      
      textAlign(CENTER, CENTER);
      txt = text(skilllist[i], 0,-r/40);
      //txt.lookAt(rotn);
      translate(-x,-y,-z);
      // rotateZ(-rotn[3])
      // rotateY(-rotn[2])
      // rotateX(-rotn[1])

}


function setup() {
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  cam = createEasyCam();
  document.oncontextmenu = ()=>false;
}

function draw() {
  background('#101218');
  // console.log()
  // noStroke();
  
  lights();
  // texture(textu)
  // sphere(100);
  let total = 12;
  let r = 200;
  for (let i = 0; i < total; i++) {
    let lon = map(i,0,total,-Math.PI,Math.PI)
    for (let j = 0; j <total/2; j++) {
      let lat = map(j,0,total/2,-Math.PI/2,Math.PI/2)

      let x = r*Math.sin(lon)*Math.cos(lat);
      let y = r*Math.sin(lon)*Math.sin(lat);
      let z = r*Math.cos(lon);

      stroke(255);
      // point(x,y,z);
      makeBox(x,y,z,r,i+total*j,cam.getRotation());
      
      
    }
  }
}

