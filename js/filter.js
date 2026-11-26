// Script des filtres (pages Soirées, Sports, Bons plans et Liens utiles) : affiche seulement les éléments de la catégorie choisie

const filterButtons = document.querySelectorAll(".filter-button"); // Récupère tous les boutons de filtre
const filterableItems = document.querySelectorAll("[data-category]"); // Récupère tous les éléments filtrables (ceux qui ont un attribut data-category)

// Affiche les éléments de la catégorie choisie et cache les autres
function filterItems(category) {
  filterableItems.forEach(function (item) { // Pour chaque élément
    const itemCategory = item.dataset.category; // Lit la catégorie de l'élément (attribut data-category)
    item.hidden = category !== "all" && itemCategory !== category; // Cache l'élément s'il n'est pas dans la catégorie choisie
  });
}

// Met en avant le bouton cliqué et retire la mise en avant des autres
function updateButtons(activeButton) {
  filterButtons.forEach(function (button) { // Pour chaque bouton
    button.setAttribute("aria-pressed", "false"); // Le bouton n'est plus actif
  });
  activeButton.setAttribute("aria-pressed", "true"); // Le bouton cliqué devient actif
}

// Ajoute un écouteur de clic sur chaque bouton de filtre
filterButtons.forEach(function (button) {
  button.addEventListener("click", function () { // Quand on clique sur le bouton
    filterItems(button.dataset.filter); // Filtre les éléments avec la catégorie du bouton (attribut data-filter)
    updateButtons(button); // Met à jour l'apparence des boutons
  });
});
