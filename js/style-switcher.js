// Changer le style du site
// - le bouton pilule allume ou éteint le mode sombre
// - l'étoile du bas de page (lien javascript:toggleChristmas()) allume ou éteint le style de Noël
// Le navigateur retient les choix (localStorage) pour toutes les pages.

let christmasCss = document.querySelector("#christmas-css"); // la feuille de style de Noël
let darkButton = document.querySelector(".theme-toggle"); // le bouton pilule

// on enlève le title pour pouvoir allumer la feuille de Noël nous-mêmes
christmasCss.removeAttribute("title");

// met le bon style sur la page
function applyStyle() {
  if (localStorage.getItem("christmas") === "on") {
    christmasCss.rel = "stylesheet"; // la feuille de Noël s'applique
    document.documentElement.classList.remove("dark"); // pas de mode sombre à Noël
  } else {
    christmasCss.rel = "alternate stylesheet"; // la feuille de Noël ne s'applique pas
    if (localStorage.getItem("dark") === "on") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}

// allume ou éteint le style de Noël (appelé par l'étoile du bas de page)
function toggleChristmas() {
  if (localStorage.getItem("christmas") === "on") {
    localStorage.setItem("christmas", "off");
  } else {
    localStorage.setItem("christmas", "on");
  }
  applyStyle();
}

// allume ou éteint le mode sombre
function toggleDark() {
  if (localStorage.getItem("dark") === "on") {
    localStorage.setItem("dark", "off");
  } else {
    localStorage.setItem("dark", "on");
  }
  applyStyle();
}

darkButton.addEventListener("click", toggleDark); // clic sur le bouton pilule

applyStyle(); // au chargement de la page
