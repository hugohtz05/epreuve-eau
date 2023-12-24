// Fonction utilisée
function isSlice(argument) {
    let i, j;

    for (i = 0; i < argument.length; i++) {
        for (j = i + 1; j <= argument.length; j++) {
            // Ajoutez ici la condition pour trouver la sous-chaîne
            if (argument.slice(i, j) === argument2) {
                return { i, j };
            }
        }
    }
    return { i: -1, j: -1 };
}

function verifySlice(argument1,) {
    let { i, j } = isSlice(argument1);
    if (i !== -1 && j !== -1) {
        console.log("true");
    } else {
        console.log("false");
    }
}

// Gestion d'erreur
function main() {
    if (process.argv.length !== 4) {
        console.log("Error: Veuillez fournir deux chaînes de caractères en arguments.");
        process.exit(1);
    }

    // Parsing
    let argument1 = process.argv[2];
    let argument2 = process.argv[3];

    // Résolution
    verifySlice(argument1, argument2);
}

// Appel de la fonction main
main();
