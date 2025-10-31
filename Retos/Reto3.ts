function myersCalendar(year: number): string[] {
    if (!Number.isInteger(year) || year < 1 || year > 9999) return [];

    let dates: string[] = [];

    // Buscar todos los viernes 13 del año
    for (let month = 1; month <= 12; month++) {
        let date = new Date(year, month - 1, 13);
        
        if (date.getDay() === 5) {
            let monthStr = month < 10 ? `0${month}` : `${month}`;
            dates.push(`${year}-${monthStr}-13`);
        }
    }

    dates.push(`${year}-10-31`);
    dates.sort();
    return dates;
}

// Tests
console.log(myersCalendar(2025));
console.log(myersCalendar(2026));
console.log(myersCalendar(2024));
console.log(myersCalendar(100));
console.log(myersCalendar(10000));
console.log(myersCalendar(0));
console.log(myersCalendar(-1));
console.log(myersCalendar(NaN));
