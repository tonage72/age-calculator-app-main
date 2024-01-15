const submitButton = document.querySelector('.submit-button');
const displayTest = document.querySelector('.display-test');

submitButton.addEventListener("click", calculate);

function calculate() {

	day = document.getElementById("day").value;
	month = document.getElementById("month").value;
	year = document.getElementById("year").value;

	displayTest.innerHTML = day + month + year;

	submitButton.style.backgroundColor = 'orange';
}