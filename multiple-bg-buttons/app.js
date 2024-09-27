const randRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};

// console.log(randRGB());

const container = document.querySelector(".container");

for (let i = 0; i < 20; i++) {
  const btn = document.createElement("button");
  btn.innerText = "Click!";
  btn.classList.add("square");

  container.append(btn);
}

const allBtn = document.querySelectorAll("button");

for (let btn of allBtn) {
  btn.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = randRGB();
  // console.log(this);
}

const eventBtn = document.querySelector(".event");
console.log(eventBtn);

const input = document.querySelector("input");
input.addEventListener("keydown", function (e) {
  // console.log('keydown');

  console.log(`Key: ${e.key}`);
  console.log(`Code: ${e.code}`);
});

input.addEventListener("keyup", function () {
  console.log('keyup'); 
});
