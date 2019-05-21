var config = {
  type: Phaser.AUTO,
  width: 850,
  height: 600,
  backgroundColor: "b9eaff",
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
  var map = this.add.tilemap('dvdmapone')
  var dvdtileone = map.addTilesetImage('tilesetone','dvdtileone')
  var toplayer = map.createStaticLayer("SkyOne", [dvdtileone], 0, 0)
  var bottomlayer = map.createStaticLayer("GroundBlackOne", [dvdtileone], 0, 0)
}
function update() {}
