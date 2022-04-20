// We have two different levels of training "Kezdő" - "Haladó" the applications will handled on backend.
async function applyToTrainingStarter(container) {
  var card = document.getElementById(container);
  $(card).fadeOut(1000);
  await sleep(1000);
  createRegisterForm("Kezdő");
}

async function applyToTrainingAdvanced(container) {
  var card = document.getElementById(container);
  $(card).fadeOut(1000);
  await sleep(1000);
  createRegisterForm("Haladó");
}

// Changing html.main to register form
async function createRegisterForm() {
  $("main").load("form.html main");
  await sleep(100);
}

// Changing html.main to register form
async function createDeclineForm(container) {
  var card = document.getElementById(container);
  $(card).fadeOut(1000);
  await sleep(1000);
  $("main").load("discardform.html main");
}

// Returns the user to the main.html - renders its to html.main
async function returnMainSite() {
  var card = document.querySelector("main");
  $(card).fadeOut(1000);
  await sleep(1000);
  $("main").load("index.html main");
  $(card).fadeIn(1000);
}

async function discardEntry() {
  checkDiscard();
}

// Check is the application is valid,if it is it will be handled on backend.
function checkEntry() {
  var name = document.getElementById("nameEntry").value;
  var email = document.getElementById("emailEntry").value;
  var neptun = document.getElementById("neptunEntry").value;
  var validity = document.getElementById("validityEntry").checked;
  if (
    checkName(name) == true &&
    checkEmail(email) == true &&
    checkNeptun(neptun) == true &&
    checkValidity(validity) == true
  ) {
    alert("Sikeres jelentkezés!");
  }
}

// Check is the unapplication is valid,if it is it will be handled on backend.
function checkDiscard() {
  var email = document.getElementById("emailEntry").value;
  var neptun = document.getElementById("neptunEntry").value;
  if (checkEmail(email) == true && checkNeptun(neptun) == true) {
    alert("Sikeres lejelentkezés!");
  }
}

// Validating user's credentials - Name,Email,Neptun,Validity
function checkName(name) {
  if (name != "Név" && name.length > 5) {
    return true;
  } else {
    alert("Kérlek irj be egy megfelelő nevet!");
    return false;
  }
}

function checkEmail(email) {
  if (email.length > 8 && email.includes("@")) {
    return true;
  } else {
    alert("Kérlek adj meg egy megfelelő email cimet!");
    return false;
  }
}

function checkNeptun(neptun) {
  if (neptun.length == 6) {
    return true;
  } else {
    alert("Kérlek adj meg egy érvényes neptun kódot!");
    return false;
  }
}

function checkValidity(validity) {
  if (validity == true) {
    return true;
  } else {
    alert("Kérlek fogadd el a szabályzatot!");
    return false;
  }
}

// Sleep function for syncing effect FadeOut- FadeIn effects.
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Modal Functions for aplied students.
function openModal() {
  var Modal = document.querySelector("#modal-js-example");
  Modal.classList.add("is-active");
}

function closeModal() {
  var Modal = document.querySelector("#modal-js-example");
  Modal.classList.remove("is-active");
}
