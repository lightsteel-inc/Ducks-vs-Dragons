var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')

context.beginPath()
context.fillStyle = '#09DEFF'
context.rect(0,0,canvas.width,canvas.height)
context.fill()
context.fillStyle = '#000000'
context.rect(0,500,700,100)
context.fill()
context.closePath()







