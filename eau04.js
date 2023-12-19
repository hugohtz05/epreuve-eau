function fibonacci() {
    let argument = parseInt(process.argv[2]); 
    let counter = 0;
    let a = 0;
    let b = 1;
    
    while (counter < argument) {
        let c = a + b;
        a = b;
        b = c;
        counter++;
    }
    console.log(a);
}

fibonacci();
