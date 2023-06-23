function bump(x){
    let myArr = x.split(""); // split into array
    let bumps = 0; // count bumps
    let flats = 0; // count flats
    for(let i = 0; i < x.length;i++){
        if(myArr[i] == "n"){
            bumps = bumps + 1; // count bumps
        } else {
            flats = flats + 1; // count flats
        }
    }
    // Return winner
    if(bumps > 15){
        return "Car Dead"
    } else {
        return "Woohooo!"
    }
}

console.log(bump("n")); // "Woohoo!"
console.log(bump("__nn_nnnn__n_n___n____nn__nnn")); // "Woohoo!"
console.log(bump("nnn_n__n_n___nnnnn___n__nnn__")); // "Woohoo!"
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn")); // "Car Dead"
console.log(bump("______n___n_")); // "Woohoo!"