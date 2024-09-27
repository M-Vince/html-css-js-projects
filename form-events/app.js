const form = document.querySelector("#formText");
const input = document.querySelector("#inputText");
const ul = document.querySelector("ul");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input.value === "") {
    alert("Enter name");
    return;
  }

  const li = document.createElement("li");
  li.innerText = input.value;
  ul.append(li);
  input.value = "";
  //   console.log("It works?");
});

const body = document.querySelector("body");

// setTimeout(() => {
//   body.style.backgroundColor = 'teal';
//   setTimeout(() => {
//     body.style.backgroundColor = 'orange';
//     setTimeout(() => {
//       body.style.backgroundColor = 'darkblue';
//       setTimeout(() => {
//         body.style.backgroundColor = 'burlywood';
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay);
// };

// delayedColorChange('teal', 1000, () => {
//   delayedColorChange('orange', 1000, () => {
//     delayedColorChange('darkblue', 1000, () => {
//       delayedColorChange('burlywood', 1000, () => {

//       });
//     });
//   });
// });

const delayedColorChange = (newColor, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      body.style.backgroundColor = newColor;
      resolve();
    }, delay);
  });
};

// delayedColorChange("darkred", 1000)
//   .then(() => {
//     return delayedColorChange("orange", 1000);
//   })
//   .then(() => {
//     return delayedColorChange("teal", 1000);
//   });

// Promise

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.floor(Math.random() * 100) + 1;
//     setTimeout(() => {
//       console.log(rand)
//       if (rand <= 70) {
//         resolve(`Here's your url ` + url);
//       } else {
//         reject("Rejection denied!");
//       }
//     }, 1000);
//   });
// };

// fakeRequest("/hello/word.txt")
//   .then((d) => {
//     console.log("URL resolved!");
//     console.log(d);
//     return fakeRequest("my/whole/foods.exe");
//   })
//   .then((d) => {
//     console.log("Second URL resolved!");
//     console.log(d);
//     // fakeRequest("my/whole/foods.exe");
//   })
//   .catch((d) => {
//     console.log("Failed!");
//     console.log(d);
//   });

// Async

// const aTest = async () => {
//   return '\nAsync Data return resolved!';
//   // throw new Error("Oh no!!");
// };

// aTest().then((data) => {
//   console.log("Data received:", data);
// });

// Login Form Using Async
// Testing only. Not optimal code!

// const login = async (username, password) => {
// if (!username || !password) {
//   throw new Error("Missing value, try again");
// } else if (username === "user" && password === "pass") {
//   return "Access granted!!";
// } else {
//   throw new Error("Invalid username or password");
//   // throw "Error invalid username or password";
// }
// };

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginForm = document.querySelector("#login");
const h1Access = document.querySelector(".login-access");

// OR ===> const login = async (username, password) {...}
async function login(username, password) {
  if (!username || !password) {
    throw new Error("Missing value, try again");
    // console.log("Missing value, try again");
  } else if (username === "user" && password === "pass") {
    return "Access granted!!";
  } else {
    throw new Error("Invalid username or password");
    // throw "Error invalid username or password";
  }
}

async function request() {
  try {
    let data = await login(username.value, password.value);
    h1Access.innerText = "Login Complete!";
    console.log("STATUS COMPLETE: ", data);
  } catch (e) {
    // console.log('Here is the error: ', e);
    h1Access.innerText = "";
    throw new Error(e);
  }
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // login(username.value, password.value)
  //   .then((data) => {
  //     h1Access.innerText = "Login Complete!";
  //     console.log("STATUS COMPLETE: ", data);
  //   })
  //   .catch((data) => {
  //     console.log(data);
  //     h1Access.innerText = "";
  //   });

  request();
});

// Delayed Color Change using Await

async function rainbow() {
  await delayedColorChange("teal", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("burlywood", 1000);
}

// Using APIs: Fetch API

// fetch("https://swapi.dev/api/people/1")
//   .then((data) => {
//     console.log("Fetch API worked!");
//     console.log(data);
//   })
//   .catch(() => {
//     console.log("API fetch failed!");
//   });

// const btnAPI = document.querySelector('.sw');
const divSW = document.querySelector(".star-wars");
const swName = document.querySelector(".name");
const gender = document.querySelector(".gender");
const eyeColor = document.querySelector(".eye-color");

divSW.addEventListener("click", (e) => {
  e.stopPropagation();

  // console.log(e.target); // <button class="sw"> Click me to get API working! </button>
  console.log(e);
  // console.log(e.target.classList.value === 'sw');

  if (e.target.classList.value === "sw") {
    loadStarWarsPeople();
  }

  // fetch(`https://swapi.dev/api/people/1`)
  //     .then((res) => {
  //       console.log("Fetch API worked!");
  //       return res.json();

  //     })
  //     .then((data) => {
  //       console.log(data);
  //       swName.innerText = `Name: ${data.name}`;
  //       gender.innerText = `Gender: ${data.gender}`;
  //       eyeColor.innerText = `Eye Color: ${data.eye_color}`;
  //     })
  //     .catch(() => {
  //       console.log("API fetch failed!");
  //       swName.innerText = `Name:`;
  //       gender.innerText = `Gender:`;
  //       eyeColor.innerText = `Eye Color:`;

  //     });
});

// Fetch API using async and await

const loadStarWarsPeople = async () => {
  try {
    // reject('not working!');
    const res = await fetch(`https://swapi.dev/api/people/10`);
    console.log("Fetch API worked!");
    const data = await res.json(); // Read res and turn into Javascript object;

    console.log(data);
    swName.innerText = `Name: ${data.name}`;
    gender.innerText = `Gender: ${data.gender}`;
    eyeColor.innerText = `Eye Color: ${data.eye_color}`;
  } catch (e) {
    // console.log('Error: ====> e: ', e);
    // console.log("API fetch failed!");
    swName.innerText = `Name:`;
    gender.innerText = `Gender:`;
    eyeColor.innerText = `Eye Color:`;
    throw Error(e);
  }
};

// Using AXIOS instead of Fetch API

// const loadStarWarsPeople = async () => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/1`);
//     let data = res.data;
//     console.log(data);
//     swName.innerText = `Name: ${data.name}`;
//     gender.innerText = `Gender: ${data.gender}`;
//     eyeColor.innerText = `Eye Color: ${data.eye_color}`;
//   } catch (e) {
//     console.log(e);
//   }
// };

const joke = document.querySelector(".dad-jokes");
const btnJoke = document.querySelector(".joke");
const ulJoke = document.querySelector(".content");

const generateJokes = async () => {
  try {
    const config = { headers: { Accept: `application/json` } };
    const res = await axios.get(`https://icanhazdadjoke.com/`, config);
    let data = res.data;
    console.log(data.joke);
    return data.joke;
  } catch (e) {
    console.log("Sorry theres nothing! ");
  }
};

const addJokesLi = async () => {
  const joke = await generateJokes();
  const li = document.createElement("li");
  li.innerText = joke;
  ulJoke.append(li);
};

btnJoke.addEventListener("click", () => {
  console.log("Joke incoming...");
  addJokesLi();
});

// Remove list item (li) from ul

ulJoke.addEventListener("click", (e) => {
  if (e.target.nodeName === "LI") {
    console.log(e);
    // e.target.innerText = "";
    ulJoke.removeChild(e.target);
    // e.target.remove();
    // ulJoke.remove(e.target); 
  }
});
