!function(){var e={btnListEl:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),error:document.querySelector(".error")};function s(s){e.loader.classList.remove("visible"),e.loader.classList.add("hidden"),e.btnListEl.classList.add("visible"),e.btnListEl.classList.remove("hidden")}(e.loader.classList.remove("hidden"),e.loader.classList.add("visible"),e.btnListEl.classList.add("hidden"),void e.btnListEl.classList.remove("visible"),e.error.classList.remove("visible"),void e.error.classList.add("hidden"),fetch("https://api.thecatapi.com/v1/breeds").then((function(e){return e.json()}))).then((function(t){t.map((function(t){var i=t.id,d=t.name,r=document.createElement("option");r.value=i,r.text=d,e.btnListEl.add(r),s()}))})).catch((function(t){s(),e.error.classList.remove("hidden"),e.error.classList.add("visible"),e.btnListEl.classList.add("hidden"),e.btnListEl.classList.remove("visible")}))}();
//# sourceMappingURL=catSerach.57c9087b.js.map
