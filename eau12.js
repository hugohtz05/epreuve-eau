// Fonction de tri à bulles
function triBulle(arg) {
    let n = arg.length;
    let temp;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            
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
let result = triBulle(myArgument)
let ressult = result.join(" ");

// Affichage
console.log(ressult);
