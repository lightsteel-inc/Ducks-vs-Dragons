var config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 600,
  backgroundColor: "ffffff",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
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
  this.load.image('dvdtileone','assets/dvdsetone.png')
  this.load.tilemapTiledJSON('dvdmapone','assets/dvdmapone.json')
}
function create() {
  var map = this.add.tilemap('dvdmapone')
  var dvdtileone = map.addTilesetImage('tilesetone','dvdtileone')
  var SkyOne = map.createStaticLayer("SkyOne", [dvdtileone], 0, 0)
  var GroundBlackOne = map.createStaticLayer("GroundBlackOne", [dvdtileone], 0, 0)
  real.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  real.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  real.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  real.hero = this.physics.add.sprite(50,50,'image')
  this.physics.add.collider(real.hero, GroundBlackOne)
  this.physics.add.collider(real.hero, SkyOne)
  GroundBlackOne.setCollisionByProperty({collides:true}) 
  GroundBlackOne.setCollision([56,57,58,59])
  SkyOne.setCollisionByProperty({collides:true}) 
}
function update() {
  if(real.keyD.isDown) {
    real.hero.x += 5
  }
  if(real.keyA.isDown) {
    real.hero.x -= 5
  }
  if(real.keyW.isDown) {
    real.hero.y -= 5
  }
   if(real.keyW.isDown && real.keyA.isDown) {
    real.hero.y -= 10
    real.hero.x += 5
  }
}
