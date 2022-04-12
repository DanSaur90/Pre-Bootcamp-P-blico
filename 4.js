var food ;
food = 'chicken';
console.log(food);
eat();
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    var food = 'gone'; //no imprime
}