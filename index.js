const canvas = document.getElementById('pizarra');

const ctx = canvas.getContext('2d');

//Variable bandera para saber si se tiene que dibujar o no

let dibujando = false;
let ultimox = 0;
let ultimoy = 0;


canvas.addEventListener('mousedown', (e) => {
    dibujando = true;
    //Obtiene posición actual
    const pos = obtenerPosicion(e);
    ultimox = pos.x;
    ultimoy = pos.y;
});

canvas.addEventListener('mouseup', () =>{
    dibujando = false;

    
});
const colorPicker = document.getElementById('colorPicker');

canvas.addEventListener('mousemove', (e) =>{
    console.log("dibujando");
    if (!dibujando) return;
    
        const pos = obtenerPosicion(e);

        ctx.beginPath();
        ctx.moveTo(ultimox, ultimoy);
        ctx.lineTo(pos.x, pos.y);
        ctx.lineWidth= 3;
        ctx.strokeStyle = colorPicker.value;
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

const botonGuardar = document.getElementById("guardar");

botonGuardar.addEventListener("click", () => {
    //Primero tenemos que convertir el contenido del Canvas en una imagen
    const imagen = canvas.toDataURL("image/png");
    //Creamos un "a" y lo almacenamos en esta variable para luego referenciar nuestra imagen.
    const enlace = document.createElement("a");

    enlace.href = imagen;

    //Instrucción de descarga y asignación de nombre.
    enlace.download = "mi dibujo.png";

    enlace.click();
});

