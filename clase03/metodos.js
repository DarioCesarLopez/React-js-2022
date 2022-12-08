let numeros = [1,2,3,4,5,6,7,8];

numeros.forEach((numero,index) => {
    
})

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    

}

array.forEach(element => {
    
});

function impar(numero){
    if(numero % 2 == 0)
        return false;
    return true;

}

let impares = numeros.filter(impar);

console.log(impares);

let multiplicado = numeros.map(function(elemento){
    return elemento * 2;
})


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

console.log(personas);
console.log(nombreCompleto);