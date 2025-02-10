import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';

// Создание сцены, камеры и рендерера
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Загрузка модели
const loader = new GLTFLoader();
const modelUrl = 'https://ваш-username.github.io/threejs-project/models/your-model.glb'; // Укажите URL модели

loader.load(modelUrl, function (gltf) {
    const model = gltf.scene;
    scene.add(model);

    // Настройка позиции и масштаба модели
    model.position.set(0, 0, 0);
    model.scale.set(1, 1, 1);
}, undefined, function (error) {
    console.error('Ошибка загрузки модели:', error);
});

// Позиция камеры
camera.position.z = 5;

// Освещение
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Анимация
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// Обработка изменения размера окна
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
