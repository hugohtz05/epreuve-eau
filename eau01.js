    // fonction utilisées
function twoNumber() {
    for (let a = 0; a < 100; a++) {
        for (let b = a + 1; b < 100; b++) {
            // affichage 
            console.log(`${formatNumber(a)} ${formatNumber(b)},`);
        }
    }
}
    // résolution
function formatNumber(nombre) {
    return (nombre < 10) ? `0${nombre}` : `${nombre}`;
}

twoNumber();
