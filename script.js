let checkbox = document.getElementById("checkbox");
let body = document.querySelector("body");

function themeSetup() {
  if (checkbox.checked) {
    body.classList.add("body__dark");
  } else {
    body.classList.remove("body__dark");
  }
}

themeSetup();

checkbox.addEventListener("change", themeSetup);
