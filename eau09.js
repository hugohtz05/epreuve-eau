//fonction utilisées// 
function argToArg(arg1, arg2) {

    let resultString = '';

    for (let i = arg1; i <= arg2 - 1; i++) {
        resultString += i + ' ';
    }
    return resultString;
}
//Gestion derreur//
function isANumber(arg) {
    if (isNaN(arg)) {
        throw new Error("Erreur : L'argument doit être un nombre.");
    }
}
//Parsing// 
function getArgument() {
    return parseInt(process.argv[2]),parseInt(process.argv[3]) ;
}
//Resolution//
let fistArgument = process.argv[2];
let secondArgument = process.argv[3];
let result = argToArg(fistArgument, secondArgument);
isANumber(fistArgument)
//Affichage//
console.log(result);