// formulaire d'avis : ouvre la messagerie avec l'e-mail déjà écrit

let reviewForm = document.querySelector(".review-form");

reviewForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let category = document.querySelector("#category").value;
  let rating = document.querySelector("input[name='rating']:checked").value;
  let message = document.querySelector("#message").value;

  let subject = "Avis Aixplore - " + category;
  let body = "Bonjour l'équipe Aixplore,\n\n" + message + "\n\n" +
    "Rubrique : " + category + "\n" +
    "Note : " + rating + "\n\n" +
    name + "\n" + email;

  // encodeURIComponent pour garder les accents
  window.location.href = "mailto:aixplore.contact@gmail.com?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);
});
