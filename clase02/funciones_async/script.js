
// esto es una promesa///////////////

let btn = document.getElementById("btn");


/*
btn.addEventListener("click",()=>{
    // intervalo de tiempo dentre del evento
    tiempo();
});
*/

console.log("consultar datos");

let promesa = new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("traer datos");
           resolve()
        },1000);
})

promesa.then(()=>{
    mostrarDatos();
}).catch(()=>{console.log("error")
});


function mostrarDatos(){
    console.log("mostrar datos");
}



function tiempo(){
    let tiempo = 0;
    let intervalo = setInterval(()=>{
     tiempo ++;
        console.log(tiempo);
        if(tiempo >=15)
            clearInterval(intervalo);
    },1000);
}




// esto es un callback /////////////////

/*
let btn = document.getElementById("btn");



        btn.addEventListener("click",()=>{
            // intervalo de tiempo dentre del evento
                 tiempo();
                });


console.log("consultar datos");

function traerDatos(m){
    setTimeout(function(){
        console.log("traer datos");
       
    },1000);
    m();
}

traerDatos(mostrarDatos);

//hacer un callback
function mostrarDatos(){
    console.log("mostrar datos");
}



function tiempo(){
    let tiempo = 0;
    let intervalo = setInterval(()=>{
     tiempo ++;
        console.log(tiempo);
        if(tiempo >=15)
            clearInterval(intervalo);
    },1000);
}

*/


