// Fonction utilisée
function fibonacciNthElement(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

// Gestion des erreurs

function isNumber(argument) {
    if (isNaN(argument) || argument < 0) {
        console.log("Erreur : l'argument doit être un nombre entier positif");
        process.exit(1);
    }
}

// Parsing
function getArguments() {
let argument = parseInt(process.argv[2]);
    return argument;
}

// Résolution
let argument = getArguments();
isNumber(argument);  
 
let result = fibonacciNthElement(argument);

// Affichage
console.log(result);
