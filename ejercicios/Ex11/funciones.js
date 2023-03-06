/* 
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos */

function sinParametros (){
    return true;
}

setTimeout(function(){
    console.log("Hola soy una promesa");
}, 5000);

function* idPar (){
    let id = 0;
    while(true){
        id = id +2;
        if (id === 10) return id;
        yield id;
    }
}
const gen = idPar();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

