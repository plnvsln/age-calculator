// checking the DoB in input5 is a correct value
//checking for input errors
function checkInputErrors(event) {
  //fix error in THIS function
  event.preventDefault();
  const box1 = document.querySelector(".input-box--1");
  const box2 = document.querySelector(".input-box--2");
  const box3 = document.querySelector(".input-box--3");

  let dayInput = Number(document.getElementById("day").value);
  let monthInput = Number(document.getElementById("month").value);
  let yearInput = Number(document.getElementById("year").value);
  console.log(box1, box2, box3);
  console.log(dayInput);
  // console.log(dayInput, monthInput, yearInput)
  // console.log(Number(dayInput), typeof Number(dayInput))

  // let dayError = document.getElementById("day-error")
  // let monthError = document.getElementById("month-error")
  // let yearError = document.getElementById("year-error")
  if (dayInput > 31 || dayInput < 1) {
    box1.classList.add("show-error");
  } else {
    box1.classList.remove("show-error");
  }

  if (monthInput > 12 || monthInput < 1) {
    box2.classList.add("show-error");
  } else {
    box2.classList.remove("show-error");
  }
  if (yearInput < 1 || yearInput > 2023) {
    box3.classList.add("show-error");
  } else {
    box3.classList.remove("show-error");
  }
}

let button = document.getElementById("btn");
button.addEventListener("click", checkInputErrors);

//(dayInput.value > 31 && monthInput.value > 12) || yearInput.value > 2023;
