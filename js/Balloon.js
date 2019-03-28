'use strict';
document.addEventListener("keydown", event);

function sizeFixBalloon(event){
  console.log(event);
  event.preventDefault();
  const id = document.getElementById('Balloon');
  const style = window.getComputedStyle(id, null).getPropertyValue('font-size');
  const currentSize = parseFloat(style);

  if (event.key === 'ArrowUp') {
    id.style.fontSize = (currentSize * 1.1) + 'px';
    console.log('up' + currentSize);
  } else if (event.key === 'ArrowDown') {
    id.style.fontSize = (currentSize * 0.9) + 'px';
    console.log('down' + currentSize);
  }
  if (currentSize > 200) {
    console.log('boom');
    document.getElementById("Balloon").innerHTML = "💥";
    removeEventListener();
  }


}

function removeEventListener() {
  document.removeEventListener("keydown", sizeFixBalloon);
}
