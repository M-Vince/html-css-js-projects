const rgbH2 = document.querySelector(".rgb");
const changeBtn = document.querySelector("button");
const body = document.querySelector("body");
const recentContainer = document.querySelector(".recent");
const h2Insertion = recentContainer.querySelector("h2");

function randRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  rgbH2.innerText = `rgb(${r},${g},${b})`;
  body.style.backgroundColor = `rgb(${r},${g},${b})`;

  historyRGB(r, g, b);
}

function historyRGB(r, g, b) {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");

  h2.innerText = `rgb(${r},${g},${b})`;
  div.style.backgroundColor = `rgb(${r},${g},${b})`;
  div.classList.add("bg");

  div.append(h2);

  h2Insertion.insertAdjacentElement("afterend", div);
  // h2Insertion.append(div)
  // recentContainer.insertAdjacentElement('afterbegin', div)
  // recentContainer.prepend(div)
}

changeBtn.addEventListener("click", randRGB);
