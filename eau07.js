// Fonctions utilisées
function majOnString(args) {
    let modifiedArguments = '';

    for (let i = 0; i < args.length; i++) {
        if (args[i].length > 0) {
            modifiedArguments += args[i][0].toUpperCase() + args[i].slice(1) + ' ';
        }
    }

    return modifiedArguments;  
}

// Gestion d'erreur
// parsing
function getArguments() {
    let arguments = process.argv.slice(2);
    return arguments;
}

// Résolution
let myArguments = getArguments();
let result = majOnString(myArguments);

// Affichage
console.log(result);
