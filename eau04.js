// Fonction utilisée
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num !== 1 && num !== 0;
}

function firstNumber(argument) {
    let nextNumber = argument + 1;
    while (!isPrime(nextNumber)) {
        nextNumber++;
    }
    return nextNumber;
}

// Gestion d'erreur
function isNumber(argument) {
    if (isNaN(argument) || argument < 0) {
        console.log("Erreur : l'argument doit être un nombre entier positif");
        process.exit(1);
    }
}

// Parsing
function getArgument() {
    let argument = parseInt(process.argv[2]);
    return argument; 
}

// Résolution
let argument = getArgument();
isNumber(argument);
let result = firstNumber(argument);

// Affichage
console.log(result);
