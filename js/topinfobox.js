// TimelineMax
var tl = new TimelineMax({
  repeat: -1
});

var tl2 = new TimelineMax({
  repeat: 0
});

tl.staggerFromTo('.circle', 0.5, {
  scale: 0.1,
  opacity: 0
}, {
  opacity: 1,
  scale: 1.2
}, 0.3);

tl2.fromTo('.activity', 1,
           {
  top:50,
  opacity: 0
}, {
  top:0,
  opacity: 1
}, 1);
