// senses for the input changing on the known letters
$(document).on("change keyup paste", ".letter", function() {
    // gets the inputs
    let inputs = document.getElementsByClassName("letter");

    // goes through each and checks if they're empty
    Array.from(inputs).forEach((element) => {

        // makes letter uppercase and makes alphabetic
        element.value = element.value.toUpperCase().replace(/[^A-Z]/gi, "");
        
        // initializes color
        let BGcolor, color;
        
        // checks if empty
        if (!element.value) {       
            BGcolor = "#ffffff";        // colors background white
            color = "#000000";          // colors text black
        } else {                    
            BGcolor = "#26a113";        // colors background green
            color = "#ffffff";          // colors text white
        }

        // enters color
        element.style.backgroundColor = BGcolor;
        element.style.color = color;

    });
});

// senses for the input changing on the yellow letters
$(document).on("change keyup paste", ".letters", function() {
    
    // yellow element
    let yellow = document.querySelector("#known-letters");
    let not = document.querySelector("#bad-letters");
    
    // makes elements uppercase and removes non alpha characters
    yellow.value = yellow.value.toUpperCase().replace(/[^A-Z]/gi, "");
    not.value = not.value.toUpperCase().replace(/[^A-Z]/gi, "");

    // initializes color
    let BGcolor, color;

    // checks if its empty
    if (!yellow.value) {
        BGcolor = "#ffffff";            // color background white
        color = "#000000";              // color text black
    } else {
        BGcolor = "#d49f00";            // color background yellow
        color = "#ffffff";               // color text white
    }

    // sets color
    yellow.style.backgroundColor = BGcolor;
    yellow.style.color = color;

});