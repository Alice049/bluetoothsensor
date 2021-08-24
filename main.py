def on_button_pressed_a():
    pins.digital_write_pin(DigitalPin.P8, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pins.digital_write_pin(DigitalPin.P8, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

def on_forever():
    if pins.analog_read_pin(AnalogPin.P0) > 10:
        pins.digital_write_pin(DigitalPin.P8, 0)
        basic.show_number(pins.analog_read_pin(AnalogPin.P0))
        basic.pause(100)
        strip.show_color(neopixel.colors(NeoPixelColors.GREEN))
    else:
        pins.digital_write_pin(DigitalPin.P8, 1)
        basic.show_number(pins.analog_read_pin(AnalogPin.P0))
        basic.pause(100)
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
basic.forever(on_forever)
