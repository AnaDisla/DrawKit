const canvas = document.getElementById('pizarra');
const ctx = canvas.getContext('2d');

//Variable bandera para saber si se tiene que dibujar o no

let dibujando = false;
let ultimox = 0;
let ultimoy = 0;



canvas.addEventListener('mousedown', (e) => {
    dibujando = true;
    const pos = obtenerPosicion(e);
    ultimox = pos.x;
    ultimoy = pos.y;
});

canvas.addEventListener('mouseup', () =>{
    dibujando = false;

    
});

canvas.addEventListener('mousemove', (e) =>{
    console.log("dibujando");
    if (!dibujando) return;
    
        const pos = obtenerPosicion(e);

        ctx.beginPath();
        ctx.moveTo(ultimox, ultimoy);
        ctx.lineTo(pos.x, pos.y);
        ctx.lineWidth= 15;
        ctx.stroke();
        

        ultimox=pos.x;
        ultimoy=pos.y;
    }
    
);

function obtenerPosicion(e){
    const rect = canvas.getBoundingClientRect();
    return{
        x: e.clientX  - rect.left,
        y: e.clientY - rect.top
    };
}