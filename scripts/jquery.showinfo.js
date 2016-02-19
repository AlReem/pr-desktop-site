"use strict";function addEndingBackslash(t){return"/"!=t.charAt(t.length-1)?t+"/":t}function ScheduleData(t){if(this.data=t,this.estimatedSchedulePosixTime,this.currentShow=new Array,void 0!=t.currentShow)for(var e=0;e<t.currentShow.length;e++)this.currentShow[e]=new Show(t.currentShow[e]);if(this.nextShows=new Array,void 0!=t.nextShow)for(var e=0;e<t.nextShow.length;e++)this.nextShows[e]=new Show(t.nextShow[e]);this.currentTrack=new AudioTrack(t.current),this.nextTrack=new AudioTrack(t.next),this.schedulePosixTime=convertDateToPosixTime(t.schedulerTime);var i=new Date;this.localRemoteTimeOffset=i.getTime()-this.schedulePosixTime}function Show(t){this.showData=t}function AudioTrack(t){this.trackData=t}function getTime(t){var e=t.split(" ")[1].split(":");return e[0]+":"+e[1]}function convertToHHMMSS(t){var e=parseInt(t),i=parseInt(e/36e5);e-=36e5*i;var n=parseInt(e/6e4);e-=6e4*n;var a=parseInt(e/1e3);return i=i.toString(),n=n.toString(),a=a.toString(),1==i.length&&(i="0"+i),1==n.length&&(n="0"+n),1==a.length&&(a="0"+a),"00"==i?n+":"+a:i+":"+n+":"+a}function convertDateToPosixTime(t){var e=t.split(" "),i=e[0].split("-"),n=e[1].split(":"),a=i[0],r=i[1],o=i[2],s=n[0],d=n[1],u=0,c=0;if(-1!=n[2].indexOf(".")){var l=n[2].split(".");u=l[0],c=l[1]}else u=n[2];return Date.UTC(a,r-1,o,s,d,u,c)}function checkWidgetVersion(t){var e=t.AIRTIME_API_VERSION;if(void 0===e||e>AIRTIME_API_VERSION)throw"The version of widgets you are using is out of date with the Airtime installation, please update your widgets javascript file. (Airtime widget API version is "+e+", this widget's API version is "+AIRTIME_API_VERSION+")";if(AIRTIME_API_VERSION>e)throw"The Airtime server has a different version than this widget supports. Please get the correct widget version for your Airtime installation. (Airtime widget API version is "+e+", this widget's API version is "+AIRTIME_API_VERSION+")"}var AIRTIME_API_VERSION="1.1";!function(t){t.fn.airtimeShowSchedule=function(e){var i={updatePeriod:20,sourceDomain:"http://localhost/",text:{onAirToday:"On air today"},showLimit:5};return e=t.extend(!0,i,e),e.sourceDomain=addEndingBackslash(e.sourceDomain),this.each(function(){function i(){var t=o.getCurrentShow(),i=o.getNextShows(),n=0==t.length?i:t.concat(i);tableString="",tableString+="<h3>"+e.text.onAirToday+"</h3>",tableString+="<table width='100%' border='0' cellspacing='0' cellpadding='0' class='widget widget now-playing-list small'><tbody>";for(var a=0;a<n.length;a++){tableString+="<tr><td class='time'>"+n[a].getRange()+"</td>";var r=n[a].getURL();r.length>0?tableString+="<td><a href='"+n[a].getURL()+"'>"+n[a].getName()+"</a></td></tr>":tableString+="<td>"+n[a].getName()+"</td></tr>"}tableString+="</tbody></table>",s.empty(),s.append(tableString)}function n(t){checkWidgetVersion(t),o=new ScheduleData(t),i()}function a(t,e,i){}function r(){t.ajax({url:e.sourceDomain+"api/live-info/",data:{type:"endofday",limit:e.showLimit},dataType:"jsonp",success:function(t){n(t)},error:a}),setTimeout(r,1e3*e.updatePeriod)}var o,s=t(this);r()})}}(jQuery),function(t){t.fn.airtimeLiveInfo=function(e){var i={updatePeriod:5,sourceDomain:"http://localhost/",text:{onAirNow:"On Air Now",offline:"Offline",current:"Current",next:"Next"}};return e=t.extend(!0,i,e),e.sourceDomain=addEndingBackslash(e.sourceDomain),this.each(function(){function i(){if(null!=s){var t=s.getCurrentShow(),i=s.getNextShows(),n=e.text.offline,a="",r="",d="",u="",c="";t.length>0&&(n=e.text.onAirNow,a=t[0].getName(),r=s.getShowTimeElapsed(t[0]),d=s.getShowTimeRemaining(t[0])),i.length>0&&(u=i[0].getName(),c=i[0].getRange()),o.empty(),o.append("<h4>"+n+" &gt;&gt;</h4>"),o.append("<ul class='widget now-playing-bar'><li class='current'>"+e.text.current+": "+a+"<span id='time-elapsed' class='time-elapsed'>"+r+"</span><span id='time-remaining' class='time-remaining'>"+d+"</span></li><li class='next'>"+e.text.next+": "+u+"<span>"+c+"</span></li></ul>")}}function n(t){checkWidgetVersion(t),s=new ScheduleData(t)}function a(t,e,i){}function r(){t.ajax({url:e.sourceDomain+"api/live-info/",data:{type:"interval",limit:"5"},dataType:"jsonp",success:function(t){n(t)},error:a}),setTimeout(r,1e3*e.updatePeriod)}var o=t(this),s=null;r(),setInterval(i,1e3)})}}(jQuery),function(t){t.fn.airtimeLiveTrackInfo=function(e){var i={updatePeriod:5,sourceDomain:"http://localhost/",text:{onAirNow:"On Air Now",offline:"Offline",current:"Current",next:"Next"}};return e=t.extend(!0,i,e),e.sourceDomain=addEndingBackslash(e.sourceDomain),this.each(function(){function i(){if(null!=s){var t=s.getCurrentShow(),i=s.getNextShows(),n=e.text.offline,a="",r="",d="",u="",c="";t.length>0&&(n=e.text.onAirNow,a=t[0].getName(),r=s.getShowTimeElapsed(t[0]),d=s.getShowTimeRemaining(t[0])),i.length>0&&(u=i[0].getName(),c=i[0].getRange()),o.empty(),o.append("<span id='status-current-show' style='display:inline'>"+n+" &gt;&gt;&nbsp;"+a+"</span><span class='current' id='time-elapsed' class='time-elapsed'>"+r+"</span><span class='current' id='time-remaining' class='time-remaining'>"+d+"</span>"),o.append("<ul class='widget now-playing-bar'><li class='current track-metadata'>"+e.text.current+": "+s.currentTrack.getTitle()+"</li><li class='next track-metadata'>"+e.text.next+": "+s.nextTrack.getTitle()+"</span></li></ul>")}}function n(t){checkWidgetVersion(t),s=new ScheduleData(t)}function a(t,e,i){}function r(){t.ajax({url:e.sourceDomain+"api/live-info/",data:{type:"interval",limit:"5"},dataType:"jsonp",success:function(t){n(t)},error:a}),setTimeout(r,1e3*e.updatePeriod)}var o=t(this),s=null;r(),setInterval(i,1e3)})}}(jQuery),function(t){t.fn.airtimeWeekSchedule=function(e){var i={sourceDomain:"http://localhost/",updatePeriod:600,dowText:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday",nextmonday:"Next Monday",nexttuesday:"Next Tuesday",nextwednesday:"Next Wednesday",nextthursday:"Next Thursday",nextfriday:"Next Friday",nextsaturday:"Next Saturday",nextsunday:"NextSunday"},miscText:{time:"Time",programName:"Program Name",details:"Details",readMore:"Read More"}};return e=t.extend(!0,i,e),e.sourceDomain=addEndingBackslash(e.sourceDomain),this.each(function(){function i(i){for(var n=0;n<s.length;n++){for(var a='<table class="widget widget now-playing-list"><colgroup><col width="150" /><col width="350" /><col width="240" /></colgroup><thead><tr><td>'+e.miscText.time+"</td><td>"+e.miscText.programName+"</td><td>"+e.miscText.details+"</td></tr></thead><tfoot><tr><td></td></tr></tfoot><tbody>",r=i[s[n]],o=0;o<r.length;o++){var d=r[o].url;a+="<tr><td>"+getTime(r[o].start_timestamp)+" - "+getTime(r[o].end_timestamp)+"</td><td><h4>"+r[o].name+"</h4></td><td><ul><li>"+(d.length>0?'<a href="'+d+'">'+e.miscText.readMore+"</a>":"")+"</li></ul></td></tr>"}a+="</tbody></table>",t("#"+s[n]).empty(),t("#"+s[n]).append(a)}}function n(t){checkWidgetVersion(t),i(t)}function a(t,e,i){}function r(){t.ajax({url:e.sourceDomain+"api/week-info/",dataType:"jsonp",success:function(t){n(t)},error:a}),setTimeout(r,1e3*e.updatePeriod)}var o=t(this);o.empty(),o.attr("class","ui-tabs");var s=["monday","tuesday","wednesday","thursday","friday","saturday","sunday","nextmonday","nexttuesday","nextwednesday","nextthursday","nextfriday","nextsaturday","nextsunday"],d=new Date,u=d.getDay()-1;0>u&&(u+=7);for(var c="<ul>",l=0;l<s.length;l++)c+="<li"+(l==u?' class="ui-tabs-selected ui-state-active"':"")+'><a href="#'+s[l]+'">'+e.dowText[s[l]]+"</a></li>";c+="</ul>";for(var l=0;l<s.length;l++)c+='<div id="'+s[l]+'" class="ui-tabs-hide"></div>';o.append(c),r()})}}(jQuery),ScheduleData.prototype.secondsTimer=function(){var t=new Date;this.estimatedSchedulePosixTime=t.getTime()-this.localRemoteTimeOffset},ScheduleData.prototype.getCurrentShow=function(){return this.currentShow},ScheduleData.prototype.getNextShows=function(){return this.nextShows},ScheduleData.prototype.getShowTimeElapsed=function(t){this.secondsTimer();var e=convertDateToPosixTime(t.getStartTimestamp());return convertToHHMMSS(this.estimatedSchedulePosixTime-e)},ScheduleData.prototype.getShowTimeRemaining=function(t){this.secondsTimer();var e=convertDateToPosixTime(t.getEndTimestamp());return convertToHHMMSS(e-this.estimatedSchedulePosixTime)},Show.prototype.getURL=function(){return this.showData.url},Show.prototype.getName=function(){return this.showData.name},Show.prototype.getRange=function(){return getTime(this.showData.start_timestamp)+" - "+getTime(this.showData.end_timestamp)},Show.prototype.getStartTimestamp=function(){return this.showData.start_timestamp},Show.prototype.getEndTimestamp=function(){return this.showData.end_timestamp},AudioTrack.prototype.getTitle=function(){return null===this.trackData?"":this.trackData.name};