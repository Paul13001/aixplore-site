# Aixplore

Site : https://paul13001.github.io/aixplore-site/

Maquette : https://www.figma.com/design/nGl78aR44cVEAY6RGnqp13/Aixplore-%E2%80%93-Maquette--wireframes-?node-id=0-1&p=f&t=JnCQAMnjrqRTnAvH-0

Sujet : https://www.mickael-martin-nevot.com/univ-amu/iut/but-informatique/developpement-d-interfaces-web/?:s18-projet.pdf

## Dossiers

- `css/` : style.css (style normal) et alternate.css (style de Noël), plus les versions .min.css
- `js/` : filtres, formulaire d'avis et changement de style
- `img/` : logo, fonds des pages et photos de la page Sports
- `video/` : vidéo de l'accueil et sous-titres

## Minifier le CSS

```
npx csso-cli css/style.css -o css/style.min.css --no-restructure
npx csso-cli css/alternate.css -o css/alternate.min.css --no-restructure
```
