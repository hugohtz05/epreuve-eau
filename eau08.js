//Fonctions utilisées
function isStringOfNumber(args) {
    for (let i = 0; i < args.length; i++) {
        if (isNaN(args[i])) {
            return false;  
        }
    }
    return true;  
}

// Gestion d'erreur
function numberOfArgument() {
    if (process.argv.length !== 3) {
        console.log("Erreur : Le programme prend un seul argument.");
        process.exit(1);
    }
}

// Parsing
function getArgument() {
    return process.argv[2];
}

// Résolution
numberOfArgument();
let myArgument = getArgument();
let result = isStringOfNumber(myArgument);

// Affichage
console.log(result);
