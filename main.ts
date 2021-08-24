bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    bluetooth.startLEDService()
    bluetooth.startTemperatureService()
    bluetooth.startIOPinService()
    bluetooth.startButtonService()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(2000)
    a = input.temperature()
    for (let index = 0; index < 3; index++) {
        basic.showNumber(a)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P8, 0)
})
let a = 0
let strip = images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 10) {
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        basic.pause(100)
    } else {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        basic.pause(100)
    }
})
