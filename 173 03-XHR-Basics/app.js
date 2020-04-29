// const firstReq = new XMLHttpRequest();

// firstReq.addEventListener("load", function () {
// 	const data = JSON.parse(this.responseText);
// 	console.log(data);
// 	const filmData = data.results[1].films[1];

// 	const reqFilm = new XMLHttpRequest();
// 	reqFilm.addEventListener("load", function () {
// 		const filmData = JSON.parse(this.responseText);
// 		console.log(filmData);
// 	});
// 	reqFilm.addEventListener("error", function (e) {
// 		console.log("error", e);
// 	});

// 	reqFilm.open("GET", filmData);
// 	reqFilm.send();
// });

// firstReq.addEventListener("error", () => console.log("error"));
// firstReq.open("GET", "https://swapi.dev/api/planets/");
// firstReq.send();
// const checkReqAndParse = (req) => {
// 	if (!req.ok) {
// 		throw new Error(`Status code: ${req.status}`);
// 	}
// 	return req.json();
// };

// const printFilmNames = (films) => {
// 	for (const film of films.results) {
// 		console.log(film.name);
// 	}
// 	return Promise.resolve(films);
// };

// const fetchNextPage = (url = "https://swapi.dev/api/planets/") => {
// 	const fetchNext = fetch(url);
// 	return fetchNext;
// };

// fetchNextPage()
// 	.then((response) => checkReqAndParse(response))
// 	.then((data) => printFilmNames(data))
// 	.then((data) => fetchNextPage(data.next))
// 	.then((response) => checkReqAndParse(response))
// 	.then((data) => printFilmNames(data))
// 	.then((data) => fetchNextPage(data.next))
// 	.then((res) => checkReqAndParse(res))
// 	.then((res) => printFilmNames(res))
// 	.catch((e) => console.log(e));
//https://api.jikan.moe/v3
// fetch("https://randomuser.me/api/?results=10")
// 	.then((i) => {
// 		return i.json();
// 	})
// 	.then((x) => {
// 		for (const i of x.results) {
// 			const img = document.createElement("img");
// 			img.src = i.picture["large"];
// 			document.body.append(img)
// 			console.log(i.picture["large"]);
// 		}
// 	});

const fetchAndParse = (url = "https://swapi.dev/api/planets/") => {
	return axios.get(url);
};

const print = (data) => {
	for (const planet of data.results) {
		console.log(planet.name);
	}
};

fetchAndParse()
	.then(({ data }) => {
		console.log(data.results);
		return fetchAndParse(data.next);
	})
	.then(({ data }) => {
		print(data);
	})
	.then(({ data }) => {
		print(data);
	})
	.catch((err) => {
		console.log(err);
	});
