// checking the DoB in input5 is a correct value
//checking for input errors
function checkInputErrors(event) {
  //fix error in THIS function
  event.preventDefault();
  let dayInput = document.querySelector("#day");
  let monthInput = document.querySelector("#month");
  let yearInput = document.querySelector("#year");
  let dayError = document.querySelector("#day-error");
  let monthError = document.querySelector("#month-error");
  let yearError = document.querySelector("#year-error");

  if (dayInput.value > 31) {
    dayError.innerHTML = "Must be a valid day";
  }
  if (monthInput.value > 12) {
    monthError.innerHTML = "Must be a valid month";
  }
  if (yearInput.value > 2023) {
    yearError.innerHTML = "Must be in the past";
  }
}

let button = document.querySelector("#button");
button.addEventListener("click", checkInputErrors);

//(dayInput.value > 31 && monthInput.value > 12) || yearInput.value > 2023;
