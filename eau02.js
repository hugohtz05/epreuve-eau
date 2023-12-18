function twoNumber() {
    for (let i = 0; i < 100; i++) {
        for (let j = i + 1; j < 100; j++) {
            console.log(`${formatNombre(i)} ${formatNombre(j)},`);
        }
    }
}

function formatNombre(nombre) {
    return (nombre < 10) ? `0${nombre}` : `${nombre}`;
}

twoNumber();
