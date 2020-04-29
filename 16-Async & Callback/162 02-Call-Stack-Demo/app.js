const btn = document.getElementById("btn");

const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const elemRight = btn.getBoundingClientRect().right;
			const elemLeft = btn.getBoundingClientRect().left;
			const boundry = document.body.clientWidth;

			if (elemRight + amount > boundry) {
				reject({ boundry, elemLeft, amount });
			} else {
				element.style.transform = `translateX(${elemLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

async function callMove() {
	try {
		await moveX(btn, 200, 1000);
		await moveX(btn, 300, 1000);
		await moveX(btn, 200, 1000);
		await moveX(btn, 300, 1000);
		await moveX(btn, 300, 1000);
		await moveX(btn, 300, 1000);
	} catch (err) {
		console.log("OOPs!", err);
	}
}
callMove();

// moveX(btn, 200, 1000)
// 	.then(() => moveX(btn, 300, 1000))
// 	.then(() => moveX(btn, 200, 1000))
// 	.then(() => moveX(btn, 300, 1000))
// 	.then(() => moveX(btn, 300, 1000))
// 	.then(() => moveX(btn, 300, 1000))
// 	.catch(({ boundry, elemLeft, amount }) => {
// 		console.log("screen width: ", boundry);
// 		console.log("current width: ", elemLeft);
// 		console.log("is too large: ", amount);
// 	});

// const moveX = (element, amount, delay, onSuccess, onFail) => {
// 	const elemRight = btn.getBoundingClientRect().right;
// 	const elemLeft = btn.getBoundingClientRect().left;
// 	const boundry = document.body.clientWidth;

// 	if (elemRight + amount > boundry) {
// 		onFail();
// 	} else {
// 		setTimeout(() => {
// 			element.style.transform = `translateX(${elemLeft + amount}px)`;
// 			onSuccess();
// 		}, delay);
// 	}
// };

// moveX(btn, 100, 1000, () => {
// 	moveX(
// 		btn,
// 		200,
// 		1000,

// 		() => {
// 			moveX(
// 				btn,
// 				300,
// 				1000,

// 				() => {
// 					moveX(
// 						btn,
// 						100,
// 						1000,

// 						() => {
// 							moveX(
// 								btn,
// 								1100,
// 								1000,
// 								() => {
// 									console.log("callbak hell");
// 								},
// 								() => {
// 									console.log("You cant move further");
// 								}
// 							);
// 						}
// 					);
// 				}
// 			);
// 		}
// 	);
// });
