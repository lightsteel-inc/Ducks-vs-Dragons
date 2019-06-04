var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

function rect(x,y,width,height ,color){
  context.beginPath()
  context.fillStyle = color
  context.rect(x,y,width,height)
  context.fill()
  context.closePath()
}
var A = rect(0,0,canvas.width,canvas.height,'#B5D8F6')






