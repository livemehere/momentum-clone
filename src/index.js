import "./css/index.scss";

const loginForm = document.querySelector("#login-form");
const userName = document.querySelector("#username");
const title = document.querySelector("#title");
const wrapTitle = document.querySelector("#wrap-title");
const resetBtn = document.querySelector("#reset-btn");

const todos = document.querySelector(".todos");
const addForm = document.querySelector(".add-form");
const text = document.getElementById("new-input");

let todoArray = [];

init();

function init() {
  if (checkUserName()) {
    //유저가 이미 있는경우
    hideForm();
    showTitle(localStorage.getItem("name"));
  } else {
    //처음 방문일 경우
    showForm();
    hideTitle();
  }
  localStorage.setItem("todos", JSON.stringify([]));
  loadTodosFromLocalStorage();
  updateDisplay();
  getWeather();
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("name", userName.value);
  userName.value = "";
  showTitle(localStorage.getItem("name"));
  hideForm();
});

resetBtn.addEventListener("click", () => {
  removeUserNameFromLocalStorage();
  hideTitle();
  showForm();
});

function showForm() {
  loginForm.style.display = "block";
}

function hideForm() {
  loginForm.style.display = "none";
}
function hideTitle() {
  wrapTitle.style.display = "none";
}
function showTitle(name) {
  wrapTitle.style.display = "flex";
  title.innerHTML = `Welcome ${name}`;
}

function checkUserName() {
  const name = localStorage.getItem("name");
  if (name) return true;
  return false;
}

function removeUserNameFromLocalStorage() {
  localStorage.removeItem("name");
}

function addTodo(text) {
  const obj = {
    id: Date.now(),
    text: text,
  };
  todoArray.push(obj);
}

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo(text.value);
  text.value = "";
  updateLocalStorage(todoArray);
  loadTodosFromLocalStorage();
  updateDisplay();
});

function updateLocalStorage(arr) {
  localStorage.setItem("todos", JSON.stringify(arr));
}

function loadTodosFromLocalStorage() {
  const LStodos = localStorage.getItem("todos");
  todoArray = [...JSON.parse(LStodos)];
}

function updateDisplay() {
  todos.innerHTML = "";
  todoArray.forEach((todo) => {
    let li = document.createElement("li");

    let template = `
    <li class="todo" id="${todo.id}">
        <span>${todo.text}</span>
        <button ><i class="fas fa-trash" id="remove-btn"></i></button>
    </li>
    `;
    li.innerHTML = template;
    todos.appendChild(li);
    li.scrollIntoView();
  });
}

todos.addEventListener("click", (e) => {
  const id = e.target.parentNode.parentNode.id;
  if (e.target.id == "remove-btn") {
    todoArray = todoArray.filter((todo) => todo.id != id);
    updateLocalStorage(todoArray);
    loadTodosFromLocalStorage();
    updateDisplay();
  }
});

function getWeather() {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const api = "979787d17ff36d6639902212e1d6ffe4";

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`
    )
      .then((data) => data.json())
      .then((data) => {
        const location = document.getElementById("location");
        const temp = document.getElementById("temp");

        location.innerHTML = data.main.temp;
        temp.innerHTML = data.name;
      });
  });
}
