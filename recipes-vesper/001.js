// vesper's first experiment :) 136 BPM / D minor / 16-bar cycle

setcpm(136 / 4)

stack(

  note("<[d3,f3,a3,c4] [bb2,d3,f3,a3] [f3,a3,c4,e4] [c3,e3,g3,bb3]>")
    .s("sawtooth")
    .attack(.35)
    .decay(.4)
    .sustain(.6)
    .release(1.5)
    .lpf(sine.range(450,1500).slow(8))
    .room(.7)
    .orbit(2)
    .gain(.15),

  note("<[a4 c5 a4 f4] [f4 a4 d5 c5] [a4 c5 e5 c5] [g4 bb4 e5 d5]>")
    .s("triangle")
    .fm(2)
    .attack(.01)
    .decay(.3)
    .sustain(.08)
    .release(.5)
    .room(.6)
    .delay(.25)
    .gain(.26),

  s("bd*4")
    .bank("RolandTR909")
    .gain(.7)
    .mask("<0!4 1!12>"),

  s("~ sd ~ sd")
    .bank("RolandTR909")
    .room(.14)
    .gain(.4)
    .mask("<0!4 1!12>"),

  note("<[d2 d2 ~ d2] [bb1 bb1 ~ bb1] [f2 f2 ~ f2] [c2 c2 ~ c2]>")
    .s("sawtooth")
    .lpf(380)
    .decay(.2)
    .sustain(0)
    .release(.08)
    .distort(1.5)
    .gain(.4)
    .mask("<0!4 1!12>"),

  s("hh*8")
    .bank("RolandTR909")
    .gain("[.12 .3]*4")
    .pan("<.3 .7>")
    .mask("<0!8 1!8>"),

  s("pink*16")
    .decay(.025)
    .sustain(0)
    .hpf(7000)
    .gain(.045)
    .mask("<0!8 1!8>"),

  note("[d5 f5 a5 c6]*2")
    .s("square")
    .attack(.001)
    .decay(.07)
    .sustain(0)
    .release(.04)
    .lpf("<1400 5000 900 4000>")
    .crush("<8 5 3 6>")
    .pan("<.1 .9>")
    .delay(.16)
    .gain(.08)
    .mask("<0!12 1!4>"),

  s("sd*8")
    .bank("RolandTR909")
    .crush(5)
    .gain(.17)
    .mask("<0!15 1>")

)
