<<<<<<< HEAD
function doTitleChangeAnimation(){"use strict";titleChangeAnimation.to(".temp-title",.6,{opacity:0,y:-10,ease:Power4.easeOut,onComplete:removeTemp},"+=0").to(".show-info",.6,{css:{maxWidth:"200px"},ease:Power4.easeOut},"+=0.3").fromTo(".peaceradio-loading",.6,{y:10,scale:1},{display:"block",opacity:1,y:0,scale:1,ease:Power4.easeOut},"+=0.1").fromTo(".peaceradio-loading",.6,{y:0},{display:"none",opacity:0,y:-10,scale:1,ease:Power4.easeOut},"+=2").to(".show-info",.6,{css:{maxWidth:"530px"},ease:Power4.easeOut},"-=0.1").fromTo(".current-show",.6,{y:10},{display:"block",opacity:1,y:0,ease:Power4.easeOut},"+=0").fromTo(".current",.6,{y:10},{display:"block",opacity:1,y:0,ease:Power4.easeOut},"-=0.4")}function removeTemp(){"use strict";$(".temp-title").remove()}var titleChangeAnimation=new TimelineMax({repeat:0});$(document).ready(function(){$("#headerLiveHolder span.text").peaceRadioLiveTrackInfo({sourceDomain:"http://schedule.peaceradio.com",text:{onAirNow:"On Air",offline:"Offline",current:$(".track-metadata").text(),next:"Next"},updatePeriod:15})}),function(e){e.fn.peaceRadioLiveTrackInfo=function(t){var o={updatePeriod:15,sourceDomain:"http://localhost/",text:{onAirNow:"On Air Now",offline:"Offline",current:"Playing",next:"Next"}};return t=e.extend(!0,o,t),t.sourceDomain=addEndingBackslash(t.sourceDomain),this.each(function(){function o(){if(null!==c){if(!navigator.onLine)return void e(".current").text("Could not connect to Peace Radio");var o=c.getCurrentShow(),a=c.getNextShows(),n=c.currentTrack.getTitle(),i=t.text.offline,s="",l="",u="",d="",p="",f=e(".current").text(),f=e(".current-show").text();o.length>0?(i=t.text.onAirNow,s=o[0].getName(),n=c.currentTrack.getTitle(),l=c.getShowTimeElapsed(o[0]),u=c.getShowTimeRemaining(o[0]),0===n.length?n="No broadcast for this program.":n.indexOf("#peaceradio")>-1&&(n="Stay tuned for the next program")):(i=t.text.offline,s="No Broadcast",n="Peace Radio will be right back! In sha Allah"),a.length>0&&(d=a[0].getName(),p=a[0].getRange()),f!=s&&(r.find("li.current").addClass("temp-title").removeClass("current"),r.find("li.current-show").addClass("temp-title").removeClass("current-show"),r.children("ul").append("<li class='current-show display-none'>"+s+"</li>"),r.children("ul").append("<li class='current display-none'>"+n+"</li>"),doTitleChangeAnimation())}}function a(e){checkWidgetVersion(e),c=new ScheduleData(e)}function n(t,o,a){e(".current").text("Could not connect to Peace Radio")}function i(){e.ajax({url:t.sourceDomain+"api/live-info/",data:{type:"interval",limit:"5"},dataType:"json",success:function(e){a(e)},error:n}),setTimeout(i,1e3*t.updatePeriod)}var r=e(this),c=null;i(),o(),setInterval(o,1e4)})}}(jQuery);
=======
function doTitleChangeAnimation(){"use strict";titleChangeAnimation.to(".temp-title",.6,{opacity:0,y:-10,ease:Power4.easeOut,onComplete:removeTemp},"+=0").to(".show-info",.6,{css:{maxWidth:"200px"},ease:Power4.easeOut},"+=0.3").fromTo(".peaceradio-loading",.6,{y:10,scale:1},{display:"block",opacity:1,y:0,scale:1,ease:Power4.easeOut},"+=0.1").fromTo(".peaceradio-loading",.6,{y:0},{display:"none",opacity:0,y:-10,scale:1,ease:Power4.easeOut},"+=2").to(".show-info",.6,{css:{maxWidth:"530px"},ease:Power4.easeOut},"-=0.1").fromTo(".current-show",.6,{y:10},{display:"block",opacity:1,y:0,ease:Power4.easeOut},"+=0")}function removeTemp(){"use strict";$(".temp-title").remove()}var titleChangeAnimation=new TimelineMax({repeat:0});$(document).ready(function(){$("#headerLiveHolder span.text").peaceRadioLiveTrackInfo({sourceDomain:"http://schedule.peaceradio.com",text:{onAirNow:"On Air",offline:"Offline",current:$(".track-metadata").text(),next:"Next"},updatePeriod:15})}),function(e){e.fn.peaceRadioLiveTrackInfo=function(t){var o={updatePeriod:15,sourceDomain:"http://localhost/",text:{onAirNow:"On Air Now",offline:"Offline",current:"Playing",next:"Next"}};return t=e.extend(!0,o,t),t.sourceDomain=addEndingBackslash(t.sourceDomain),this.each(function(){function o(){if(null!==c){var o=c.getCurrentShow(),a=c.getNextShows(),n=c.currentTrack.getTitle(),i=t.text.offline,s="",l="",u="",d="",f="",h=e(".current-show").text();o.length>0?(i=t.text.onAirNow,s=o[0].getName(),n=c.currentTrack.getTitle(),l=c.getShowTimeElapsed(o[0]),u=c.getShowTimeRemaining(o[0]),0===n.length||n.indexOf("#peaceradio")>-1&&(n="Stay tuned for the next program")):(i=t.text.offline,s="No Broadcast",n="Peace Radio will be right back! In sha Allah"),a.length>0&&(d=a[0].getName(),f=a[0].getRange()),h!=s&&(r.find("li.current-show").addClass("temp-title").removeClass("current-show"),r.children("ul").append("<li class='current-show display-none'>"+s+"</li>"),doTitleChangeAnimation())}}function a(e){checkWidgetVersion(e),c=new ScheduleData(e)}function n(t,o,a){e(".current").text("Could not connect to Peace Radio")}function i(){e.ajax({url:t.sourceDomain+"api/live-info/",data:{type:"interval",limit:"5"},dataType:"json",success:function(e){a(e)},error:n}),setTimeout(i,1e3*t.updatePeriod)}var r=e(this),c=null;i(),setInterval(o,1e4)})}}(jQuery);
>>>>>>> 77ca0ead794157d6315c9f9e132766359c99f49a
