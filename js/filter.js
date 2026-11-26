// filtres des pages Soirées, Sports, Bons plans et Liens utiles

let buttons = document.querySelectorAll(".filter-button");
let items = document.querySelectorAll("[data-category]");

// affiche seulement la catégorie choisie
function filterItems(category) {
  for (let i = 0; i < items.length; i++) {
    if (category === "all" || items[i].getAttribute("data-category") === category) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // le bouton cliqué devient actif
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }
    buttons[i].classList.add("active");

    filterItems(buttons[i].getAttribute("data-filter"));
  });
}
