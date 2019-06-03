var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

function rect(x,y,width,height,color){
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.color = color
}
var rect = new rect(0,0,canvas.width,canvas.height,'#B5D8F6')
var rect1 = new rect(100,100,10,10,'#36FF33')
var rect1 = new rect(10,10,10,10,'#36FF33')


if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.y + rect1.height > rect2.y) {
    return true;
} else {
  return false
}

function controller(evt) {
 switch(evt.keyCode) {
    case 87:
        rect1.y += 5
        break;
    case 83:
      rect1.y += 5
        break;
      }
}

window.addEventListener('keyup',controller)
