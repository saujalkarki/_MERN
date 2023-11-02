function addPTag() {
  const div = document.getElementById("div");
  const p = document.createElement("p");
  p.id = "addedP";
  p.append("This is appended p tag");
  div.appendChild(p);
}

function removeExistingPTag() {
  const div = document.getElementById("div");
  const p = document.getElementById("paragraph");
  div.removeChild(p);
}

function removeAddedPTag() {
  const div = document.getElementById("div");
  const p = document.getElementById("addedP");
  div.removeChild(p);
}

function replaceExistingPTag() {
  const div = document.getElementById("div");
  const p = document.getElementById("paragraph");
  const span = document.createElement("span");
  span.id = "addedP";
  span.append("This is a new span");
  div.replaceChild(span, p);
}

function replaceAddedPTag() {
  const div = document.getElementById("div");
  const p = document.getElementById("addedP");
  const span = document.createElement("span");
  span.id = "addedP";
  span.append("This is a new span");
  div.replaceChild(span, p);
}
