var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

function rect(x,y,width,height ,color){
  context.beginPath()
  context.fillStyle = color
  context.rect(this.x,this.y,this.width,this.height)
  context.fill()
  context.closePath()
}
var A = rect(0,0,canvas.width,canvas.height,'#B5D8F6')






