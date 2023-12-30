// Fonction utilisée
function findIndex(arg) {
    let result = -1; 
    let lastWord = arg[arg.length - 1]; 
    for (let i = 0; i < arg.length - 1; i++) {
        if (arg[i] === lastWord) {
            result = i;
            break; 
        }
    }
    return result;
}

// Gestion des erreurs
// Parsing
function getArgument() {
    let argument = process.argv.slice(2);
    return argument;
}

// Résolution
let myArgument = getArgument();
let result = findIndex(myArgument);

// Affichage
console.log(result);
