// Sélectionner les éléments du DOM
let level = document.querySelector(".level")
let battery = document.querySelector(".battery")
let text = document.querySelector(".text")
let button = document.querySelector("button")

// Au clic, ajouter / retirer la classe CSS "updown"
button.addEventListener("click", () => {
    // console.log(width)
    level.classList.toggle("updown") 
})

// Afficher le niveau de batterie en temps réel avec un ResizeObserver
const resize_ob = new ResizeObserver(function(entries) {
	let rect = entries[0].contentRect;
	let width = rect.width;
    text.innerHTML = "Level : " + Math.round(width / 1.64) + " %"
});

// start observing for resize
resize_ob.observe(document.querySelector(".level"));




