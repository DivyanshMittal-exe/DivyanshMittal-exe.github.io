import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import {
	GUI
} from 'dat.gui'
import {
	GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js';

import {Text} from 'troika-three-text'


let mainDivS = document.getElementsByClassName('skillsphere')[0]

let WidthS = mainDivS.clientWidth ;
let HeightS = mainDivS.clientHeight ;




const sceneS = new THREE.Scene()
sceneS.background = new THREE.Color( 0x1f1d2b );

const cameraS = new THREE.PerspectiveCamera(75, WidthS / HeightS, 0.1, 1000)


const rendererS = new THREE.WebGLRenderer({
	canvas: document.querySelector('#skillsp'),
	antialias : true
})

rendererS.setPixelRatio(window.devicePixelRatio)

rendererS.setSize(WidthS, HeightS)

cameraS.position.set(1, 1, 5.5)

const orbit = new OrbitControls(cameraS, rendererS.domElement);
// orbit.autoRotate = true;
// orbit.target = new THREE.Vector3(0,0,0); // set the center
// orbit.maxPolarAngle =  Math.PI/2; // prevent the camera from going under the ground
// orbit.minDistance = 140; // the minimum distance the camera must have from center
// orbit.maxDistance = 250; // the maximum distance the camera must have from center
// orbit.zoomSpeed = 0.3; // control the zoomIn and zoomOut speed
// orbit.rotateSpeed = 0.3; 


// const geometry = new THREE.SphereGeometry( 2, 3, 3 );
// const material = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe : true} );
// const sphere = new THREE.Mesh( geometry, material );

// console.log(geometry);
// console.log(geometry);
// console.log(sphere);
// sceneS.add( sphere );
const loader = new GLTFLoader();
var textArr = [];


var skillArr = ['C','C++','C#','Java','JavaScript','Python','Haskell','SML','Tensorflow','Keras','SDL','Bootstrap','HTML','CSS','Node.js','Unity','Photoshop','Illustrator','Blender']
var arr = [];
while(arr.length < skillArr.length){
    var r = Math.floor(Math.random() * 1000) % 80 ;
    if(arr.indexOf(r) === -1) arr.push(r);
}

var objects = []
var gmodel;
loader.load('Sphere.glb', function (gltf) {
	gmodel = gltf.scene;
	console.log(gmodel)
	// gmodel.children[9].children[0].material.emissive = new THREE.Color( 0x00ffff );
	// sceneS.add(gmodel);

    gmodel.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.geometry.computeBoundingBox();
            let matrix = new THREE.Vector3();
            let offset = child.geometry.boundingBox.getCenter(matrix);
            child.geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(-offset.x, -offset.y, -offset.z));
            child.position.copy(offset);
            objects.push(child);
        }
    });

    // console.log(objects[1].position.x)
for (let i = 0; i < skillArr.length; i++) {
    var element = skillArr[index];
    // var position = new THREE.Vector3();
    // gmodel.children[arr[i]].updateMatrixWorld(true);
    // position.setFromMatrixPosition( objects[arr[i]].matrixWorld ); 
    var myText = new Text()
    textArr.push(myText)
    sceneS.add(myText)

    myText.text = skillArr[i];
    myText.fontSize = 0.2
    myText.position.x = objects[arr[i]].position.x;
    myText.position.y = objects[arr[i]].position.y;
    myText.position.z = objects[arr[i]].position.z;
    // myText.position.z = -1
    myText.color = 0xfefeff    
    // myText.sync()

}

}, function ( xhr ) {


}, function (error) {

	console.error(error);

});


console.log(arr);




window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){
    let mainDivS = document.getElementsByClassName("skillsphere")[0]

    let WidthS = mainDivS.clientWidth ;
    let HeightS = mainDivS.clientHeight ;
    cameraS.aspectS = WidthS / HeightS;
    cameraS.updateProjectionMatrix();

    rendererS.setSize( WidthS, HeightS );

}

var angle = 0

function animate(){
	requestAnimationFrame(animate)
    for (let i = 0; i < skillArr.length; i++) {
        var position = new THREE.Vector3();
        // position.setFromMatrixPosition(gmodel.children[arr[i]].modelViewMatrix)
        textArr[i].lookAt( cameraS.position );
        textArr[i].position.x = objects[arr[i]].position.x;
        textArr[i].position.y = objects[arr[i]].position.y;
        textArr[i].position.z = objects[arr[i]].position.z;
        cameraS.position.x = Math.cos(angle) * 5;
        cameraS.position.z = Math.sin(angle) * 5;
        angle += 0.00005
        // cameraS.rotation.y += 0.0005;
        cameraS.lookAt(0, 0, 0);
        // orbit.update()
        // console.log( position.setFromMatrixPosition(gmodel.children[5].modelViewMatrix))
    }
    
   	rendererS.render( sceneS, cameraS );
}


  

animate()