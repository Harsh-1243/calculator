let display = document.querySelector(".display input");

let btn = document.querySelectorAll("button");

document.addEventListener("keydown", function (event) {

    let key = event.key;

    keypressed(key);
})


function keypressed(key) {
    // Get the current value of the display
    let currentValue = display.getAttribute("value");

    switch (key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            // Append the pressed key to the current value
            currentValue += key;
            break;

        case "+":
        case "-":
        case "/":
        case "*":
        case ".":
            // Append the operator or dot to the current value
            currentValue += key;
            break;

        case "Enter":
            // Evaluate the expression when Enter is pressed
            currentValue = eval(currentValue);
            break;

        case "Backspace":
            // Remove the last character when Backspace is pressed
            currentValue = currentValue.slice(0, -1);
            break;

        case "Escape":
            // Clear the display when Escape is pressed
            currentValue = "";
            break;

        default:
            // Ignore other keys
            break;
    }

    // Update the display with the new value
    display.setAttribute("value", currentValue);
}