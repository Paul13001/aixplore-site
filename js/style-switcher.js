// changement de style : mode sombre (bouton pilule) et style de Noël (étoile en bas de page)
// localStorage garde le choix quand on change de page

let christmasCss = document.querySelector("#christmas-css");
let darkButton = document.querySelector(".theme-toggle");

// sans le title on peut activer la feuille de Noël nous-mêmes
christmasCss.removeAttribute("title");

function applyStyle() {
  if (localStorage.getItem("christmas") === "on") {
    christmasCss.rel = "stylesheet";
    document.documentElement.classList.remove("dark");
  } else {
    christmasCss.rel = "alternate stylesheet";
    if (localStorage.getItem("dark") === "on") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}

// appelée par le lien de l'étoile
function toggleChristmas() {
  if (localStorage.getItem("christmas") === "on") {
    localStorage.setItem("christmas", "off");
  } else {
    localStorage.setItem("christmas", "on");
  }
  applyStyle();
}

function toggleDark() {
  if (localStorage.getItem("dark") === "on") {
    localStorage.setItem("dark", "off");
  } else {
    localStorage.setItem("dark", "on");
  }
  applyStyle();
}

darkButton.addEventListener("click", toggleDark);

applyStyle();
