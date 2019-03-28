'use strict';


const colors = [];

window.addEventListener("mousemove", event =>{

  console.log(event.pageX, event.pageY);
  const div = document.createElement('div');
   div.classList.add('trail');
  div.style.top = event.pageY + 'px';
  div.style.left = event.pageX + 'px';
  document.querySelector('body').appendChild(div);

  colors.push(div);

  console.log(colors)
  if(colors.length >= 20){
    const removeColor = colors.shift();
    removeColor.remove()
  }
});
