var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

function rect(x,y,width,height,){
  context.beginPath()
  context.fillStyle = 'color'
  context.rect(x,y,width,height)
  context.fill()
  context.closePath()
}
