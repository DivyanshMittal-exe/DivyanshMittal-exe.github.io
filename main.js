var x = 0;
var y = 0;
var spacing = 20;

function setup(){

    var Height = document.getElementById('SideAni').offsetHeight;
    var Width = document.getElementById('SideAni').clientWidth ;
    let canvas = createCanvas(Width,Height );
    console.log(window.innerHeight);
    console.log(self.innerHeight);
    console.log(parent.innerHeight);
    console.log(top.innerHeight);
    // console.log(clientHeight);


    canvas.parent('SideAni');
    background('rgb(41, 50, 65)');
    
}

function draw(){
    stroke('rgb(224, 251, 252)');
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

