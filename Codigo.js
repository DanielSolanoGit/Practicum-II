var b_suma = document.getElementById("botonSuma");
var b_resta = document.getElementById("botonResta");
b_suma.addEventListener("click",sumar);
b_resta.addEventListener("click",restar);

function sumar(){
  var min = 1;
  var max = 20;
  var resp1;
  var resp2;
  var res_suma;
  for(var i=0; i<10; i++){
    resp1 = Math.floor(Math.random()*(max - min +1)) + min;
    resp2 = Math.floor(Math.random()*(max - min +1)) + min;
    res_suma = resp1 + resp2;
    document.write(i+1+".-   "+resp1 +"+"+ resp2 + "=" +res_suma+"</br>");
  }

}
function restar(){
  var min = 1;
  var max = 20;
  var resp1;
  var resp2;
  var res_resta;
  for(var i=0; i<10; i ++){
    resp1 = Math.floor(Math.random()*(max - min +1)) + min;
    resp2 = Math.floor(Math.random()*(max - min +1)) + min;
    if(resp1 < resp2){
      res_resta = resp2 - resp1;
      document.write(i+1+".-   "+resp2 +"-"+ resp1 + "=" +res_resta+"</br>");
    }else{
      res_resta = resp1 - resp2;
      document.write(i+1+".-   "+resp1 +"-"+ resp2 + "=" +res_resta+"</br>");
    }
  }

}
