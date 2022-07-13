document.addEventListener("DOMContentLoaded", () => {
  fetchMonsters();
  createNewMonster();
});

const url = "http://localhost:3000/monsters";

// FETCH PAGE ONE MONSTERS //
function fetchMonsters() {
  fetch(url + "/?_limit=50&_page=1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderMonsters(data);
    });
}

// GLOBAL VARIABLES //
const createMonsterFormDiv = document.getElementById("create-monster");
const monsterContainer = document.getElementById("monster-container");

// DISPLAY DATA //
function renderData(data) {
  const monsterName = document.createElement("h1");
  const monsterAge = document.createElement("h4");
  const monsterDescription = document.createElement("p");

  monsterName.textContent = data.name;
  monsterAge.textContent = data.age;
  monsterDescription.textContent = data.description;

  monsterContainer.appendChild(monsterName);
  monsterContainer.append(monsterAge);
  monsterContainer.append(monsterDescription);
}

// RENDER MONSTERS //
function renderMonsters(data) {
  data.forEach((item) => {
    renderData(item);
  });
}

// PAGE FORWARD //
const pageForward = document.getElementById("forward");

pageForward.addEventListener("click", () => {
  fetch(url + "/?_limit=50&_page=2")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderMonsters(data);
      renderData(data);
    });
});

// PAGE BACKWARD //
const pageBack = document.getElementById("back");

pageBack.addEventListener("click", () => {
  fetch(url + "/?_limit=50&_page=1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderMonsters(data);
      renderData(data);
    });
});

// POST NEW MONSTER //

function createNewMonster() {
  const newMonsterForm = document.createElement("form");
newMonsterForm.addEventListener('submit', console.log('submitted'))

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.className = "name";
  nameInput.placeholder = 'enter name'

  const ageInput = document.createElement("input");
  ageInput.type = "text";
  ageInput.className = "age";
  ageInput.placeholder = 'enter age'

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.className = "description";
  descriptionInput.placeholder = 'enter description'

  const submitButton = document.createElement('input')
  submitButton.type = 'submit'
  submitButton.className = 'submit-button'

  createMonsterFormDiv.appendChild(newMonsterForm)
  newMonsterForm.appendChild(nameInput);
  newMonsterForm.appendChild(ageInput);
  newMonsterForm.appendChild(descriptionInput);
  newMonsterForm.appendChild(submitButton)
}

// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
//   body: {
//     name: "name",
//     age: "age",
//     description: "description",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     createNewMonster(data);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });
