// getElementById() qui va permettre d'aller chercher et cibler l'élément <canvas> identifié par son attribut id unique (içi house)
var c = document.getElementById('car');
// la méthode getContext() de l'élément ainsi récupéré pour savoir dans quel contexte de dessin (2D ou 3D) le script va pouvoir agir,
// et de quelles fonctions il pourra disposer.
// Le contexte sera l'élément central de gestion de Canvas.
var ctx = c.getContext('2d');

//corps de la voiture
ctx.beginPath();
ctx.fillStyle = '#00a551';
ctx.fillRect(100, 50, 300, 100);
ctx.fill();
// pour "gommer" en haut à gauche
//  clearRect(startx, starty, hauteur, largeur)
ctx.clearRect(100, 50, 50, 50);
ctx.clearRect(350, 50, 50, 50);


// la roue gauche
ctx.beginPath();
//  arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )

// Sachant que l'on est dans une configuration trigonométrique
// les angles sont définis en radians avec Math.PI (un tour complet de cercle = 2*Math.PI)
// et le sens de rotation est contraire aux aiguilles d'une montre lorsqu'il vaut true.
ctx.arc(150, 190, 40, 0 ,Math.PI*2,true);
ctx.strokeStyle = '#696969';
ctx.fillStyle = '#cdcdcd';
ctx.stroke();
ctx.fill();

// la roue gauche
ctx.beginPath();
ctx.arc(350, 190, 40, 0 ,Math.PI*2,true);
ctx.strokeStyle = '#696969';
ctx.fillStyle = '#cdcdcd';
ctx.stroke();
ctx.fill();
