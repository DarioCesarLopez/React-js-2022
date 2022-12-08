let padre = document.getElementById("padre");
let hijo1 = document.getElementById("hijo1");
let hijo2 = document.getElementById("hijo2");
let btn = document.getElementById("btn");

let count = padre.children.length;

console.log(count);


btn.addEventListener("click",()=>{
    // intervalo de tiempo dentre del evento
    tiempo();
});

function tiempo(){
    let tiempo = 0;
    let intervalo = setInterval(()=>{
     tiempo ++;
        console.log(tiempo);
        if(tiempo >=15)
            clearInterval(intervalo);
    },1000);
}

//consultar
//traer //tarda!!
//mostrar


/*
function normal(){
    console.log("soy una funcion NORMAL");
};

// funcion anonima  se usan en EVENTOS
let anonima = function (){
    console.log("soy una funcion NORMAL");
};

// funcion flecha o Arrow
let flecha = () => {
    console.log("soy una funcion FLECHA ===>");
};

normal();
anonima();
flecha();
*/

