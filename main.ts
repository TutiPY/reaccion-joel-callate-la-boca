input.onButtonPressed(Button.A, function () {
    if (running) {
        running = false
        end = input.runningTime()
        Winner = 2
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.pause(1000)
        basic.showNumber(end - start)
    } else if (Winner == 1) {
    	
    } else {
        false_start = true
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . # .
            . . # . #
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    running = false
    false_start = false
    Winner = 0
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(1000 + randint(0, 2000))
    if (!(false_start)) {
        start = input.runningTime()
        running = true
        led.stopAnimation()
        basic.clearScreen()
        led.plotBrightness(randint(0, 4), randint(0, 4), 255)
    }
})
input.onButtonPressed(Button.B, function () {
    if (running) {
        running = false
        end = input.runningTime()
        Winner = 1
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.showNumber(end - start)
    } else if (Winner == 2) {
    	
    } else {
        false_start = true
        basic.showLeds(`
            . . . . .
            # . # . .
            . # . . .
            # . # . .
            . . . . .
            `)
    }
})
let Winner = 0
let start = 0
let end = 0
let false_start = false
let running = false
running = false
false_start = false
end = 0
start = 0
Winner = 0
