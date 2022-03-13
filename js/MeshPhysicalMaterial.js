function init() {
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,1,1000);
    camera.position.set(0,0,500);
    controls = new OrbitControls(camera, renderer.domElement);
    
    pointlight = new THREE.PointLight(0xffffff,1);
    pointlight.position.set(200,200,200);
    scene.add(pointlight);

    let ballGeo = new THREE.SphereGeometry(100,64,64);
    let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial);
    let ballMesh = new THREE.Mesh(ballGeo,ballMat);
    scene.add(ballMesh);

    animate(); // rendering loop
}