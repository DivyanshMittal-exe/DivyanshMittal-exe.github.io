import '../style.css'
import 'bootstrap'
// import 'bootstrap-icons'


// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import {
// 	GLTFLoader
// } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import {
// 	GUI
// } from 'dat.gui'
// import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';


// let mainDiv = document.getElementsByClassName("maintext")[0]

// let Width = window.innerWidth > mainDiv.clientWidth ? window.innerWidth: mainDiv.clientWidth ;
// let Height = window.innerHeight > mainDiv.clientHeight ? window.innerHeight: mainDiv.clientHeight ;

// // const gui = new GUI()

// let is_threejs = false;

// const scene = new THREE.Scene()
// scene.background = new THREE.Color( 0x181215 );

// const camera = new THREE.PerspectiveCamera(75, Width / Height, 0.1, 1000)


// const renderer = new THREE.WebGLRenderer({
// 	canvas: document.querySelector('#maintd'),
// 	antialias : true
// })

// renderer.setPixelRatio(window.devicePixelRatio)

// renderer.setSize(Width, Height)

// camera.position.set(-5, 4, 5.5)

// // const controls = new OrbitControls( camera, renderer.domElement );

// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.toneMappingExposure = 1;
// renderer.outputEncoding = THREE.sRGBEncoding;

// // renderer.shadowMap.enabled = true;
// // renderer.gammaOutput = true;

// const ambientLight = new THREE.HemisphereLight(
// 	0xddeeff,
// 	0x202020,
// 	1,
// );

// const mainLight = new THREE.DirectionalLight(0xffffff, 1);
// mainLight.position.set(10, 10, 10);

// mainLight.castShadow = true;
// mainLight.shadow.bias = -0.0001;
// mainLight.shadow.mapSize.width = 1024*4;
// mainLight.shadow.mapSize.height = 1024*4;


// scene.add(ambientLight, mainLight);

// const loader = new GLTFLoader();
// var gmodel;
// loader.load('Me.glb', function (gltf) {
// 	gmodel = gltf.scene;
// 	console.log(gmodel)
// 	gmodel.traverse(n => { if ( n.isMesh ) {
// 		n.castShadow = true; 
// 		n.receiveShadow = true;
// 		if(n.material.map) n.material.map.anisotropy = 16; 
// 	  }});
	
// 	  gmodel.rotation.y = -2;
// 	// gmodel.children[9].children[0].material.emissive = new THREE.Color( 0x00ffff );
// 	scene.add(gmodel);
//     loop()



// }, function ( xhr ) {

// 	if( xhr.loaded ==  xhr.total ){
// 		is_threejs = true;
// 	}

// }, function (error) {

// 	console.error(error);

// });


// renderer.shadowMap.enabled = true;


// window.addEventListener( 'resize', onWindowResize, false );

// function onWindowResize(){
// 	let mainDiv = document.getElementsByClassName("maintext")[0]

// let Width = window.innerWidth > mainDiv.clientWidth ? window.innerWidth: mainDiv.clientWidth ;
// let Height = window.innerHeight > mainDiv.clientHeight ? window.innerHeight: mainDiv.clientHeight ;
//     camera.aspect = Width / Height;
//     camera.updateProjectionMatrix();

//     renderer.setSize( Width, Height );

// }

// function animate(){
// 	requestAnimationFrame(animate)
// 	gmodel.rotation.y += 0.005;
//    	renderer.render( scene, camera );
// }


  

// animate()