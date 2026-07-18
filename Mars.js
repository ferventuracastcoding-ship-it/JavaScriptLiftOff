import * as THREE from 
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";


// Scene
const scene = new THREE.Scene();


// Camera
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

camera.position.z = 3;


// Renderer
const renderer = new THREE.WebGLRenderer({
    antialias:true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

document
.getElementById("mars-container")
.appendChild(renderer.domElement);


// Mars Texture
const textureLoader = new THREE.TextureLoader();

const marsTexture = textureLoader.load(
"https://threejs.org/examples/textures/planets/mars_1k_color.jpg"
);


// Mars Sphere
const marsGeometry = new THREE.SphereGeometry(
    1,
    64,
    64
);


const marsMaterial = new THREE.MeshStandardMaterial({
    map:marsTexture
});


const mars = new THREE.Mesh(
    marsGeometry,
    marsMaterial
);

scene.add(mars);


// Lighting
const sunLight = new THREE.PointLight(
    0xffffff,
    2
);

sunLight.position.set(5,3,5);

scene.add(sunLight);


// Ambient light
scene.add(
    new THREE.AmbientLight(
        0x404040
    )
);


// Stars
const starsGeometry =
new THREE.BufferGeometry();

const stars=[];


for(let i=0;i<1000;i++){

    stars.push(
        (Math.random()-0.5)*200,
        (Math.random()-0.5)*200,
        (Math.random()-0.5)*200
    );

}


starsGeometry.setAttribute(
"position",
new THREE.Float32BufferAttribute(
    stars,
    3
));


const starsMaterial =
new THREE.PointsMaterial({
    color:0xffffff
});


const starField =
new THREE.Points(
starsGeometry,
starsMaterial
);


scene.add(starField);


// Animation
function animate(){

    requestAnimationFrame(
        animate
    );


    mars.rotation.y += 0.002;

    renderer.render(
        scene,
        camera
    );
}


animate();


// Responsive
window.addEventListener(
"resize",
()=>{

camera.aspect =
window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(
window.innerWidth,
window.innerHeight
);

});
