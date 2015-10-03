// TimelineMax
var tl = new TimelineMax({repeat:-1});

tl.from('path#prlogo-pee', 2,  {
  opacity: 0,
  y:-20,
  scale: 2,
  ease:Elastic.easeOut
}, "pee")
.fromTo('path#prlogo-smallwave', 2,  {
  opacity: 0,
  x:-10,
  y:15,
  ease:Elastic.easeOut.config(1, 0.5),
  scale: 0.7
}, {
  opacity: 1,
  x:0,
  y:0,
  ease:Elastic.easeOut.config(1, 0.5),
  scale: 1
}, "pee+=0.4")
.fromTo('path#prlogo-bigwave', 2,  {
  opacity: 0,
  x:-10,
  y:15,
  ease:Elastic.easeOut.config(1, 0.5),
  scale: 0.7
}, {
  opacity: 1,
  x:0,
  y:0,
  ease:Elastic.easeOut.config(1, 0.5),
  scale: 1
}, "pee+=0.8")
.staggerFromTo('g#prlogotextgroup path', 1, {
  x:-20, y:5,
  scale: 0.8,
  ease:Elastic.easeIn.config(1, 0.5)
}, {
  opacity:1,
  x:0, y:0,
  scale: 1,
  ease:Elastic.easeIn.config(1, 0.5)
}, 0.05, "pee+=0.5")

/*delay*/

.to('', 6, {})

/*going back*/

.staggerTo($('g#prlogotextgroup path').get().reverse(), 1, {
  opacity: 0,
  x:20, y:0,
  scale: 1,
  ease:Elastic.easeIn.config(1, 0.5)
}, 0.05, "goingBack")

.to('path#prlogo-bigwave', 0.5,  {
  opacity: 0,
  x:20,
  y:-9,
  ease: Power4.easeInOut,
  scale: 1.2 },
   "-=0.25")
.to('path#prlogo-smallwave', 0.5,  {
  opacity: 0,
  x:20,
  y:-9,
  ease: Power4.easeInOut,
  scale: 1.2 },
  "-=0.25")
.to('path#prlogo-pee', 0.5,  {
  opacity: 0,
  x:20,
  y:-9,
  ease: Power4.easeInOut,
  scale: 1.2 },
  "-=0.25")
/*delay*/

.to('', 1, {});
