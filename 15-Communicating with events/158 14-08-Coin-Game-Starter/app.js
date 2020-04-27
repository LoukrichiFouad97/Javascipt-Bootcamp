// function isTouching(a, b) {
// 	const aRect = a.getBoundingClientRect();
// 	const bRect = b.getBoundingClientRect();

// 	return !(
// 		aRect.top + aRect.height < bRect.top ||
// 		aRect.top > bRect.top + bRect.height ||
// 		aRect.left + aRect.width < bRect.left ||
// 		aRect.left > bRect.left + bRect.width
// 	);
// }

// const player = document.getElementById("player");
// const coin = document.getElementById("coin");

// window.addEventListener("keydown", function (e) {
// 	let currentTop = convert(player.style.top);
// 	let currentLeft = convert(player.style.left);
// 	let position;

// 	if (e.key === "ArrowDown") {
// 		position = `${currentTop + 50}px`;

// 		if (parseInt(position) < window.innerHeight - player.height) {
// 			player.style.top = position;
// 		}
// 	} else if (e.key === "ArrowUp") {
// 		position = `${currentTop - 50}px`;

// 		if (parseInt(position) > 0) {
// 			player.style.top = position;
// 		}
// 	} else if (e.key === "ArrowRight") {
// 		position = `${currentLeft + 50}px`;

// 		if (parseInt(position) < window.innerWidth - player.width) {
// 			player.style.left = position;
// 			player.style.transform = "scale(1,1)";
// 		}
// 	} else if (e.key === "ArrowLeft") {
// 		position = `${currentLeft - 50}px`;

// 		if (parseInt(position) > 0) {
// 			player.style.left = position;
// 			player.style.transform = "scale(-1,1)";
// 		}
// 	}

// 	if (isTouching(player, coin)) {
// 		moveCoin();
// 	}
// });

// function convert(str) {
// 	if (!str) return 0;
// 	return parseInt(str.slice(0, -2));
// }

// function moveCoin() {
// 	// setInterval(() => {
// 	let height = Math.floor(Math.random() * window.innerWidth);
// 	let width = Math.floor(Math.random() * window.innerHeight);
// 	coin.style.top = `${height}px`;
// 	coin.style.left = `${width}px`;
// 	// }, 4000);
// }
// moveCoin();

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
	e.preventDefault();
});
