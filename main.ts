let NHIETDO = 0
NPNLCD.LcdInit()
NPNLCD.ShowString("Xin chao", 0, 0)
basic.forever(function () {
    NHIETDO = MLX90614.temperature(TemperatureLocation.Object) + 3.1
    NPNLCD.clear()
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    if (NHIETDO <= 35) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        NPNLCD.ShowString("MOI TRUONG:" + NHIETDO, 0, 0)
        NPNLCD.ShowString("KHI HAU TOT!", 2, 1)
    } else {
        if (NHIETDO <= 38) {
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            music.playTone(988, music.beat(BeatFraction.Whole))
            NPNLCD.ShowString("NHIET DO: " + NHIETDO, 0, 0)
            NPNLCD.ShowString("HEN GAP LAI!", 2, 1)
        } else {
            NPNLCD.ShowString("NHIET DO: " + NHIETDO, 0, 0)
            NPNLCD.ShowString("NGUY HIEM!", 3, 1)
            for (let index = 0; index <= 9; index++) {
                pins.digitalWritePin(DigitalPin.P1, 1)
                pins.digitalWritePin(DigitalPin.P2, 0)
                music.playTone(988, music.beat(BeatFraction.Whole))
                pins.digitalWritePin(DigitalPin.P1, 0)
                music.rest(music.beat(BeatFraction.Whole))
                basic.pause(10)
            }
        }
    }
    basic.pause(1000)
})
