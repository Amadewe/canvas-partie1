// getElementById() qui va permettre d'aller chercher et cibler l'élément <canvas> identifié par son attribut id unique (içi house)
var c = document.getElementById('house');
// la méthode getContext() de l'élément ainsi récupéré pour savoir dans quel contexte de dessin (2D ou 3D) le script va pouvoir agir,
// et de quelles fonctions il pourra disposer.
// Le contexte sera l'élément central de gestion de Canvas.
var ctx = c.getContext('2d');

// maison avec toit
ctx.beginPath(); // Début du chemin
ctx.moveTo(200,50); //choisir un point de départ (içi le haut du toit), (horizontal, vertical) les parenthèses sont des "paramètres"
// lineTo permet de tracer un trait et prend en paramètre le point d'arrivée
ctx.lineTo(300,150); //coin suppérieur droite de ma maison
ctx.lineTo(300,300); //coin inférieur droite de ma maison
ctx.lineTo(100,300); //coin inférieur gauche
ctx.lineTo(100,150); //coin suppérieur gauche
// fillStyle est un attribut
ctx.fillStyle = '#a1d8e6'; // Définition de la couleur de remplissage
ctx.fill();  // Remplissage du dernier chemin tracé
// closePath permet de finir le trac et revient au point d'origine.
ctx.closePath(); // Fermeture du chemin

//toit
ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(300,150);
ctx.lineTo(100,150);
ctx.fillStyle = '#d7823e';
ctx.fill();
ctx.closePath();


// fenêtre de gauche
ctx.beginPath();
ctx.moveTo(120,160);
ctx.lineTo(170,160);
ctx.lineTo(170,200);
ctx.lineTo(120,200);
ctx.fillStyle = '#c9c9c9';
ctx.fill();
ctx.closePath();

// fenêtre de droite
ctx.beginPath();
ctx.moveTo(230,160);
ctx.lineTo(280,160);
ctx.lineTo(280,200);
ctx.lineTo(230,200);
ctx.fillStyle = '#c9c9c9';
ctx.fill();
ctx.closePath();

// porte
ctx.beginPath();
ctx.moveTo(170,230);
ctx.lineTo(230,230);
ctx.lineTo(230,300);
ctx.lineTo(170,300);
ctx.fillStyle = '#c9c9c9';
ctx.fill();
ctx.closePath();
