const { performance } = require('perf_hooks');


// Reescribe isPrime () para calcular primos más rápido
// Intenta calcular los números primos 100,000 y 1,000,000
Number.prototype.isPrime = function() {
    for( let i=2; i< Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {            
            return false;
        }
    }
    return true;
}


start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e5 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 100,000th prime number is ${num-1}`); //1297001
console.log(`This took ${performance.now() - start} milliseconds to run`);

primeCount = 0;
num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 1e6 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 1'000,000th prime number is ${num-1}`); //15476717





//Determina si la función de Fibonacci iterativa o recursiva es más rápida

//la mas rapida es la iterativa
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20);



//Escribe una función más eficiente para invertir una cadena

//funcion previa
start = performance.now();
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
console.log(reversed1);
console.log(`This took ${performance.now() - start} milliseconds to run`);  


//funcion reescrita
start = performance.now();
let result="";
for (let i=story.length-1; i>=0;i--){
    //console.log(i);
    result+=story.charAt(i);
}
console.log(result);
console.log(`This took ${performance.now() - start} milliseconds to run`); 