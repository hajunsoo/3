input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(a)
    a += 1
    a = a
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(a + b)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(b)
    b += -1
    b = b
})
let b = 0
let a = 0
servos.P0.setAngle(90)
a = 90
b = 90
basic.forever(function () {
	
})
