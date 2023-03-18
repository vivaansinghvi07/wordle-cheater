// senses for the input changing on the known letters
$(document).on("change keyup paste", ".letter", function() {
    // gets the inputs
    let inputs = document.getElementsByClassName("letter");

    // goes through each and checks if they're empty
    Array.from(inputs).forEach((element) => {

        // makes letter uppercase
        element.value = element.value.toUpperCase();
        
        // initializes color
        let color;
        
        // checks if empty
        if (!element.value) {       
            color = "#ffffff";      // colors it white
        } else {                    
            color = "#26a113";      // colors it green
        }

        // enters color
        element.style.backgroundColor = color;

    });
});

// senses for the input changing on the yellow letters
$(document).on("change keyup paste", ".letters", function() {
    
    // yellow element
    let yellow = document.querySelector("#known-letters");
    let not = document.querySelector("#bad-letters");
    
    // makes elements uppercase
    yellow.value = yellow.value.toUpperCase();
    not.value = not.value.toUpperCase();

    // initializes color
    let color;

    // checks if its empty
    if (!yellow.value) {
        color = "#ffffff";          // color white
    } else {
        color = "#d49f00"
    }

    // sets color
    yellow.style.backgroundColor = color;

});