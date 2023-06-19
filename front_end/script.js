document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("isLoggedIn") == "true") {
    showUserContent();
  } else {
    showUnauthorizedContent();
  }
});

function login() {
  if (localStorage.getItem("isLoggedIn") == "true") {
    localStorage.setItem("isLoggedIn", "false");
    showUnauthorizedContent();
  } else {
    localStorage.setItem("isLoggedIn", "true");
    showUserContent();
  }
}

function showUserContent() {
  let content = document.getElementById("main_content");
  content.innerHTML = `
  <div class="main_card">principal</div>
      <div class="cards">
        <div class="card_item">1</div>
        <div class="card_item">2</div>
      </div>`;
}

function showUnauthorizedContent() {
  let content = document.getElementById("main_content");
  content.innerHTML = `<div><h1>utilizador nao está logado</h1></div>`;
}
