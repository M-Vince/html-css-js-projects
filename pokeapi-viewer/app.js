
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const pokeContainer = document.querySelector(".pokemon");
  const baseURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

  for (let i = 1; i <= 50; i++) {
    const card = document.createElement("div");
    const image = document.createElement("img");
    const label = document.createElement("span");

    image.src = `${baseURL}${i}.png`;
    label.innerText = `${i}`;

    card.append(image, label);
    card.classList.add("card");

    pokeContainer.append(card);
  }
}, {once: true});
