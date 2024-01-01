// Fonction Utilisées
function triSelection(arg) {
    let n = arg.length; 
    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arg[j] < arg[min]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arg[i];
            arg[i] = arg[min];
            arg[min] = temp;
        }
    }
    return arg;
}

// Gestion d'erreur
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
let result = triSelection(myArgument);
let ressult = result.join(" ");

// Affichage
console.log(ressult);
