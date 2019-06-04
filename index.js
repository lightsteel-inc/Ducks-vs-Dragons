var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

function rect(x,y,width,height,color){
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.color = color
}
var reverseFlash = new rect(0,0,canvas.width,canvas.height,'#B5D8F6')
var falsh = new rect(100,100,10,10,'#36FF33')
var flash = new rect(10,10,10,10,'#36FF33')



