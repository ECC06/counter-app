const spansList = document.querySelectorAll(".num");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");

let total = 0;
let plusBtnClicked = false;
let minusBtnClicked = false;

populateSpans();

incrementBtn.addEventListener("click", (e) => {
    if (total < 1000) {
        plusBtnClicked = true;
        minusBtnClicked = false;

        total++;

        populateSpans();
    }
});

decrementBtn.addEventListener("click", (e) => {
    if (total > 0) {
        minusBtnClicked = true;
        plusBtnClicked = false;

        total--;

        populateSpans();
    }
});

function populateSpans() {
    const finalOutput = total.toString().padStart("4", 0);
    const finalOutputArr = finalOutput.split(""); //e.g ["0", "0", "0", "1"]

    let index = 0;

    spansList.forEach((span) => {
        span.textContent = finalOutputArr[index];

        if (plusBtnClicked) span.style.color = "green";
        if (minusBtnClicked) span.style.color = "red";

        index++;
    });
}
