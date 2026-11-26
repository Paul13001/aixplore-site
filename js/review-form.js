// Formulaire d'avis (page Accueil) : ouvre la messagerie avec un e-mail déjà écrit

let reviewForm = document.querySelector(".review-form"); // le formulaire

reviewForm.addEventListener("submit", function (event) {
  event.preventDefault(); // on bloque l'envoi normal du formulaire (il cassait les accents)

  // on récupère ce que le visiteur a rempli
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let category = document.querySelector("#category").value;
  let rating = document.querySelector("input[name='rating']:checked").value;
  let message = document.querySelector("#message").value;

  // l'objet et le texte de l'e-mail ("\n" = retour à la ligne)
  let subject = "Avis Aixplore - " + category;
  let body = "Bonjour l'équipe Aixplore,\n\n" + message + "\n\n" +
    "Rubrique : " + category + "\n" +
    "Note : " + rating + "\n\n" +
    name + "\n" + email;

  // encodeURIComponent garde les accents et les espaces dans l'adresse mailto
  window.location.href = "mailto:aixplore.contact@gmail.com?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
});
