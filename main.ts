input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Dino_oben.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    Dino_oben.change(LedSpriteProperty.Y, 1)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Dino_oben = game.createSprite(1, 1)
    basic.pause(500)
    for (let index = 0; index < randint(1, 10); index++) {
        Kaktus_oben = game.createSprite(4, 1)
        basic.pause(500)
        Kaktus_oben.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        Kaktus_oben.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        if (Dino_oben.isTouching(Kaktus_oben)) {
            game.removeLife(1)
        }
        Kaktus_oben.change(LedSpriteProperty.X, -1)
        if (Dino_oben.isTouching(Kaktus_oben)) {
            game.removeLife(1)
        }
        basic.pause(500)
        Kaktus_oben.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        Kaktus_oben.change(LedSpriteProperty.X, -1)
        Kaktus_oben.delete()
    }
    game.setLife(10)
    Dino = game.createSprite(1, 4)
    basic.pause(500)
    for (let index = 0; index < randint(1, 10); index++) {
        Kaktus = game.createSprite(4, 4)
        basic.pause(500)
        Kaktus.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        Kaktus.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        if (Dino.isTouching(Kaktus)) {
            game.removeLife(1)
        }
        Kaktus.change(LedSpriteProperty.X, -1)
        if (Dino.isTouching(Kaktus)) {
            game.removeLife(1)
        }
        basic.pause(500)
        Kaktus.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        Kaktus.change(LedSpriteProperty.X, -1)
        Kaktus.delete()
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Dino.change(LedSpriteProperty.Y, -1)
    basic.pause(1000)
    Dino.change(LedSpriteProperty.Y, 1)
})
let Kaktus: game.LedSprite = null
let Dino: game.LedSprite = null
let Kaktus_oben: game.LedSprite = null
let Dino_oben: game.LedSprite = null
game.setLife(10)
