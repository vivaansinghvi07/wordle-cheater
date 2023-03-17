// senses for the input changing
$(document).on("change keyup paste", ".letter", function() {
    // gets the inputs
    let inputs = document.getElementsByClassName("letter");

    // goes through each and checks if they're empty
    Array.from(inputs).forEach((element) => {

        // makes letter uppercase
        element.value = element.value.toUpperCase();
        
        // initializes color
        let color;
        
        if (!element.value) {       // checks for an empty letter
            color = "#ffffff";
        } else {                    // if not empty make it filled green
            color = "#26a113";
        }

        // enters color
        element.style.backgroundColor = color;

    });
});