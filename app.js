const titleEl = document.querySelector(".title");
const btnEl = document.querySelector(".btn");
const audioEl = document.querySelector(".audio");
const toggleDarkModeBtn = document.querySelector("#toggle-dark-mode");
const addNumberBtn = document.querySelector("#add-number-btn");
const viewNumbersBtn = document.querySelector("#view-numbers-btn");
const successMessageEl = document.querySelector("#success-message");
const addNumberModal = document.querySelector("#add-number-modal");
const viewNumbersModal = document.querySelector("#view-numbers-modal");
const saveNumberBtn = document.querySelector("#save-number");
const closeAddModalBtn = document.querySelector("#close-add-modal");
const closeViewModalBtn = document.querySelector("#close-view-modal");
const phoneListEl = document.querySelector("#phone-list");
const newNumberInput = document.querySelector("#new-number");

const TEL = ["+998 90 999 77 81", "+998 99 190 84 50", "+998 90 007 70 77"];

function randomTel() {
  btnEl.setAttribute("disabled", true);
  const interval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * TEL.length);
    titleEl.textContent = TEL[randomNumber];
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    btnEl.removeAttribute("disabled");
    TEL.splice(TEL.indexOf(titleEl.textContent), 1);
    audioEl.play();
  }, 3000);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function showSuccessMessage() {
  successMessageEl.style.display = "block";
  setTimeout(() => {
    successMessageEl.style.display = "none";
  }, 2000);
}

function showAddNumberModal() {
  addNumberModal.style.display = "flex";
}

function closeAddNumberModal() {
  addNumberModal.style.display = "none";
}

function addNewNumber() {
  const newNumber = newNumberInput.value.trim();
  if (newNumber) {
    TEL.push(newNumber);
    showSuccessMessage();
    closeAddNumberModal();
  }
}

function showViewNumbersModal() {
  viewNumbersModal.style.display = "flex";
  phoneListEl.innerHTML = TEL.map((number) => `<li>${number}</li>`).join("");
}

function closeViewNumbersModal() {
  viewNumbersModal.style.display = "none";
}

btnEl.addEventListener("click", randomTel);
toggleDarkModeBtn.addEventListener("click", toggleDarkMode);
addNumberBtn.addEventListener("click", showAddNumberModal);
closeAddModalBtn.addEventListener("click", closeAddNumberModal);
saveNumberBtn.addEventListener("click", addNewNumber);
viewNumbersBtn.addEventListener("click", showViewNumbersModal);
closeViewModalBtn.addEventListener("click", closeViewNumbersModal);
