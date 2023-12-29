let checkbox = document.getElementById("checkbox");
let body = document.querySelector("body");

checkbox.addEventListener("change", () => {
  body.classList.toggle("body__dark");
});
