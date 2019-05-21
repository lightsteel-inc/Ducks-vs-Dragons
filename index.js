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
var game = new Phaser.Game(config)
function preload() {
  this.load.image('dvdtileone','assets/dvdsetone.png')
  this.load.tilemapTiledJSON('dvdmapone','assets/dvdmapone.json')
}
function create() {
  var hero = this.load.image(10, 5 , 'hero')
  var map = this.add.tilemap('dvdmapone')
  var dvdtileone = map.addTilesetImage('tilesetone','dvdtileone')
  var SkyOne = map.createStaticLayer("SkyOne", [dvdtileone], 0, 0)
  var GroundBlackOne = map.createStaticLayer("GroundBlackOne", [dvdtileone], 0, 0)
  var keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  var keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  var keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  this.physics.add.collider(hero, GroundBlackOne)
  this.physics.add.collider(hero, SkyOne)
  GroundBlackOne.setCollisionByProperty({collides:true}) 
  SkyOne.setCollisionByProperty({collides:true}) 
}
function update() {
  if(keyD.isDown) {
  }
}
