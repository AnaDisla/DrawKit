const canvas = document.getElementById('pizarra');
const ctx = canvas.getContext('2d');

//Variable bandera para saber si se tiene que dibujar o no

let dibujando = false;

canvas.addEventListener('mousedown', () => {
    dibujando = true;
    console.log("Se empezó a dibujar.");
});

canvas.addEventListener('mouseup', () =>{
    dibujando = false;
    console.log("Se terminó de dibujar.");
});

canvas.addEventListener('mousemove', () =>{
    console.log("dibujando");
});
