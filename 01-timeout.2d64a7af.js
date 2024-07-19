var logMessage=function(){console.log("Лог при виклику callback-функціїї через 3 секунди")};console.log("до виклику setTimeout"),setTimeout((function(){console.log("в середині функціїї setTimeout")}),2e3),console.log("після виклику setTimeout");for(var i=0;i<1e5;i++)console.log(i);
//# sourceMappingURL=01-timeout.2d64a7af.js.map
