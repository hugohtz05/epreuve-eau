function evenOrOdd(argument) {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let result = '';

    for (let i = 0; i < argument.length; i++) {
        let char = argument[i];
        let index = lowerCaseLetters.indexOf(char);

        if (index !== -1) {
            if (i % 2 === 0) {
                result += upperCaseLetters[index];
            } else {
                result += char;
            }
        } else {
            result += char;
        }
    }

    return result;
}

// Gestion d'erreur //
function isANumber(argument) {
    if (!isNaN(argument)) {
        throw new Error("Erreur : L'argument ne doit pas être un nombre.");
    }
}

// Parsing //
function getArgument() {
    return process.argv.slice(2).join('');
}

// Résolution //
try {
    const argumentFromCommandLine = getArgument();
    isANumber(argumentFromCommandLine);
    const result = evenOrOdd(argumentFromCommandLine);
    // Affichage //
    console.log(result);
} catch (error) {
    console.error(error.message);
}
