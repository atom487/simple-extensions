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
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral2, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.follow()
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
tiles.setTilemap(tiles.createTilemap(
            hex`280008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030300000000000000000a0000000000000000000000000000000002020202020200000000000307070700000000000000000a0000000008000000000000000000000000000000000000020202020307090700000000000000000a0a0a0a0a0a000000000000000000000000000000000000000000000507070707000000000000000a0800000a0a000000000000000000000202020202020202020202050507070707070707070707070a080000000000000000000000000000`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . 
. . . . . . . . . . . . 2 2 2 2 . . . . . . . . 2 . . . . 2 2 . . . . . . . . . 
. 2 2 2 2 2 2 . . . . . 2 . . . . . . . . . . . 2 . . . 2 . 2 . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . . . 
. . . . . . . . . . . . 2 . . . . . . . . . . . 2 2 . . . . 2 . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . 2 2 . . . . 2 . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.coral0,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths3,sprites.builtin.coral5,sprites.builtin.oceanDepths4,sprites.dungeon.chestClosed,sprites.dungeon.hazardLava0,sprites.builtin.coral2,sprites.dungeon.hazardLava1,sprites.builtin.brick],
            TileScale.Sixteen
        ))
