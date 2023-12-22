	// fonction utilisées
function reverseArgument() {
    const argument = process.argv.slice(2);

    let result = "";
    for (let i = argument.length - 1; i >= 0; i--) {
        result += argument[i];
        if (i > 0) {
            result += ' '; 
        }
    }
    // affichage
    console.log(typeof(result));
}

reverseArgument();
