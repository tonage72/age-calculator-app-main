const submitButton = document.querySelector('.submit-button');
const displayTest = document.querySelector('.display-test');
const errorEmptyDay = document.querySelector('.error-empty-day');
const errorEmptyMonth = document.querySelector('.error-empty-month');
const errorEmptyYear = document.querySelector('.error-empty-year');
const errorMonth = document.querySelector('.error-month');
const errorDay = document.querySelector('.error-day');
const errorYear = document.querySelector('.error-year');
const errorDate = document.querySelector('.error-date');
const outputMonths = document.querySelector('.output-months')
const outputDays = document.querySelector('.output-days')
const outputYears = document.querySelector('.output-years')

submitButton.addEventListener("click", calculate);

function calculate() {

	const month = document.getElementById("month").value;
	const day = document.getElementById("day").value;
	const year = document.getElementById("year").value;

	const wholeDate = month+day+year;

	errorEmptyDay.style.display = "none";
	errorEmptyMonth.style.display = "none";
	errorEmptyYear.style.display = "none";
	errorDay.style.display = "none";
	errorMonth.style.display = "none";
	errorYear.style.display = "none";
	errorDate.style.display = "none"

	if (!month || !day || !year) {
		if (!month) {
			errorEmptyMonth.style.display = "block";
		}
		if (!day) {
			errorEmptyDay.style.display = "block";
		}
		if (!year) {
			errorEmptyYear.style.display = "block";
		}
	} else {
		outputYears.innerHTML = year;
		outputMonths.innerHTML = month;
		outputDays.innerHTML = day;
	}
}