// getElementById() qui va permettre d'aller chercher et cibler l'élément <canvas> identifié par son attribut id unique (içi house)
var c = document.getElementById('house');
// la méthode getContext() de l'élément ainsi récupéré pour savoir dans quel contexte de dessin (2D ou 3D) le script va pouvoir agir,
// et de quelles fonctions il pourra disposer.
// Le contexte sera l'élément central de gestion de Canvas.
var ctx = c.getContext('2d');

// toit avec rotate
// ctx.fillStyle = "#d7823e";
// ctx.rotate(45 * Math.PI / 180);
// ctx.fillRect(150, -130, 140, 140);

//toit avec les lignes
ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(300,120);
ctx.lineTo(100,120);
ctx.fillStyle = '#d7823e';
ctx.fill();
ctx.closePath();

ctx.fillStyle = '#a1d8e6';
//  fillRect(startx, starty, hauteur, largeur)
// ctx.rotate(-45 * Math.PI / 180);
ctx.fillRect(100, 115, 200, 200);
ctx.closePath();

//carré fenêtre gauche
ctx.fillStyle = '#c9c9c9';
ctx.fillRect(120, 130, 60, 60);
ctx.closePath();

//carré fenêtre droite
ctx.fillStyle = '#c9c9c9';
ctx.fillRect(220, 130, 60, 60);
ctx.closePath();

//porte
ctx.fillStyle = '#c9c9c9';
ctx.fillRect(170, 215, 60, 100);
ctx.closePath();
