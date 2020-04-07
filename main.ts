namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral2, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(20)
    projectile.destroy(effects.spray, 500)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    info.changeLifeBy(-1)
})
let projectile: Sprite = null
let power2 = false
let mySprite = corgio.create(SpriteKind.Player)
mySprite.follow()
mySprite.horizontalMovement()
mySprite.verticalMovement()
mySprite.updateSprite()
tiles.setTilemap(tiles.createTilemap(
            hex`6e0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000110000110000001100000000000000000000000000000000000016161616000000000000000000000000000000000000000000000000000000000000000000001609000016000000000000000000000016000000000000160000000000000000000000000000000000000000161611161611161616110000000000080016161616161616000000000303030200000000000000000000000000000000000000000000000000000000000000000016090900000916000000000000000000000c0000001600000c160000000000000000000000000000000000001610150b0b0b0b141414141515151515150002020202020200161616160307070700000000000000000a1616160008001616000000000016000000000016161616160909090707090916000016161616161600000016000c00000c0c16160000000000000000000000000000001610100000000000000000000000000000000000000000000000020202020307090707000000000000000a0a0a0a0a0a0a0a0a00000016000a00000000000a0a0a0a090909090707090909000c0c0c0c0c0c0c0000000c00000000000c0c0c16160d1616161616161616161616101010100000000000000000000000000000001616161616161616161616160507070707070000000000000a0800000a0a0000000000000a000000000000000700070707070707070707070707000000000000000000000000000000000000000c0f0f0f0f0f0f0f0f0f10101010101010000707070000000000000000000000000202020202020202020202050507070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070700000000000000000000`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . 
. . . . . . . . . . . . 2 2 2 2 . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 2 . . 2 . . . . . . . . . . . 2 . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 . . . . . 2 . . . . . . . . . . . 2 . . . 2 . 2 . . . . . . . . . . . . . . . . . . 2 2 2 . . 2 2 . . . . . . . . . . . . . . 2 . . 2 2 . . . . . . . . . . . . . . . . . . 2 2 . . 2 . . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . 2 . . . . . 2 2 2 2 2 2 2 2 . . 2 2 2 . 2 2 2 2 2 2 2 . . . 2 . . . . . 2 2 2 . . . . . . . . . . . . . . . 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 . . . . . . . . . . . 2 2 . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 . 2 2 2 . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.coral0,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths3,sprites.builtin.coral5,sprites.builtin.oceanDepths4,sprites.dungeon.chestClosed,sprites.dungeon.hazardLava0,sprites.builtin.coral2,sprites.dungeon.hazardLava1,sprites.builtin.brick,sprites.builtin.forestTiles0,sprites.builtin.forestTiles4,sprites.castle.saplingOak,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.coral3,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.floorLight0,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
info.setLife(64)
projectile = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
tiles.placeOnRandomTile(projectile, myTiles.tile1)
