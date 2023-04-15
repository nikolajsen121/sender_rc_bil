input.onButtonPressed(Button.A, function () {
    radio.sendValue("direction", 1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("direction", 0)
})
basic.showIcon(IconNames.SmallDiamond)
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("mgx", input.acceleration(Dimension.X))
    radio.sendValue("mgy", input.acceleration(Dimension.Y))
})
