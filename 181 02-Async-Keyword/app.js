async function getPlanets() {
	try {
		const data = await fetch("https://swapi.dev/api/planets/");
		const readData = await data.json();
		const { results } = readData;
		console.log(results);
	} catch (e) {
		console.log("Oops!", e);
	}
}

getPlanets().catch((err) => {
	console.log("Oops!", err);
});
