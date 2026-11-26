// Script des filtres (pages Soirées, Sports, Bons plans et Liens utiles) : affiche seulement les éléments de la catégorie choisie

const filterButtons = document.querySelectorAll(".filter-button"); // Récupère tous les boutons de filtre
const dealCards = document.querySelectorAll("[data-category]"); // Récupère tous les éléments filtrables (ceux qui ont un attribut data-category)

// Affiche les cartes de la catégorie choisie et cache les autres
function filterDeals(category) {
  dealCards.forEach(function (card) { // Pour chaque carte
    const cardCategory = card.dataset.category; // Lit la catégorie de la carte (attribut data-category)
    card.hidden = category !== "all" && cardCategory !== category; // Cache la carte si elle n'est pas dans la catégorie choisie
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
    filterDeals(button.dataset.filter); // Filtre les cartes avec la catégorie du bouton (attribut data-filter)
    updateButtons(button); // Met à jour l'apparence des boutons
  });
});
