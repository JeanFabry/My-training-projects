// let imgArray = [];

// fetch("https://picsum.photos/v2/list")
//   .then((response) => response.json())
//   .then((array) => {
//     let j = 0;
//     const displayRandomImage = () => {
//       if (j == array.length) {
//         j = 0;
//       }
//       document.body.style.backgroundImage = `url(${array[j].download_url})`;
//       j++;

//       setTimeout(displayRandomImage, 5000);
//     };
//     displayRandomImage();
//   });

// const options = {
//   weekday: "long",
//   day: "numeric",
//   month: "long",
//   year: "numeric",
// };

// const show_day = () => {
//   let today = new Date();
//   let date = today.toLocaleDateString(undefined, options);
//   let timeToday = today.toLocaleTimeString();
//   const display_date = document.querySelector(".display_date");
//   const display_clock = document.querySelector(".display_clock");
//   display_date.textContent = date;
//   display_clock.textContent = timeToday;
// };

// setInterval(show_day, 1000);


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(20,20,20,20);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 ,
transparent:true,
wireframe:true,
wireframeLinewidth:5,
});
const cube = new THREE.Mesh(geometry, material);

// const geometry2 = new THREE.TorusKnotGeometry(15,3,100,16)
// const material2 = new THREE.MeshBasicMaterial({
//   color: 0xff0000,
//   transparent: true,
//   wireframe: true,
//   wireframeLinewidth: 5,
// });
// const torus = new THREE.Mesh(geometry2, material2);

scene.add(cube);
// scene.add(torus);

camera.position.z = 100;




const animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cube.rotation.y += 0.005;
  cube.rotation.x -= 0.005;



camera.position.z += 0.005;
  camera.position.z-=0.005;
};

animate();


const rotationCube =(e) => {
  if (e.code == "ArrowRight") {
    cube.rotation.y += 0.1;
  } else if (e.code == "ArrowLeft") {
    cube.rotation.y -= 0.1;
  } else if (e.code == "ArrowUp") {
    cube.rotation.x -= 0.1;
  } else if (e.code == "ArrowDown") {
    cube.rotation.x += 0.1;
  }
}

window.addEventListener("keyup",rotationCube)
