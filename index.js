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
var rectone = new rect(100,100,10,10,'#36FF33')
var recttwo = new rect(10,10,10,10,'#36FF33')



