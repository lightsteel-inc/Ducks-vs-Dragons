var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

function rect(x,y,width,height,color){
  ctx.beginPath()
  ctx.fillStyle = color
  ctx.rect(x,y,width,height)
  ctx.fill()
  ctx.closePath()
}
var background = new rect(0,0,canvas.width,canvas.height,'#B5D8F6')
