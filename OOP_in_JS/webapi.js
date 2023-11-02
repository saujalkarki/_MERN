// how to save to web storage
console.clear();

function saveToStorage() {
  localStorage.setItem("token", "123QWERTY!@#");
  localStorage.setItem("user", "John Doe");
}

function getFromStorage() {
  const token = localStorage.getItem("token");
  const p = document.createElement("p");
  p.append(`Token is ${token}`);
  const div = document.getElementById("web-api");
  div.appendChild(p);
}

function clearStorage() {
  localStorage.clear();
}

function getHistory() {
  const length = history.length;
  console.log(length);
}

function goBack() {
  history.back;
}
