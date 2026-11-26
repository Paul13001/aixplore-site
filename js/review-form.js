// Script du formulaire d'avis (page Accueil) : prépare un e-mail propre dans la messagerie du visiteur

const reviewForm = document.querySelector(".review-form"); // Récupère le formulaire d'avis

// Construit le lien mailto avec un objet et un texte bien présentés
function buildMailto() {
  const name = document.querySelector("#name").value; // Nom du visiteur
  const email = document.querySelector("#email").value; // E-mail du visiteur
  const category = document.querySelector("#category").value; // Rubrique choisie
  const rating = document.querySelector("input[name='rating']:checked").value; // Note cochée
  const message = document.querySelector("#message").value; // Message du visiteur

  // Objet de l'e-mail, par exemple : "Avis Aixplore - Soirées - 5/5"
  const subject = "Avis Aixplore - " + category + " - " + rating.slice(0, 3);

  // Texte de l'e-mail ("\n" = retour à la ligne)
  const body =
    "Bonjour l'équipe Aixplore,\n\n" +
    message + "\n\n" +
    "Rubrique : " + category + "\n" +
    "Note : " + rating + "\n\n" +
    name + "\n" +
    email;

  // encodeURIComponent transforme les accents et les espaces pour qu'ils s'affichent bien dans la messagerie
  return "mailto:aixplore.contact@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
}

// Quand on clique sur Envoyer (le navigateur a déjà vérifié que les champs obligatoires sont remplis)
reviewForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche l'envoi classique du formulaire (qui cassait les accents)
  window.location.href = buildMailto(); // Ouvre la messagerie avec l'e-mail déjà rédigé
});
