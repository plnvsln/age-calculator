//checking for input errors
function checkInputErrors(event) {
  event.preventDefault();

  const box1 = document.querySelector(".input-box--1");
  const box2 = document.querySelector(".input-box--2");
  const box3 = document.querySelector(".input-box--3");

  let dayInput = Number(document.getElementById("day").value);
  let monthInput = Number(document.getElementById("month").value);
  let yearInput = Number(document.getElementById("year").value);

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
}

let button = document.getElementById("button");
button.addEventListener("click", checkInputErrors);
