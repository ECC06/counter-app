const span = document.querySelector(".numbers-cont span");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.querySelector(".reset-btn");

let total = 0;
let plusBtnClicked = false;
let minusBtnClicked = false;
let resetBtnClicked = false;

displayOutput();

incrementBtn.addEventListener("click", (e) => {
    if (total < 1000) {
        plusBtnClicked = true;
        total++;

        displayOutput();
    }
});

decrementBtn.addEventListener("click", (e) => {
    if (total > 0) {
        minusBtnClicked = true;
        total--;

        displayOutput();
    }
});

resetBtn.addEventListener("click", (e) => {
    resetBtnClicked = true;

    total = 0;
    displayOutput();
});

function displayOutput() {
    const finalOutput = total.toString().padStart("4", 0);
    span.textContent = finalOutput;

    if (plusBtnClicked) span.style.color = "var(--lime-green)";
    if (minusBtnClicked) span.style.color = "red";
    if (resetBtnClicked) span.style.color = "white";

    minusBtnClicked = false;
    plusBtnClicked = false;
    resetBtnClicked = false;
}
