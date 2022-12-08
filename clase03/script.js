
let datos = document.getElementById("datos");

// https://rickandmortyapi.com/documentation/#character
async function obtenerDatos(){
    console.log("Buscando Datos");
    let res =  await fetch("https://rickandmortyapi.com/api/character");
    let data = await res.json();
    console.log(data);
    datos.innerHTML = data;
    console.log("Datos Cargados");
}

async function EliminarDatos(id){

        console.log("Eliminando Datos");
        const res =  await fetch("https://rickandmortyapi.com/api/character"+id,{
            method: "DELETE"
        });
        const data = await res.json();
        console.log(data);
        datos.innerHTML = data;
        console.log("Datos Eliminados");

}

let txt = {
    direccion:"North",
    id:"7",
    name:"Rick Kassulke"
}

async function AgregarDatos(txt){
    console.log("Dato Agregado");
    const res =  await fetch("https://rickandmortyapi.com/api/character",{
        method: "POST",
        body:JSON.stringify(txt),
        headers:{"Content-type":"application/json"}
    });
    const data = await res.json();
    console.log(data);
    datos.innerHTML = data;
    console.log("Datos creados");
}

async function ModificarDatos(txt){
    console.log("Dato Modificar");
    const res =  await fetch("https://638a80f081df38ab345742af.mockapi.io/api/users/"+txt.id,{
        method: "PUT",
        body:JSON.stringify(txt),
        headers:{"Content-type":"application/json"}
    });
    const data = await res.json();
    console.log(data);
    datos.innerHTML = data;
    console.log("Datos modificados");
}


// obtenerDatos();
// AgregarDatos(txt);
// ModificarDatos(txt);
// EliminarDatos(1);



async function obtenerPokeDatos(){
    console.log("Buscando Datos");
    let res =  await fetch("https://rickandmortyapi.com/api/character");
    let data = await res.json();
    data.results.forEach(element => {
        console.log(element.name);
    });
}

obtenerPokeDatos();