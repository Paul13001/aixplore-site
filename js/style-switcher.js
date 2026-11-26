// Bouton pilule = mode sombre (même présentation, couleurs de nuit)
// Style alternatif = style de Noël, secret, activé par la page /noel (noel.html)

// Lit une valeur retenue par le navigateur (try/catch : certains navigateurs bloquent cette mémoire)
function lire(cle) {
  try {
    return localStorage.getItem(cle);
  } catch (erreur) {
    return null;
  }
}

// Retient une valeur dans le navigateur
function ecrire(cle, valeur) {
  try {
    localStorage.setItem(cle, valeur);
  } catch (erreur) {
    // Mémoire bloquée : tant pis, le style ne sera pas retenu d'une page à l'autre
  }
}

const noelStyle = document.querySelector('link[href="css/alternate.css"]'); // Feuille de style de Noël

// On enlève le title de la feuille de Noël pour pouvoir l'allumer nous-mêmes
// (avec un title, c'est le navigateur qui choisit seul quelle feuille afficher)
noelStyle.removeAttribute("title");

// Met le bon style sur la page : Noël, sombre ou normal
function updateStyle() {
  if (lire("noel") === "oui") {
    noelStyle.rel = "stylesheet"; // La feuille de Noël s'applique
    document.documentElement.classList.remove("sombre"); // Pas de mode sombre pendant Noël
  } else {
    noelStyle.rel = "alternate stylesheet"; // La feuille de Noël ne s'applique pas
    if (lire("sombre") === "oui") {
      document.documentElement.classList.add("sombre"); // Ajoute la classe "sombre" sur <html>
    } else {
      document.documentElement.classList.remove("sombre");
    }
  }
}

updateStyle(); // Tout de suite, avant l'affichage de la page (le script est dans le <head>)

// Quand la page est chargée, on branche le bouton pilule
document.addEventListener("DOMContentLoaded", function () {
  const styleButton = document.querySelector(".theme-toggle"); // Bouton pilule de l'en-tête

  styleButton.addEventListener("click", function () {
    if (lire("noel") === "oui") {
      ecrire("noel", "non"); // Pendant Noël, la pilule sert à sortir de Noël
    } else if (lire("sombre") === "oui") {
      ecrire("sombre", "non"); // Repasse en mode clair
    } else {
      ecrire("sombre", "oui"); // Passe en mode sombre
    }
    updateStyle();
  });
});
