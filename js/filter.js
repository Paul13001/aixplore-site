// Filtres : affiche seulement les éléments de la catégorie choisie
// (pages Soirées, Sports, Bons plans et Liens utiles)

let buttons = document.querySelectorAll(".filter-button"); // les boutons de filtre
let items = document.querySelectorAll("[data-category]"); // les éléments à filtrer

// montre les éléments de la catégorie, cache les autres
function filterItems(category) {
  for (let i = 0; i < items.length; i++) {
    if (category === "all" || items[i].getAttribute("data-category") === category) {
      items[i].style.display = ""; // on montre
    } else {
      items[i].style.display = "none"; // on cache
    }
  }
}

// quand on clique sur un bouton
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // on enlève "active" de tous les boutons
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }
    // on met "active" sur le bouton cliqué
    buttons[i].classList.add("active");
    // on filtre avec la catégorie du bouton
    filterItems(buttons[i].getAttribute("data-filter"));
  });
}
