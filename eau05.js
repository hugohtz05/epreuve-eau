//Fonction utilisées//
function firstNumber() {
    let result = 0;
    let increment = 2;

    if (result === 0) {
        argument++;
    } else {
        argument = argument + 1;
    }
    result = argument % increment;
    while (increment < argument) {
        increment++;
    }
    return result;
}

//Gestion d'erreur//
function isNumber(argument) {
    if (isNaN(argument) || argument < 0) {
        console.log("Erreur : l'argument doit être un nombre entier positif");
        process.exit(1);
    }
}

//parsing//
function getArgument () {
    let argument = parseInt(process.argv.slice(2)); 
}

//Résolution//
argument = getArgument()
isNumber(argument)
let result = firstNumber(argument)

//Affichage//
console.log(argument);