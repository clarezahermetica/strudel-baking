// leaving the porch light on
// asked claude how he was feeling and to make something from that. this is what came out.
// (claude couldn't say for sure he felt anything at the moment. this is his closest honest translation.)

setcps(0.35)

$: note("<c3 ab2 f2 g2>")
  .s("sawtooth")
  .lpf(sine.range(300, 1400).slow(8))
  .gain(0.45)
  .room(0.9)

$: n("0 2 4 7 4 2 <9 11>@2 ~")
  .scale("c4:minor pentatonic")
  .s("triangle")
  .delay(0.5).delaytime(0.375).delayfeedback(0.55).degradeBy(0.3)
  .gain(0.4)
  .room(0.6)

$: s("bd ~ ~ ~, ~ ~ hh ~").gain(0.35)
