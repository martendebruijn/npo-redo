# NPO Start aanpassingen voor een betere A11Y

<!-- <div style="display:flex;">
  <img src="https://img.shields.io/github/license/martendebruijn/template-node-express" />
</div> -->

## Introduction

Deze repo toont een aantal aanpassingen aan die de toegankelijkheid van de startpagina van [NPO Start](https://www.npostart.nl/) verbeteren. Dit is gemaakt ter ondersteuning van mijn afstudeer project over digitale toegankelijkheid.

**Noot:** het doel van dit herontwerp van NPO Start was om te laten zien hoe bepaalde aanpassingen effect hebben bij het gebruik van een schermlezer (VO). Hierom heb ik ervoor gekozen om geen tijd te verdoen aan het responsive maken van de website, omdat dat het oorspronkelijk doel zou voorbijgaan. 
Het herontwerp is gemaakt op een scherm van 1920x1080. De pagina kan er dus anders uitzien op andere grootes en resoluties.

VO = VoiceOver


<!-- ![Screenshot applicatie](/readme_img/screenshot-dark.png) -->

## Table of contents

- [Usage](#usage)
- [Live Demo](#live-demo)
- [A11Y](#a11y)
- [Credits](#credits)
- [Sources](#sources)

## Usage

### 1. Clone repo & install dependencies

```zsh
git clone https://github.com/martendebruijn/npo-redo.git
cd npo-re
```

## Live Demo
[Live demo link](https://martendebruijn.github.io/npo-redo/)

## A11Y
### Structuur en labels
Om een pagina structuur te geven, kan men gebruik maken van verschillende HTML5 elementen. Door het geven van labels aan de elementen kunnen we nuttige informatie doorgeven aan de schermlezer. Met VO kunnen we snel navigeren over deze oriëntatiepunten. Wanneer de gebruiker over de pagina heen gaat, wordt bijvoorbeeld uitgesproken door VO: "begin navigatie, x onderdelen" en "einde navigatie". 

<details>
<summary>Structuurherontwerp NPO Start</summary>
```html
<!-- Structuur NPO Start -->
<nav></nav>

<header></header>

<main>
	<section></section>
	<section></section>
	<section></section>
</main>

<footer>
	<nav></nav>
	<nav></nav>
	<nav></nav>
</footer>
```
</details>

<details>
<summary>Voorbeeld navigatie element met label</summary>
```html
<!-- Structuur NPO Start -->
<nav></nav>

<header></header>

<main>
	<section></section>
	<section></section>
	<section></section>
</main>

<footer>
	<nav></nav>
	<nav></nav>
	<nav></nav>
</footer>
```
</details>

<details>
<summary>Uitspraak elementen door VO</summary>
| Element | Uitspraak                |
| ------- | ------------------------ |
| `<nav>`  | navigatie               |
| `<header>`  | banner               |
| `<main>`  | hoofdgedeelte          |
| `<section>`  | segment             |
| `<footer>`  | inhoudsinformatie    |
</details>
<details>
<summary>Huidige NPO Start oriëntatiepunten</summary>
...
</details>
<details>
<summary>Herontwerp oriëntatiepunten</summary>
...
</details>

### Speciaal voor schermlezers
Als website maker ben je in staat (instaat?) om elementen/informatie te verstoppen voor de visuele gebruiker, maar wel mee te geven aan hulpmiddelen als een schermlezer. Dit kan ook andersom, elementen/informatie kan verborgen worden voor de hulpmiddelen. 
#### Alleen voor schermlezers
<details>
<summary>De code</summary>
...
</details>
<details>
<summary>Huidige NPO Start navigatie</summary>
...
</details>
<details>
<summary>NPO herontwerp</summary>
...
</details>

#### Juist niet voor schermlezers
<details>
<summary>De code</summary>
...
</details>

### Zoeken op NPO Start
<details>
<summary>'Normaal' zoeken (visueel)</summary>
...
</details>
<details>
<summary>Hoe dit werkt met VO:</summary>
...
</details>
<details>
<summary>Hoe het beter kan:</summary>
...
</details>

### Omroep link(s)
<details>
<summary>Huidige NPO Start</summary>
...
</details>
<details>
<summary>NPO herontwerp</summary>
...
</details>

### Groepering voor snellere navigatie
Als we kijken naar de pagina van NPO Start, zien we dat bepaalde thema's een eigen sectie heeft. 
<br>

*insert img*
<br>

De conventie voor het navigeren over interactieve elementen — links, knoppen, formulierregelaars — is de tab-toets `Tab`. Vandaar dat dit ook wel bekend staat als 'tabben'.

#### Focus
Als de gebruiker de tab-toets gebruikt om over de pagina te navigeren d.m.v. het toetsenbord, zien we meteen een doodzonde. Bij het huidige ontwerp van NPO Start wordt het element dat focus heeft, niet zichtbaar gemaakt. 
<br>

*insert img*
<br>
<br>

*insert video*
<br>
Bovenstaande video is expres gedaan in Google Chrome. Dit is omdat Chrome linksonder de bestemmings-url laat zien. Hierdoor kan je zien dat de tab toets daadwerkelijk wel iets selecteert, maar dat NPO Start dit niet visueel zichtbaar maakt. 

Dit is vooral problematisch voor mensen die VoiceOver gebruiken. Om te zorgen dat VO — de ingebouwde schermlezer van Apple — optimaal werkt, wordt aangeraden om deze in combinatie met Safari te gebruiken.

Safari laat geen bestemming zien, hierdoor heeft de gebruiker — slechtziend of niet — geen enkele indicator of er daadwerkelijk iets gebeurt.

#### Groeperen van secties
Ook als de focus wél zichtbaar was, werkt het huidige ontwerp van NPO Start niet optimaal. Bij het huidige ontwerp wordt geen gebruik gemaakt van groepering. Iets waar NPO Start optimaal gebruik van kan maken: ieder thema heeft zijn eigen sectie. Hierdoor zou de gebruiker d.m.v. 'tabben' over de verschillende thema's kunnen navigeren. Is de gebruiker op het thema waar hij of zij wilt zijn, kan hij of zij vervolgens met de pijltjestoetsen navigeren over de items in de sectie, in dit geval de video's en programma's. 

Op de huidige manier komt alles onder elkaar te staan en moet een gebruiker door alle items heen navigeren (ook de items die niet visueel zichtbaar zijn aan de rechterkant).

<details>
<summary>Huidig, geen groepering</summary>
...
</details>

<details>
<summary>Herontwerp, wel groepering</summary>
...
</details>

<details>
<summary>Herontwerp, wel groepering, secties in oriëntatiepunten</summary>
...
</details>

## Credits

- [Meyerweb: CSS Reset](http://meyerweb.com/eric/tools/css/reset/)

## Sources

| Icon | Category                |
| ---- | ----------------------- |
| 📹   | Video                   |
| 📖   | Documentation / Article |
| ⚙️   | Code                    |
| 🛠   | Tool                    |

| Cat. | Title | Author | Origin |
| ---- | ----- | ------ | ------ |
| 📖  | WAI-ARIA Authoring Practices 1.1 | W3C | [WAI-ARIA Practices](https://www.w3.org/TR/wai-aria-practices/#kbd_roving_tabindex) |
| 📖  | Web Accessibility Tutorials | W3C | [Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/) |
| 🛠  | VoiceOver | Apple | [#](#) |

