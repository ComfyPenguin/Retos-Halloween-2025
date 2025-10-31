function translatePossessed (message: string): string{
    if (message.trim() === "") {
        return "";
    }
    
    let words: string[] = message.split(" ");
    let organizedLetters: string[] = [];

    words.forEach(element => {
        let disorganizedLetters: string[] = element.split("");
        let word = disorganizedLetters.reverse().join("");
        organizedLetters.push(word);
    });
    
    let translation: string = organizedLetters.join(" ");
    return translation
};