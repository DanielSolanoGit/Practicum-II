/*Programacion de JavaScript*/
var piezas = document.getElementsByClassName('movil');

var tamWidh =[134,192,134,163,134,163,134,192,134];
var tamHeight =[163,134,163,134,192,134,163,134,163];

for(var i=0; i<piezas.length; i++){
  piezas[i].setAttribute("width",tamWidh[i]);
  piezas[i].setAttribute("height",tamHeight[i]);
  piezas[i].setAttribute("x", Math.floor((Math.random()*10)+1));
  piezas[i].setAttribute("y", Math.floor((Math.random()*409)+1));
}
var elementSelect =0;
var currentx =0;
var currenty=0;
var currentPosx =0;
var currentPosy =0;

function seleccionarElemento(evt){
  elementSelect = evt.target;
  currentX = evt.clientX;
  currentY = evt.clientY;
  currentPosx = parseFloat(elementSelect.getAttribute("x"));
  currentPosy = parseFloat(elementSelect.getAttribute("y"));
  elementSelect.setAttribute("onmousemove","moverElemento(evt)");
}
function moverElemento(evt){
  var dx = evt.clientX - currentX;
  var dy = evt.clientY - currentY;
  currentPosx = currentPosx + dx;
  currentPosy = currentPosy + dy
  elementSelect.setAttribute("x",currentPosx);
  elementSelect.setAttribute("y",currentPosy);
  currentX = evt.clientX;
  currenty = evt.clientY;
  elementSelect.setAttribute("onmouseout","deseleccionarElemento(evt)");
  elementSelect.setAttribute("onmouseup","deseleccionarElemento(evt)");

}