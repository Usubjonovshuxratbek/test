const elInp1 = document.querySelector(".inp1");
const elInp2 = document.querySelector(".inp2");
const elList = document.querySelector(".list");
const elBtn = document.querySelector(".btn");
let val = [];

elBtn.addEventListener("click", () => {
  val.push(elInp1.value);
  let newLi = document.createElement("li");
  window.localStorage.setItem("O'quvchi", elInp1.value);
  elList.appendChild(newLi)
});

newLi.textContent = window.localStorage.getItem("O'quvchi")