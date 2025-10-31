function countSheep(letters: string): number {
    // Para formar sheep se necesita: s=1, h=1, e=2, p=1
    let countS = 0;
    let countH = 0;
    let countE = 0;
    let countP = 0;

    for (let letter of letters) {
        switch (letter.toLowerCase()) {
            case 's':
                countS++;
                break;
            case 'h':
                countH++;
                break;
            case 'e':
                countE++;
                break;
            case 'p':
                countP++;
                break;
        }
    }

    // Math.floor redondea hacia abajo
    const count = Math.min(countS, countH, Math.floor(countE / 2), countP);
    return count;
}

// Tests
console.log(countSheep('sheepxsheepy'));
console.log(countSheep('sshhheeeepppp'));
console.log(countSheep('hola'));
console.log(countSheep('peesh'));
console.log(countSheep('ssshhheeeppp'));