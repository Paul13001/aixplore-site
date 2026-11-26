// Bouton pilule = mode sombre (même présentation, couleurs de nuit)
// Style alternatif = style de Noël (autre feuille de style : css/alternate.min.css)
// activé par un lien secret en JavaScript (la petite étoile ✦ du pied de page) ou par la page secrète /noel

// Lit une valeur retenue par le navigateur (try/catch : certains navigateurs bloquent cette mémoire)
function readValue(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

// Retient une valeur dans le navigateur
function writeValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // Mémoire bloquée : tant pis, le style ne sera pas retenu d'une page à l'autre
  }
}

const christmasStyle = document.querySelector('link[href="css/alternate.min.css"]'); // Feuille de style de Noël

// On enlève le title de la feuille de Noël pour pouvoir l'allumer nous-mêmes
// (avec un title, c'est le navigateur qui choisit seul quelle feuille afficher)
christmasStyle.removeAttribute("title");

// Met le bon style sur la page : Noël, sombre ou normal
function updateStyle() {
  if (readValue("christmas") === "on") {
    christmasStyle.rel = "stylesheet"; // La feuille de Noël s'applique
    document.documentElement.classList.remove("dark"); // Pas de mode sombre pendant Noël
  } else {
    christmasStyle.rel = "alternate stylesheet"; // La feuille de Noël ne s'applique pas
    if (readValue("dark") === "on") {
      document.documentElement.classList.add("dark"); // Ajoute la classe "dark" sur <html>
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}

updateStyle(); // Tout de suite, avant l'affichage de la page (le script est dans le <head>)

// Quand la page est chargée, on branche le bouton pilule
document.addEventListener("DOMContentLoaded", function () {
  const styleButton = document.querySelector(".theme-toggle"); // Bouton pilule de l'en-tête

  styleButton.addEventListener("click", function () {
    if (readValue("christmas") === "on") {
      writeValue("christmas", "off"); // Pendant Noël, la pilule sert à sortir de Noël
    } else if (readValue("dark") === "on") {
      writeValue("dark", "off"); // Repasse en mode clair
    } else {
      writeValue("dark", "on"); // Passe en mode sombre
    }
    updateStyle();
  });

  // Lien secret (étoile du pied de page) : allume ou éteint la feuille de style de Noël
  const secretLink = document.querySelector(".secret-link");

  secretLink.addEventListener("click", function (event) {
    event.preventDefault(); // Le lien ne recharge pas la page (href="#")
    if (readValue("christmas") === "on") {
      writeValue("christmas", "off"); // Éteint Noël
    } else {
      writeValue("christmas", "on"); // Allume Noël
    }
    updateStyle();
  });
});
