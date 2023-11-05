// how to save to web storage

// local storage
function saveToLocalStorage() {
  localStorage.setItem("token", "12QWERTY!@#");
  localStorage.setItem("name", "saujal");
  console.log(localStorage);
}

function getFromLocalStorage() {
  const token = localStorage.getItem("token");
  const p = document.createElement("p");
  p.append(`The provided name from local storage is : ${token}`);
  const div = document.getElementById("web-api-local");
  div.appendChild(p);
}

function clearLocalStorage() {
  // localStorage.removeItem("token");
  localStorage.clear();
}

// session storage
function saveToSessionStorage() {
  sessionStorage.setItem("token", "12QWERTY!@#");
  sessionStorage.setItem("name", "saujal");
  console.log(sessionStorage);
}

function getFromSessionStorage() {
  const token = sessionStorage.getItem("token");
  const p = document.createElement("p");
  p.append(`The provided name from local storage is : ${token}`);
  const div = document.getElementById("web-api-session");
  div.appendChild(p);
}

function clearSessionStorage() {
  // localStorage.removeItem("token");
  sessionStorage.clear();
}

function getHistory() {
  console.log(history);
  const length = history.length;
  console.log(length);
}

function goBack() {
  history.back();
  // history.go(-2);
}

function addNewNode() {
  const neode = document.createElement("div");
  neode.style = "border: 2px solid black";
  document.body.appendChild(neode);
  const p = document.createElement("p");
  p.append("This is a newly added paragraph");
  neode.appendChild(p);
}
