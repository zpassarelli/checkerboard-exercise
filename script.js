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
  return Math.floor(Math.random() * 256);
}

for(var i = 0; i <= 53; i++){
  document.body.appendChild(divgen(randomColor(),randomColor(),randomColor()));
}
