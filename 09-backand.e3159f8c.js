!function(){var c=document.querySelector(".pokecart");fetch("https://pokeapi.co/api/v2/pokemon/1").then((function(c){return c.json()})).then((function(n){console.log(n),function(n){var t='<div class="card">\n      <div class="card-img-top">\n        <img src="'.concat(n.sprites.front_default,'" alt="').concat(n.name,'" />\n      </div>\n      <div class="card-body">\n        <h2 class="card-title">').concat(n.name,'</h2>\n        <p class="card-text">Вага: ').concat(n.weight,'</p>\n        <p class="card-text">Ріст: ').concat(n.height,'</p>\n        <p class="card-text"><b>Вміння</b></p>\n        <ul class="clas-list-group">\n          ').concat(n.abilities.map((function(c){return'<li class="clas-list-item">'.concat(c.ability.name,"</li>")})).join(""),"\n        </ul>\n      </div>\n    </div>");c.insertAdjacentHTML("beforeend",t)}(n)})).catch((function(c){console.log(c)}))}();
//# sourceMappingURL=09-backand.e3159f8c.js.map
