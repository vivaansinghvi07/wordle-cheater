function solve() {

    // initializes answers
    let answers;

    // gets the possible words
    fetch("answers.txt")
    .then(response => response.text())
    .then(data => {

        // copies the data onto the dataset variable
        answers = Array.from(data.split(/[\s\n]+/));

        // gets the possibilities
        let possibilities = getGuesses(answers);

        // prints the possibilities on the page
        printPossiblities(possibilities);
      
    })
    .catch(error => console.error(error)); 

}

function getGuesses(answers) {
    // gets the known letters
    let knownElements = document.getElementsByClassName("letter");

    // initializes array
    let knownLetters = new Array();

    // goes through each HTML element in the known
    Array.from(knownElements).forEach((element) => {
        
        // checks if blank
        if (!element.value) {
            knownLetters.push("");                              // add a space
        } else {
            knownLetters.push(element.value.toLowerCase());     // add the letter in lowercase
        }

    });

    // gets letters that are in and out
    let inLetters = document.getElementById("known-letters").value.toLowerCase().split("");
    let outLetters = document.getElementById("bad-letters").value.toLowerCase().split("");

    // calculates the possible words
    let possibilities = new Array();

    // goes through each possibility
    answers.forEach((possibility) => {
        
        // makes the word an array
        let word = possibility.split("");

        // boolean for quitting
        let quit = false;

        // checks if its illegal
        word.forEach((letter, index) => {
            // checks if the letter at the spot that is known is illegal
            if (knownLetters[index] != "" && letter != knownLetters[index]) {
                quit = true;
            }
            
            // checks if the letter is in the banend letters
            else if (outLetters.includes(letter)) {
                quit = true;
            }
        });

        // checks if the letters are in the word
        inLetters.forEach((letter) => {
            if (!word.includes(letter)) {
                quit = true;
            }
        })

        // returns if need to quit 
        if (quit) {
            return;
        }

        // adds to the possible words
        possibilities.push(possibility);
    });

    // returns array of possible guesses
    return possibilities;
}

function printPossiblities(possiblities) {
    // hides the input
    document.getElementById("input").setAttribute("hidden", "hidden");

    // shows the output
    document.getElementById("output").removeAttribute("hidden");

    // place for text to go
    let results = document.getElementById("results");

    // prints message depending on size
    if (possiblities.length === 0) {
        results.innerHTML = "No answers found!";
    } else {
        results.innerHTML = "Your possible answers: <br><br>";
    }

    // prints the output
    possiblities.forEach((word) => {
        results.innerHTML += word.toUpperCase() + "<br>";
    });

}