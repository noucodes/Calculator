let allButtons = document.querySelectorAll(".inputs button");
let row1 = document.querySelector(".row1");
let row2 = document.querySelector(".row2");
let row3 = document.querySelector(".row3");
let equal = false

for (let button of allButtons) {
    button.addEventListener("click", function () {
        let buttonText = button.innerText;

        if (buttonText == "AC") {
            row1.innerText = "";
        } else if (buttonText == "DEL") {
            row1.innerText = row1.innerText.slice(0, -1);
        } else if (buttonText === "=") {
            // Evaluate the expression
            try {
                row3.innerText = row2.innerText;
                row2.innerText = row1.innerText;
                row1.innerText = eval(row1.innerText);
                equal = true;
            } catch (e) {
                row1.innerText = "Error";
            }
        } else if (equal) {
            row3.innerText = row2.innerText;
            row2.innerText = row1.innerText;
            row1.innerText = buttonText;
            equal = false;
        } else {
            row1.innerText += buttonText;
        }
    });
}
