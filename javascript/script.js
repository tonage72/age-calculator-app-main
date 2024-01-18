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

	errorEmptyDay.style.display = "none";
	errorEmptyMonth.style.display = "none";
	errorEmptyYear.style.display = "none";
	errorDay.style.display = "none";
	errorMonth.style.display = "none";
	errorYear.style.display = "none";
	errorDate.style.display = "none";

	let dateValid = dateCheck(month, day, year);

	if (dateValid) {
		outputNumbers(month, day, year);
	}

}

function dateCheck(month, day, year) {

	let dateValid = true;

	if (!month) {
		errorEmptyMonth.style.display = "block";
		dateValid = false;
	} else if (month < 1 || month > 12) {
	errorMonth.style.display = "block";
		dateValid = false;
	}

	if (!day) {
		errorEmptyDay.style.display = "block";
		dateValid = false;
	} else if (day < 1 || day > 31) {
		errorDay.style.display = "block";
		dateValid = false;
	}

	if (!year) {
		errorEmptyYear.style.display = "block";
		dateValid = false;
	} else if (year < 1800 || year > 2024) {
		errorYear.style.display = "block";
		dateValid = false;
	}

	if (dateValid) {
		return true;
	} else
		return false;
}

function outputNumbers(month,day,year) {
	outputYears.innerHTML = year;
	outputMonths.innerHTML = month;
	outputDays.innerHTML = day;
}