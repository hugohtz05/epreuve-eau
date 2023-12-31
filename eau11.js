// Fonction de tri à bulles
function triBulle(arg) {
    let n = arg.length;
    let temp;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            // Convertit les éléments en nombres
            arg[j] = parseFloat(arg[j]);
            arg[j + 1] = parseFloat(arg[j + 1]);

            if (arg[j] > arg[j + 1]) {
                temp = arg[j];
                arg[j] = arg[j + 1];
                arg[j + 1] = temp;
            }
        }
    }
    return arg;
}
function minimalDifference(arg) {
    arg.sort((a, b) => a - b);

    let minDifference = Infinity;

    for (let i = 0; i < arg.length - 1; i++) {
        let currentDifference = Math.abs(arg[i] - arg[i + 1]);

        if (currentDifference < minDifference) {
            minDifference = currentDifference;
        }
    }

    return minDifference;
}

//Gestion d'erreur 
function isANumber(arg) {
    if (isNaN(arg)) {
        throw new Error("Erreur : L'argument doit être un nombre.");
    }
}
// Parsing
function getArgument() {
    let argument = process.argv.slice(2);
    return argument;
}

// Résolution
let myArgument = getArgument();
let result = triBulle(myArgument);
let result2 = minimalDifference(myArgument);



// Affichage
console.log(result2);
