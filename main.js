// main.js
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const w = window.innerWidth;
const h = window.innerHeight;

// Scène, caméra et rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 100);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

// Géométrie et matériau
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
cube.scale.setScalar(2); // taille initiale
scene.add(cube);

// Lumières
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
scene.add(hemiLight);

// Contrôles de la caméra
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.enableDamping = true;

// Gestion du redimensionnement de la fenêtre
window.addEventListener("resize", () => {
  const W = window.innerWidth;
  const H = window.innerHeight;
  renderer.setSize(W, H);
  camera.aspect = W / H;
  camera.updateProjectionMatrix();
});

// Changement de couleur du cube
const colorInput = document.getElementById("color");
if (colorInput) {
  colorInput.addEventListener("input", (e) => {
    cube.material.color.set(e.target.value);
  });
}

// Changement de taille du cube
const sizeInput = document.getElementById("size");
if (sizeInput) {
  sizeInput.addEventListener("input", (e) => {
    const size = parseFloat(e.target.value);
    cube.scale.set(size, size, size);
  });
}

// Boucle d'animation
function animate() {
  requestAnimationFrame(animate);
  controls.update(); // autoRotate & damping
  renderer.render(scene, camera);
}
animate();
