$('.btn-launch').click(function(){
  event.preventDefault();
  $('.lead-text, .lead-button, .cover-heading').removeClass('animation-entry').addClass('animation-exit');
  $('.lead-button').one(animationEvent,
              function(event) {
    $('.inner.cover').css('display', 'none');
    $('.main-content').css('display', 'block');
    $('.site-wrapper, .site-wrapper-inner').addClass('transit-wrapper');
    $('.masthead, .mastfoot').css('position', 'static');
    $('.logo, .prose').addClass('animation-entry2');
  });
});

// Function from David Walsh: http://davidwalsh.name/css-animation-callback
function whichanimationEvent(){
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "Oanimation"     : "oanimationEnd",
    "Mozanimation"   : "animationend",
    "Webkitanimation": "webkitanimationEnd"
  };

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
}

var animationEvent = whichanimationEvent();
