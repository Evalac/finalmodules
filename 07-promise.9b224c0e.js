!function(){new Promise((function(n,o){var t=Math.random()>.5;setTimeout((function(){t&&n("promise виконан успішно"),o("Promise виконан з помилкою")}),1e3)})).then((function(n){console.log("onFulfilled: ".concat(n))}),(function(n){console.log("onRejected: ".concat(n))}));var n;new Promise((function(n,o){var t=Math.random()>.5;setTimeout((function(){t&&n("promise виконан успішно"),o("promise виконан з помилкою")}),2e3)})).then((function(n){return console.log(n),10})).then((function(n){throw console.log(2*n),new Error("помилка в другом then")})).then((function(n){console.log(2*n)})).catch((function(n){console.log(n)})).finally((function(){console.log("я буду виконан в будь якому випадку")}));(n="Борщ",new Promise((function(o,t){var c=Math.random()>.5;setTimeout((function(){c&&o("Ось Ваша страва ".concat(n)),t("Перепрошую цієї страви немає ".concat(n))}),3e3)}))).then((function(n){console.log(n)})).catch((function(n){console.log(n)})).finally((function(){console.log("Бажаэете що не буть ще?")}));{var o=function(n){return fetch("https://pokeapi.co/api/v2/pokemon/".concat(n)).then((function(n){return n.json()}))};function t(n){console.log(n)}function c(n){console.log("Цей в блоці catch")}o(1).then(t).catch(c),o(2).then(t).catch(c),o(3).then(t).catch(c)}}();
//# sourceMappingURL=07-promise.9b224c0e.js.map
