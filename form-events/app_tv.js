const form = document.querySelector(".form-tv");
const ul = document.querySelector(".list");

const getTVShows = async (searchTerm) => {
  try {
    // console.log(`https://api.tvmaze.com/search/shows?q=${a}`);
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${a}`);

    // OR

    // const config = { params: {q: searchTerm}};
    // const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    // const data = res.data;
    // return data;

    // const config = { params: {q: searchTerm}};
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error("Oops! Something is wrong!");
  }
};

const resultSearch = async (search) => {
  const result = await getTVShows(search);
  //   console.log(result[0].show.name);
  if (ul) {
    ul.innerText = "";
  }
  // console.log(ul.childNodes);

  for (let item of result) {
    // const li = document.createElement("LI");
    // li.innerText = item.show.name;
    // ul.append(li);
    console.log(item.show.name);

    try {
      //   console.log(item.show.image.medium);
      // console.log(item.show.name);
      const li = document.createElement("LI");
      const img = document.createElement("img");
      const h3 = document.createElement('h3');
      img.src = item.show.image.medium;
      h3.textContent = item.show.name;
      li.classList.add('card');
      li.append(img);
      li.append(h3);
      ul.append(li);
      //   console.log(item.show.name);
    } catch (e) {
      // throw new Error('404: Not Found!');
      console.log("404: Not Found!");
      const li = document.createElement("LI");
      li.innerText = "404: Not Found!";
      li.classList.add('card');
      ul.append(li);
    }

    // or use if statement
    // if(item.show.image.medium) // checks if its null or has value
    // {

    // }
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const search = e.target.elements.query.value;
  console.log("query=", search);

  resultSearch(search);
  //   const result = getTVShows(search);
  //   console.log(result);

  //   console.dir(e.target.elements.query.value)
  //   console.dir(e.target[0].value);
  //   console.log(e);
});
