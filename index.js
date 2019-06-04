var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

function rect(x,y,width,height ,color){
  context.beginPath()
  context.fillStyle = color
  context.rect(x,y,width,height)
  context.fill()
  context.closePath()
}
    var BackGround =  rect(0,0,canvas.width,canvas.height,'#B5D8F6')
    var ObOne = rect(450,325,100,10,'#000000')
    var ObTwo = rect(100,325,100,10,'#000000')
    var ObThree = rect(225,505,200,10,'#000000')







