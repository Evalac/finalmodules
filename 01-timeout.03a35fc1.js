var logMessage=function(){console.log("Лог при виклику callback-функціїї через 3 секунди")};console.log("до виклику setTimeout"),setTimeout((function(){console.log("в середині функціїї setTimeout")}),2e3),console.log("після виклику setTimeout");for(var i=0;i<1e4;i++)console.log(i);
//# sourceMappingURL=01-timeout.03a35fc1.js.map
