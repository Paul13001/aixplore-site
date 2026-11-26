// Changement de style du site
// - le bouton pilule de l'en-tête allume / éteint le mode sombre
// - l'étoile cachée du pied de page allume / éteint le style de Noël (l'autre feuille de style : css/alternate.min.css)
// Les choix sont retenus par le navigateur (localStorage) pour rester actifs sur toutes les pages.

const christmasStyle = document.querySelector('link[href="css/alternate.min.css"]'); // Feuille de style de Noël
const darkButton = document.querySelector(".theme-toggle"); // Bouton pilule
const christmasLink = document.querySelector(".secret-link"); // Étoile du pied de page

christmasStyle.removeAttribute("title"); // Sans title, c'est nous (et pas le navigateur) qui choisissons quand l'afficher

// Applique les choix retenus par le navigateur
function applyStyle() {
  const christmasOn = localStorage.getItem("christmas") === "on";
  const darkOn = localStorage.getItem("dark") === "on";

  if (christmasOn) {
    christmasStyle.rel = "stylesheet"; // La feuille de Noël s'applique
  } else {
    christmasStyle.rel = "alternate stylesheet"; // La feuille de Noël ne s'applique pas
  }

  if (darkOn && !christmasOn) {
    document.documentElement.classList.add("dark"); // Mode sombre (pas pendant Noël)
  } else {
    document.documentElement.classList.remove("dark");
  }
}

// Passe un réglage de "on" à "off" ou de "off" à "on"
function toggleSetting(name) {
  if (localStorage.getItem(name) === "on") {
    localStorage.setItem(name, "off");
  } else {
    localStorage.setItem(name, "on");
  }
  applyStyle();
}

darkButton.addEventListener("click", function () {
  toggleSetting("dark");
});

christmasLink.addEventListener("click", function (event) {
  event.preventDefault(); // Le lien ne recharge pas la page
  toggleSetting("christmas");
});

applyStyle(); // Au chargement de chaque page
