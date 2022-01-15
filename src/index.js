import "./css/index.css";

const loginForm = document.querySelector("#login-form");
const userName = document.querySelector("#username");
const title = document.querySelector("#title");
const wrapTitle = document.querySelector("#wrap-title");
const resetBtn = document.querySelector("#reset-btn");

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
  console.log("hideTitle");
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
