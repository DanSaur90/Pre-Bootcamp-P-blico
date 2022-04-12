var genre;
console.log(genre); //undefined
genre = "disco";
rewind();
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre); //rock
    var genre = "r&b";
    console.log(genre); // r&b
}
console.log(genre); //disco