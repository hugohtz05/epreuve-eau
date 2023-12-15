// #fonctions utilisées 
function number3() {
    for (let a = 0; a < 10; a++) {
        for (let b = a + 1; b < 10; b++) {
            for (let c = b + 1; c < 10; c++) {

                // résolution
                let combination = [a, b, c];

                // affichage
                console.log(combination.join(''));
            }
        }
    }
}
number3();
