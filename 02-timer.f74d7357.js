!function(){var e=new Date,n=document.querySelector(".js-btn");n.disabled=!0;var o=null,t={enableTime:!0,time_24hr:!0,defaultDate:e,minuteIncrement:1,onClose:function(t){console.log(t[0]),t[0]<e?(window.alert("Please choose a date in the future"),n.disabled=!0):(n.disabled=!1,o=t[0])}};function r(e){var n=6e4,o=36e5,t=24*o;return{days:Math.floor(e/t),hours:Math.floor(e%t/o),minutes:Math.floor(e%t%o/n),seconds:Math.floor(e%t%o%n/1e3)}}function l(e){return e.toString().padStart(2,"0")}flatpickr(document.querySelector("#datetime-picker"),t),console.log(r(2e3)),console.log(r(14e4)),console.log(r(2414e4)),n.addEventListener("click",(function(){setInterval((function(){var e,t;n.disabled=!0,e=new Date,t=r(o-e),document.querySelector(".value-days").innerHTML=l(t.days),document.querySelector(".value-hours").innerHTML=l(t.hours),document.querySelector(".value-minutes").innerHTML=l(t.minutes),document.querySelector(".value-seconds").innerHTML=l(t.seconds)}),1e3)}))}();
//# sourceMappingURL=02-timer.f74d7357.js.map