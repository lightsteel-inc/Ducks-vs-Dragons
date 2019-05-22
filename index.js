var config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  backgroundColor: "ffffff",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 450 },
      enableBody: true,
    }
  },
  scene: {
    preload,
    create,
    update
  }
}
const real = {}
var game = new Phaser.Game(config)
function preload() {
  this.load.image('dvdtileone','dvdsetone.png')
  this.load.tilemapTiledJSON('dvdmapone','dvdmapone.json')
  this.load.image('fireDragonLeft','firedragonleft.png')
  this.load.image('fireDragonRight','firedragonright.png')
}
function create() {
  var map = this.add.tilemap('dvdmapone')
  var dvdtileone = map.addTilesetImage('tilesetone','dvdtileone')
  var SkyOne = map.createStaticLayer("SkyOne", [dvdtileone], 0, 0)
  var GroundBlackOne = map.createStaticLayer("GroundBlackOne", [dvdtileone], 0, 0)
    real.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    real.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    real.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    real.hero = this.physics.add.sprite(50,50,'fireDragonLeft')
this.physics.add.collider(real.hero, GroundBlackOne)
this.physics.add.collider(real.hero, SkyOne)
  GroundBlackOne.setCollisionByProperty({collides:true}) 
  GroundBlackOne.setCollision([56,57,58,59])
  SkyOne.setCollisionByProperty({collides:true})
  real.hero.setCollideWorldBounds(true);
  real.hero.setScale(2) 
}
function update() {
  if(real.keyD.isDown) 
  {
    real.hero.x += 5
    fireDragonLeft.Destroy()
    this.add.sprite('fireDragonRight',10,30)
  }
  if(real.keyA.isDown) 
  {
    real.hero.x -= 5
    
  }
  if(real.keyW.isDown) 
  {
    real.hero.y -= 5
  }
   if(real.keyW.isDown && real.keyA.isDown) 
   {
    real.hero.y -= 4
    real.hero.x -= 5
  }
  if(real.keyW.isDown && real.keyD.isDown) 
  {
    real.hero.y -= 4
    real.hero.x += 5
  }
}
