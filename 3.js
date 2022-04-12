var brendan;
brendan = 'super cool';
function print(){
    brendan = 'only okay'; //no imprime porque nunca se llama a a funcion de manera externa
    console.log(brendan);
}
console.log(brendan); //super cool