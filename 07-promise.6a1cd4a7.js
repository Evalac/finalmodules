new Promise(((o,e)=>{const s=Math.random()>.5;setTimeout((()=>{s&&o("promise виконан успішно"),e("Promise виконан з помилкою")}),1e3)})).then((o=>{console.log(`${o}`)}),(o=>{console.log(`${o}`)}));
//# sourceMappingURL=07-promise.6a1cd4a7.js.map
