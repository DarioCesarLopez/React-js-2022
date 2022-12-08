
let datos = document.getElementById("datos");
let empleado_tabla = document.getElementById("tabla");
let boton_borrar = document.getElementById("tabla");
// obtener datos de empleados
/*
async function obtenerDatos(){
    console.log("Buscando Datos");
    let res =  await fetch("https://638a80f081df38ab345742af.mockapi.io/api/users");
    let data = await res.json();
    console.log(data);
    datos.innerHTML = data;
    console.log("Datos Cargados");
}
*/

async function obtenerDatosEmpleados(){
    console.log("Buscando Datos");
    let res =  await fetch("https://638a80f081df38ab345742af.mockapi.io/api/users/");
    let data = await res.json();
    data.forEach(element => {
        cargar_empleado(element.nombre,element.apellido,element.trabajo,element.persona,element.btn_borrar);
    });
    console.log(data)
  }


function cargar_empleado(nombre,apellido,trabajo,persona,btn_borrar){
    tr = document.createElement("tr");
    // creamos los "td" de nombre, apellido, imagen(pesona) y lo agregamos al "tr"
    //img = document.createElement("tr");
    btn_borrar = document.createElement("tr");

    let td_nombre = document.createElement("td");
    td_nombre.textContent = nombre; // +" "+apellido // el texContent del td es el nombre
    tr.appendChild(td_nombre);

    let td_apellido = document.createElement("td");
    td_apellido.textContent = apellido; //el texContent del td es el nombre
    tr.appendChild(td_apellido);

    let td_trabajo = document.createElement("td");
    td_trabajo.textContent = trabajo //el texContent del td es el nombre
    tr.appendChild(td_trabajo);

    let td_persona = document.createElement("td");
    td_persona.innerHTML = persona; //el texContent del td es el nombre
    tr.appendChild(td_persona);

    let td_btn_borrar = document.createElement("button");
    td_btn_borrar.innerHTML = btn_borrar //el texContent del td es el nombre
    tr.appendChild(td_btn_borrar);

    empleado_tabla.appendChild(tr);
    boton_borrar.appendChild(btn_borrar)
  
}



async function EliminarDatos(id){

        console.log("Eliminando Datos");
        const res =  await fetch("https://638a80f081df38ab345742af.mockapi.io/api/users"+id,{
            method: "DELETE"
        });
        const data = await res.json();
        console.log(data);
        datos.innerHTML = data;
        console.log("Datos Eliminados");

}


//obtenerDatos();
obtenerDatosEmpleados();

/*
let personas = [
    {name:"Leandro", lastname:"Dini"},
    {name:"Juan", lastname:"Lopez"},
    {name:"Silvia", lastname:"abc"},
    {name:"Jose", lastname:"sal"},
    {name:"Maria", lastname:"Dini"}
]



let nombreCompleto = personas.map(function(persona){
    return persona.name + " " + persona.lastname
})



/*
async function AgregarDatos(txt){
    console.log("Dato Agregado");
    const res =  await fetch("https://638a80f081df38ab345742af.mockapi.io/api/users",{
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
*/


// obtenerDatos();
// AgregarDatos(txt);
// ModificarDatos(txt);
// EliminarDatos(1);





