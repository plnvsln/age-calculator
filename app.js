//checking for input errors
function checkInputErrors() {
  let dayInput = Number(document.getElementById("day").value);
  let monthInput = Number(document.getElementById("month").value);
  let yearInput = Number(document.getElementById("year").value);

  const box1 = document.querySelector(".input-box--1");
  const box2 = document.querySelector(".input-box--2");
  const box3 = document.querySelector(".input-box--3");
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
  if (yearInput > 2023 || yearInput < 1) {
    box3.classList.add("show-error");
  } else {
    box3.classList.remove("show-error");
  }
  age();
}
let button = document.getElementById("button");
button.addEventListener("click", checkInputErrors);
//
function age() {
  let dayInput = Number(document.getElementById("day").value);
  let monthInput = Number(document.getElementById("month").value);
  let yearInput = Number(document.getElementById("year").value);

  let today = new Date();

  let currentDate = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (dayInput > currentDate) {
    currentDate = currentDate + months[currentMonth - 1];
    currentMonth = currentMonth - 1;
  }
  if (monthInput > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }
  let dayResult = currentDate - dayInput;
  let monthResult = currentMonth - monthInput;
  let yearResult = currentYear - yearInput;

  document.getElementById("result-month").innerHTML = `${dayResult}`;
  document.getElementById("result-year").innerHTML = `${monthResult}`;
  document.getElementById("result-days").innerHTML = `${yearResult}`;
}
