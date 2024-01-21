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
	let passedMonths = 0;
	let passedDays = 0;
	let passedYears = 0;
	let wholeDate = month + "-" + day + "-" + year;
	
	clearErrors();

	let dateValid = dateCheck(month, day, year, wholeDate);
	
	outputYears.innerHTML = "--";
	outputMonths.innerHTML = "--";
	outputDays.innerHTML = "--";	

	if (dateValid) {
		let pastDate = new Date(wholeDate);
		let todayDate = new Date();
		let timeDiff = Math.abs(todayDate.getTime() - pastDate.getTime());
		let differenceInDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
		passedMonths = Math.floor((differenceInDays % 365) / 30);
		passedDays = differenceInDays % 30;
		passedYears = Math.floor(differenceInDays / 365);
		outputNumbers(passedMonths, passedDays, passedYears);
	}

}

function dateCheck(month, day, year, wholeDate) {

	let dateValid = true;
	const timeStamp = Date.parse(wholeDate);

	if (month == (4 || 6 || 9 || 11)) {
		maxDays = 30;
	} else if (month == 2) {
		maxDays = 28;
	} else {
		maxDays = 31;
	}

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

	if (day > maxDays && dateValid == true) {
		errorDate.style.display = "block";
		dateValid = false;
	}

	if (isNaN(timeStamp) && dateValid == true) {
		errorDate.style.display = "block";
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

function clearErrors() {
	errorEmptyDay.style.display = "none";
	errorEmptyMonth.style.display = "none";
	errorEmptyYear.style.display = "none";
	errorDay.style.display = "none";
	errorMonth.style.display = "none";
	errorYear.style.display = "none";
	errorDate.style.display = "none";
}