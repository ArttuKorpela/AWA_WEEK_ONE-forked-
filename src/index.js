//import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  for (let i = 0; i < 5; i++) {
    appendChild();
  }
}

function createElement() {
  let wikiItem = document.createElement("div");

  wikiItem.innerHTML = `
    <h1 class="wiki-header">Breed X</h1>
    <div class="wiki-content">
      <p class="wiki-text">
        Some text about this breed.
      </p>
      <div class="img-container">
        <img class="wiki-img" src="">
      </div>
    </div>
  `;

  wikiItem.className = "wiki-item";
  return wikiItem;
}

function appendChild() {
  let item = createElement();

  const tBody = document.getElementById("app");

  tBody.append(item);
}
