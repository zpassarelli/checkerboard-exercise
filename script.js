var body = document.getElementsByTagName('body');

function divgen(red,green,blue){
  var newDiv = document.createElement('div');
  newDiv.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
  newDiv.style.width = '11.1%';
  newDiv.style.float = 'left';
  newDiv.style.paddingBottom = '11.1%';

  return newDiv;
}

function randomColor() {
  return Math.floor(Math.random() * 255);
}

function colorShift(color,dir){
  if(dir === 'up'){
    if(color + 10 > 255){
      return (color + 10) - 255;
    } else {
      return color + 10;
    }
  } else {
    if(color - 15 < 0){
      return (color - 15) + 255;
    } else {
      return color - 15;
    }
  }
}

var grad1 = randomColor();
var grad2 = randomColor();
var grad3 = randomColor();

for(var i = 0; i <= 20; i++){
  document.body.appendChild(divgen(grad1,grad2,grad3));
  grad1 = colorShift(grad1,'down');
  document.body.appendChild(divgen(grad1,grad2,grad3));
  grad1 = colorShift(grad1,'up');
  document.body.appendChild(divgen(grad1,grad2,grad3));
  grad1 = colorShift(grad1,'down');
}
