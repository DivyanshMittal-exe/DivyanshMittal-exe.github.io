var x = 0;
var y = 0;
var spacing = 40;

function setup(){

    var Height = document.getElementById('SideAni').offsetHeight;
    var Width = document.getElementById('SideAni').offsetWidth ;
    let canvas = createCanvas(1.01*Width,Height );
    console.log(window.innerHeight);
    console.log(self.innerHeight);
    console.log(parent.innerHeight);
    console.log(top.innerHeight);
    // console.log(clientHeight);


    canvas.parent('SideAni');
    background('#0d0d0d');

    
}

function draw(){
     for(let i = 0; i < 6; i++){
         draw2();
     }
}
function draw2(){
    strokeWeight(4);
    stroke('#C6C5B9');
    if (random(1) < 0.5) {
        line(x,y,x+spacing,y+spacing);
    }else{
        line(x,y+spacing,x+spacing,y);

    }
    x+= spacing;
    if (x>width){
        x = 0;
        y+= spacing;
    }
}

function windowResized() {
    var Height = document.getElementById('SideAni').offsetHeight;
    var Width = document.getElementById('SideAni').clientWidth ;
    resizeCanvas(Width, Height);
     background('#0d0d0d');
     x = 0;
    y = 0;

  }