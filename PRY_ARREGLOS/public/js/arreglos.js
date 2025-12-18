// declarar un arreglo

var frutas = ['uva','pera','manzana','banana'];

// acceder a los valores
// console.log(frutas[2]);

// agregar elementos
frutas.push('kiwi');
frutas.unshift('fresa');

/*
var indice=frutas.indexOf('maana');

frutas[indice]='manzana';
console.log(frutas);

frutas.shift();
console.log(frutas);
frutas.pop();
console.log(frutas);
*/

var frutasForeach=frutas.forEach(function(fruta){
    return fruta;
})

console.log('======================================');

var frutasMap=frutas.map(function(fruta){
    return fruta.toUpperCase();
})

console.log(frutasForeach);
console.log(frutasMap);