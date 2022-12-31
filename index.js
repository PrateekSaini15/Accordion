let accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
	accordions[i].addEventListener("click", function (e) {
		if (e.target.classList.contains("accordion__heading")) {
			this.classList.toggle("active");
		}
	})
}