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
const grosor = document.getElementById('grosor');
const borrador = document.getElementById('borrador');

borrador.addEventListener("click", () => {
    modo = "borrador";

});

const lapiz = document.getElementById('lapiz');
let modo = "lapiz";

lapiz.addEventListener("click", () =>{
     modo = "lapiz"; 
    return;

});

canvas.addEventListener('mousemove', (e) =>{
    console.log("dibujando");
    if (!dibujando) return;
    
        const pos = obtenerPosicion(e);

        ctx.beginPath();
        ctx.moveTo(ultimox, ultimoy);
        ctx.lineTo(pos.x, pos.y);
        ctx.lineWidth = grosor.value;

        if (modo == "lapiz") {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = colorPicker.value;
            
        }else{
            ctx.globalCompositeOperation = 'destination-out';
            //ctx.clearRect(pos.x - 2.5, pos.y - 2.5, 5, 5);
        };
        ctx.stroke();
        

        ultimox=pos.x;
        ultimoy=pos.y;
    }
    
);

function obtenerPosicion(e){
    const rect = canvas.getBoundingClientRect();
    return{
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height)
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

const wipe = document.getElementById('wipe');

wipe.addEventListener("click", () =>{
    ctx.reset();
});
const mostrarGrosor = document.getElementById('mostrarGrosor');
grosor.addEventListener("input", () =>{
    mostrarGrosor.textContent =  `${grosor.value} px`;;

})