// animations du site Aixplore
// elles sont désactivées si le visiteur a demandé moins de mouvements

let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// fait apparaître un élément en le faisant monter
function appear(element, delay) {
  element.animate(
    [
      { opacity: 0, transform: "translateY(24px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    { duration: 500, delay: delay, easing: "ease-out", fill: "backwards" }
  );
}

if (!reducedMotion) {

  // 1. le titre de la page arrive par la gauche
  let title = document.querySelector("h1");
  if (title) {
    title.animate(
      [
        { opacity: 0, transform: "translateX(-40px)" },
        { opacity: 1, transform: "translateX(0)" }
      ],
      { duration: 600, easing: "ease-out" }
    );
  }

  // 2. les blocs apparaissent quand on arrive dessus en défilant
  let blocks = document.querySelectorAll(".intro, .home-video, .page-card, .deal-card, .place, .link-card, section > h2, .review-form");

  let observer = new IntersectionObserver(function (entries) {
    let position = 0;
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        appear(entries[i].target, position * 80); // les uns après les autres
        position++;
        observer.unobserve(entries[i].target); // une seule fois
      }
    }
  });

  for (let i = 0; i < blocks.length; i++) {
    observer.observe(blocks[i]);
  }

  // 3. les cartes cliquables se soulèvent au survol
  let cards = document.querySelectorAll(".page-card, .link-card, .deal-card");

  for (let i = 0; i < cards.length; i++) {
    cards[i].style.transition = "transform 0.2s";
    cards[i].addEventListener("mouseenter", function () {
      cards[i].style.transform = "translateY(-6px)";
    });
    cards[i].addEventListener("mouseleave", function () {
      cards[i].style.transform = "";
    });
  }

  // 4. après un filtre, les éléments affichés réapparaissent
  let filterButtons = document.querySelectorAll(".filter-button");

  for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
      // on attend que filter.js ait fini de trier
      setTimeout(function () {
        let shown = document.querySelectorAll("[data-category]");
        let position = 0;
        for (let j = 0; j < shown.length; j++) {
          if (shown[j].style.display !== "none") {
            appear(shown[j], Math.min(position * 60, 400));
            position++;
          }
        }
      }, 0);
    });
  }

  // 5. mode clair / sombre : l'ancienne couleur se referme en cercle sur le bouton
  let themeButton = document.querySelector(".theme-toggle");
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      // en style de Noël le mode sombre ne se voit pas
      if (localStorage.getItem("christmas") === "on") {
        return;
      }

      // style-switcher.js a déjà changé le mode : on reprend la couleur d'avant
      let isDark = document.documentElement.classList.contains("dark");
      let veil = createLayer("");
      veil.style.inset = "0";
      veil.style.backgroundColor = isDark ? "#ffffff" : "#0b1029";

      let box = themeButton.getBoundingClientRect();
      let center = (box.left + box.width / 2) + "px " + (box.top + box.height / 2) + "px";

      let animation = veil.animate(
        [
          { clipPath: "circle(150% at " + center + ")", opacity: 0.9 },
          { clipPath: "circle(0% at " + center + ")", opacity: 0.9 }
        ],
        { duration: 700, easing: "ease-in-out", fill: "forwards" }
      );
      animation.onfinish = function () {
        veil.remove();
      };
    });
  }

  // 6. étoile du bas de page : neige à l'arrivée de Noël, étincelles au départ
  let star = document.querySelector(".secret-link");
  if (star) {
    star.style.display = "inline-block"; // nécessaire pour la faire tourner
    star.addEventListener("click", function () {
      // le clic n'a pas encore changé le style à ce moment
      let toChristmas = localStorage.getItem("christmas") !== "on";

      star.animate(
        [
          { transform: "scale(1) rotate(0deg)" },
          { transform: "scale(2.5) rotate(180deg)" },
          { transform: "scale(1) rotate(360deg)" }
        ],
        { duration: 700, easing: "ease-in-out" }
      );

      if (toChristmas) {
        letItSnow();
      } else {
        sparkle(star);
      }
    });
  }
}

// crée un élément décoratif par-dessus la page, qui ne bloque pas les clics
function createLayer(text) {
  let layer = document.createElement("span");
  layer.textContent = text;
  layer.setAttribute("aria-hidden", "true");
  layer.style.position = "fixed";
  layer.style.zIndex = "100";
  layer.style.pointerEvents = "none";
  document.body.appendChild(layer);
  return layer;
}

// fait tomber des flocons sur tout l'écran
function letItSnow() {
  for (let i = 0; i < 40; i++) {
    let flake = createLayer("❄");
    flake.style.top = "-40px";
    flake.style.left = Math.random() * 95 + "vw";
    flake.style.fontSize = 14 + Math.random() * 18 + "px";
    flake.style.color = "#ffffff";
    flake.style.textShadow = "0 0 4px #3b82f6"; // visible sur fond clair

    let animation = flake.animate(
      [
        { transform: "translate(0, 0) rotate(0deg)" },
        { transform: "translate(" + (Math.random() * 80 - 40) + "px, 110vh) rotate(360deg)" }
      ],
      { duration: 1800 + Math.random() * 1500, delay: Math.random() * 600, fill: "backwards" }
    );
    animation.onfinish = function () {
      flake.remove();
    };
  }
}

// petites étoiles qui partent de l'étoile cliquée
function sparkle(source) {
  let box = source.getBoundingClientRect();

  for (let i = 0; i < 12; i++) {
    let spark = createLayer("✦");
    spark.style.left = box.left + "px";
    spark.style.top = box.top + "px";
    spark.style.color = "#ffe14d";
    spark.style.textShadow = "0 0 4px #b45309";

    let angle = (i / 12) * 2 * Math.PI;
    let animation = spark.animate(
      [
        { transform: "translate(0, 0)", opacity: 1 },
        { transform: "translate(" + Math.cos(angle) * 90 + "px, " + Math.sin(angle) * 90 + "px)", opacity: 0 }
      ],
      { duration: 800, easing: "ease-out", fill: "forwards" }
    );
    animation.onfinish = function () {
      spark.remove();
    };
  }
}

// 7. le bouton "haut de page" n'apparaît qu'après avoir un peu défilé
let topButton = document.querySelector(".back-to-top");

function showTopButton() {
  if (window.scrollY > 200) {
    topButton.style.opacity = "1";
    topButton.style.visibility = "visible";
  } else {
    topButton.style.opacity = "0";
    topButton.style.visibility = "hidden";
  }
}

if (topButton) {
  showTopButton();
  if (!reducedMotion) {
    topButton.style.transition = "opacity 0.3s, visibility 0.3s";
  }
  window.addEventListener("scroll", showTopButton);
}
