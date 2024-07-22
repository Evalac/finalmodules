var timer={start:function(){var t=Date.now();setInterval((function(){var o=getTimeComponents(Date.now()-t);console.log(o)}),1e3)}};function getTimeComponents(t){return{days:Math.floor(t/1e3/60/60/24),hours:Math.floor(t/1e3/60/60)%24,minutes:Math.floor(t/1e3/60)%60,seconds:Math.floor(t/1e3)%60}}timer.start();
//# sourceMappingURL=06-timer.848d7af8.js.map
