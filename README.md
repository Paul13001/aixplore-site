# Aixplore — le guide de la vie étudiante à Aix-en-Provence

Site : https://paul13001.github.io/aixplore-site/

Lien maquettes : https://www.figma.com/design/nGl78aR44cVEAY6RGnqp13/Aixplore-%E2%80%93-Maquette--wireframes-?node-id=0-1&p=f&t=JnCQAMnjrqRTnAvH-0

Lien sujet : https://www.mickael-martin-nevot.com/univ-amu/iut/but-informatique/developpement-d-interfaces-web/?:s18-projet.pdf

## Arborescence

```
index.html, nightlife.html, sports.html, deals.html, links.html   les 5 pages
noel.html                    page secrète qui active le style de Noël
css/style.css                feuille de style par défaut (source commentée)
css/style.min.css            version minifiée utilisée par les pages
css/alternate.css            style alternatif « L'Avent à Aix » (source commentée)
css/alternate.min.css        version minifiée utilisée par les pages
js/filter.js                 filtres par catégorie (Soirées, Sports, Bons plans, Liens utiles)
js/review-form.js            met en forme l'e-mail du formulaire d'avis
js/style-switcher.js         mode sombre (bouton pilule) et style de Noël
img/aixplore/                logo, boutons, favicon, image de partage
img/backgrounds/             fonds des pages
img/sports/                  photos de la page Sports (student, outdoor, gyms, pools, fans)
video/                       vidéo de l'accueil et ses sous-titres (.vtt)
robots.txt, sitemap.xml      référencement
```

## Minifier le CSS

Après chaque modification de `css/style.css` ou `css/alternate.css` :

```
npx csso-cli css/style.css -o css/style.min.css --no-restructure
npx csso-cli css/alternate.css -o css/alternate.min.css --no-restructure
```
