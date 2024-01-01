//fonctions utilisées
function sort(arg) {
    for (let i = 0; i < arg.length - 1; i++) {
        for (let j = 0; j < arg.length - i - 1; j++) {
            if (arg[j].localeCompare(arg[j + 1], undefined, {numeric: true}) > 0) {
                const temp = arg[j];
                arg[j] = arg[j + 1];
                arg[j + 1] = temp;
            }
        }
    }
    return arg;
}
//Gestion d'erreur 
//Parsing
function getArgument(){
    let argument = process.argv.slice(2);
    return argument;
}
//Resolution
let myArgument = getArgument();
let result = sort(myArgument);
let joinedResult = result.join(" ")

//Affichage 
console.log(joinedResult)