// #fonctions utilisées 
function showTreeNumber() {
    for (let a = 0; a < 10; a++) {
        for (let b = a + 1; b < 10; b++) {
            for (let c = b + 1; c < 10; c++) {

                combineNumber(a, b, c);

            }
        }
    }
}

// #resolution
function combineNumber(a, b, c) {
    let combination = [a, b, c];
    showNumber(combination);
}

// affichage
function showNumber(combination) {
    console.log(combination.join(''));
}

showTreeNumber();
