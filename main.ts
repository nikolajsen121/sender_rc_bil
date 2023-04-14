radio.setFrequencyBand(0)
radio.setTransmitPower(7)
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("r")
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendString("l")
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else if (input.rotation(Rotation.Pitch) > 25) {
        radio.sendString("b")
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else if (input.rotation(Rotation.Pitch) < -15) {
        radio.sendString("f")
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
