var body = document.getElementsByTagName('body');

function divgen(color){
  var newDiv = document.createElement('div');
  newDiv.style.backgroundColor = color;
  newDiv.style.width = '11.1%';
  newDiv.style.float = 'left';
  newDiv.style.paddingBottom = '11.1%';

  return newDiv;
}

for(var i = 0; i < 27; i++){
  //for(var j = 0; j < 5; j++){
    document.body.appendChild(divgen('red'));
    document.body.appendChild(divgen('black'));
  //}
}
