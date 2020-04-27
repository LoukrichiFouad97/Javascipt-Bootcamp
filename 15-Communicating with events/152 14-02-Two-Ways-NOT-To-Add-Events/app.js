const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("click", function () {
	setTimeout(() => {
		this.style.opacity = "0";
	}, 2000);
});
