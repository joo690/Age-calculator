let dayInput = document.querySelector(".day");
let monthInput = document.querySelector(".month");
let yearInput = document.querySelector(".year");
let button = document.querySelector("button");
let outputs = document.querySelector(".data");

button.addEventListener("click", calculateAge);

function calculateAge() {
  let day = dayInput.value;
  let month = monthInput.value;
  let year = yearInput.value;

  if (day === "" || month === "" || year === "") {
    outputs.innerHTML = "<h2>Please enter all the fields.</h2>";
    return;
  }

  let birthdate = new Date(year, month - 1, day);
  let currentday = new Date();

  if (birthdate > currentday || day > 31 || month > 12) {
    outputs.innerHTML = "<h2>Invalid date of birth.</h2>";
    return;
  }

  let years = currentday.getFullYear() - birthdate.getFullYear();
  let months = currentday.getMonth() - birthdate.getMonth();
  let days = currentday.getDate() - birthdate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months = 12 + months;
  }

  if (days < 0) {
    months--;
    days =
      new Date(currentday.getFullYear(), currentday.getMonth(), 0).getDate() +
      days;
  }

  outputs.innerHTML = `<h2 class="poppins-extrabold-italic">
      <span class="poppins-bold mx-3">${years}</span>Years
    </h2>
    <h2 class="poppins-extrabold-italic">
      <span class="poppins-bold mx-3">${months}</span>Months
    </h2>
    <h2 class="poppins-extrabold-italic">
      <span class="poppins-bold mx-3">${days}</span>Days
    </h2>`;
}
