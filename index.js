const span = document.querySelector(".numbers-cont span");
const incrementBtnList = document.querySelectorAll("#increment-btn");
const decrementBtnList = document.querySelectorAll("#decrement-btn");
const resetBtnList = document.querySelectorAll("#reset-btn");

let total = 0;
let plusBtnClicked = false;
let minusBtnClicked = false;
let resetBtnClicked = false;

displayOutput();
addListenersToAll(incrementBtnList, incrementFunc);
addListenersToAll(decrementBtnList, decrementFunc);
addListenersToAll(resetBtnList, resetFunc);

function incrementFunc() {
	if (total < 1000) {
		plusBtnClicked = true;
		total++;

		displayOutput();
	}
}

function decrementFunc() {
	if (total > 0) {
		minusBtnClicked = true;
		total--;

		displayOutput();
	}
}

function resetFunc() {
	resetBtnClicked = true;
	total = 0;
	displayOutput();
}

function addListenersToAll(list, func) {
	list.forEach((btn) => {
		btn.addEventListener("click", func);
	});
}

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
