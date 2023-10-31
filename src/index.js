//import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  let doglist = ["hound", "corgi", "beagle", "bulldog", "akita"];

  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  doglist.forEach((element) => {
    appendChild(element);
  });
}

async function createElement(breed) {
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

  let imgElement = wikiItem.querySelector(".wiki-img");
  imgElement.src = await getDogImage(breed);
  return wikiItem;
}

async function appendChild(breed) {
  let item = await createElement(breed);

  const tBody = document.getElementById("app");

  tBody.append(item);
}

async function getDogImage(breed) {
  const url = "https://dog.ceo/api/breed/" + breed + "/images/random";
  const response = await fetch(url);
  const dogpicsJson = await response.json();

  return dogpicsJson.message;
}
