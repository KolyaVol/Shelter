const petsData = [
	{
		name: "Jennifer",
		img: "./../images/pets-jennifer.png",
		type: "Dog",
		breed: "Labrador",
		description:
			"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
		age: "2 months",
		inoculations: ["none"],
		diseases: ["none"],
		parasites: ["none"],
	},
	{
		name: "Sophia",
		img: "./../images/pets-sophia.png",
		type: "Dog",
		breed: "Shih tzu",
		description:
			"Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
		age: "1 month",
		inoculations: ["parvovirus"],
		diseases: ["none"],
		parasites: ["none"],
	},
	{
		name: "Woody",
		img: "./../images/pets-woody.png",
		type: "Dog",
		breed: "Golden Retriever",
		description:
			"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
		age: "3 years 6 months",
		inoculations: ["adenovirus", "distemper"],
		diseases: ["right back leg mobility reduced"],
		parasites: ["none"],
	},
	{
		name: "Scarlett",
		img: "./../images/pets-scarlet.png",
		type: "Dog",
		breed: "Jack Russell Terrier",
		description:
			"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
		age: "3 months",
		inoculations: ["parainfluenza"],
		diseases: ["none"],
		parasites: ["none"],
	},
	{
		name: "Katrine",
		img: "./../images/pets-katrine.png",
		type: "Cat",
		breed: "British Shorthair",
		description:
			"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
		age: "6 months",
		inoculations: ["panleukopenia"],
		diseases: ["none"],
		parasites: ["none"],
	},
	{
		name: "Timmy",
		img: "./../images/pets-timmy.png",
		type: "Cat",
		breed: "British Shorthair",
		description:
			"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
		age: "2 years 3 months",
		inoculations: ["calicivirus", "viral rhinotracheitis"],
		diseases: ["kidney stones"],
		parasites: ["none"],
	},
	{
		name: "Freddie",
		img: "./../images/pets-freddie.png",
		type: "Cat",
		breed: "British Shorthair",
		description:
			"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
		age: "2 months",
		inoculations: ["rabies"],
		diseases: ["none"],
		parasites: ["none"],
	},
	{
		name: "Charly",
		img: "./../images/pets-charly.png",
		type: "Dog",
		breed: "Jack Russell Terrier",
		description:
			"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
		age: "8 years",
		inoculations: ["bordetella bronchiseptica", "leptospirosis"],
		diseases: ["deafness", "blindness"],
		parasites: ["lice", "fleas"],
	},
];

const petsDrawData = [
	{
		name: "Jennifer",
		img: "./../images/pets-jennifer.png",
		id: 0,
	},
	{
		name: "Sophia",
		img: "./../images/pets-sophia.png",
		id: 1,
	},
	{
		name: "Woody",
		img: "./../images/pets-woody.png",
		id: 2,
	},
	{
		name: "Scarlett",
		img: "./../images/pets-scarlet.png",
		id: 3,
	},
	{
		name: "Katrine",
		img: "./../images/pets-katrine.png",
		id: 4,
	},
	{
		name: "Timmy",
		img: "./../images/pets-timmy.png",
		id: 5,
	},
	{
		name: "Freddie",
		img: "./../images/pets-freddie.png",
		id: 6,
	},
	{
		name: "Charly",
		img: "./../images/pets-charly.png",
		id: 7,
	},
];

const nav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".burger-icon");
const navList = document.querySelector(".nav__list");
const navItem = [...document.getElementsByClassName("nav__item")];
const body = document.body;

burgerBtn.addEventListener("click", () => {
	nav.classList.toggle("active");
	burgerBtn.classList.toggle("active");
	body.classList.toggle("active");
});

nav.addEventListener("click", (e) => {
	if (e.target != navList) {
		burgerBtn.classList.remove("active");
		nav.classList.remove("active");
		body.classList.remove("active");
	}
});

const contacts = document.getElementById("contacts");
const fLocation = document.getElementById("location");

if (window.innerWidth <= 768) {
	contacts.textContent = `For\u00A0questions\u00A0and suggestions`;
	fLocation.textContent = `We\u00A0are\u00A0waiting\u00A0for your\u00A0visit`;
}

const htmlPageCounter = document.getElementById("pets__page-number");
const petsBox = document.getElementById("pets-box");
let arrayOfPets = [];

let pageAmount = 6;
if (window.innerWidth > 1280) {
	pageAmount = 6;
} else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
	pageAmount = 8;
} else if (window.innerWidth < 768) {
	pageAmount = 16;
}

window.addEventListener("resize", () => {
	if (window.innerWidth > 1280) {
		pageAmount = 6;
	} else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
		pageAmount = 8;
	} else if (window.innerWidth < 768) {
		pageAmount = 16;
	}
});

let currentPage = 1;

function mixer(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

for (let i = 0; i < 6; i++) {
	let mixedArr = mixer([...petsDrawData]);
	arrayOfPets.push(...mixedArr);
}
let fakeArray = [...arrayOfPets];

let itemsOnPage = 8;
itemsOnPage = Math.ceil(arrayOfPets.length / pageAmount);
let arrayOfArraysOfPets = [];

window.addEventListener("resize", () => {
	fakeArray = [...arrayOfPets];
	itemsOnPage = Math.ceil(arrayOfPets.length / pageAmount);
});

for (let i = 0; i < pageAmount; i++) {
	arrayOfArraysOfPets.push(fakeArray.splice(0, itemsOnPage));
}

window.addEventListener("resize", () => {
	arrayOfArraysOfPets = [];
	for (let i = 0; i < pageAmount; i++) {
		arrayOfArraysOfPets.push(fakeArray.splice(0, itemsOnPage));
	}
});

const generatePages = (item) => {
	for (let i = 0; i < pageAmount; i++) {
		item.innerHTML += `	
		<section class="pets__slider-page"></section>`;

		let arrayOfPages = [...document.querySelectorAll(".pets__slider-page")];

		for (let j = 0; j < itemsOnPage; j++) {
			arrayOfPages[i].innerHTML += `	
			<div class="pets__slider-item" id=${arrayOfArraysOfPets[i][j].id}item>
				<img src=${arrayOfArraysOfPets[i][j].img} id=${arrayOfArraysOfPets[i][j].id}img alt="${arrayOfArraysOfPets[i][j].name}" >
				<span id=${arrayOfArraysOfPets[i][j].id}span>${arrayOfArraysOfPets[i][j].name}</span>
				<button class="btn btn-secondary pets__slider-item-btn" id=${arrayOfArraysOfPets[i][j].id}btn>
					Learn&nbsp;more
				</button>
			</div>
			`;
		}
	}
};

generatePages(petsBox);
const toPrevPageBtn = document.getElementById("pets__to-prev-page");
const toFirstPageBtn = document.getElementById("pets__to-first-page");
const toNextPageBtn = document.getElementById("pets__to-next-page");
const toLastPageBtn = document.getElementById("pets__to-last-page");

let offset = 3100;
let wiewWidth = 1240;
if (window.innerWidth > 1280) {
	offset = 3100;
	wiewWidth = 1240;
} else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
	offset = 2170;
	wiewWidth = 620;
} else if (window.innerWidth < 768) {
	offset = 2325;
	wiewWidth = 310;
}

window.addEventListener("resize", () => {
	currentPage = 1;
	petsBox.innerHTML = "";
	generatePages(petsBox);
	if (window.innerWidth > 1280) {
		offset = 3100;
		wiewWidth = 1240;
	} else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
		offset = 2170;
		wiewWidth = 620;
	} else if (window.innerWidth < 768) {
		offset = 2325;
		wiewWidth = 310;
	}
});

if (window.innerWidth > 1280) {
	offset = 3100;
	wiewWidth = 1240;
} else if (window.innerWidth < 1280 && window.innerWidth >= 768) {
	offset = 2170;
	wiewWidth = 620;
} else if (window.innerWidth < 768) {
	offset = 2325;
	wiewWidth = 310;
}

const moveTo = (direction) => {
	direction === "left"
		? --currentPage
		: direction === "right"
		? ++currentPage
		: direction === "start"
		? (currentPage = 1)
		: direction === "end"
		? (currentPage = pageAmount)
		: console.log(error);

	petsBox.style.left = offset - wiewWidth * (currentPage - 1) + "px";

	if (currentPage === pageAmount) {
		toNextPageBtn.disabled = true;
		toNextPageBtn.classList.add("disabled");
		toLastPageBtn.disabled = true;
		toLastPageBtn.classList.add("disabled");
	} else {
		toNextPageBtn.disabled = false;
		toNextPageBtn.classList.remove("disabled");
		toLastPageBtn.disabled = false;
		toLastPageBtn.classList.remove("disabled");
	}

	if (currentPage === 1) {
		toPrevPageBtn.disabled = true;
		toPrevPageBtn.classList.add("disabled");
		toFirstPageBtn.disabled = true;
		toFirstPageBtn.classList.add("disabled");
	} else {
		toPrevPageBtn.disabled = false;
		toPrevPageBtn.classList.remove("disabled");
		toFirstPageBtn.disabled = false;
		toFirstPageBtn.classList.remove("disabled");
	}

	window.addEventListener("resize", () => {
		htmlPageCounter.innerText = currentPage;
		setTimeout(() => {
			petsBox.style.left = offset + "px";
		}, 100);
		
	});
	window.addEventListener("resize", () => {
		if (currentPage === pageAmount) {
			toNextPageBtn.disabled = true;
			toNextPageBtn.classList.add("disabled");
			toLastPageBtn.disabled = true;
			toLastPageBtn.classList.add("disabled");
		} else {
			toNextPageBtn.disabled = false;
			toNextPageBtn.classList.remove("disabled");
			toLastPageBtn.disabled = false;
			toLastPageBtn.classList.remove("disabled");
		}

		if (currentPage === 1) {
			toPrevPageBtn.disabled = true;
			toPrevPageBtn.classList.add("disabled");
			toFirstPageBtn.disabled = true;
			toFirstPageBtn.classList.add("disabled");
		} else {
			toPrevPageBtn.disabled = false;
			toPrevPageBtn.classList.remove("disabled");
			toFirstPageBtn.disabled = false;
			toFirstPageBtn.classList.remove("disabled");
		}
	});

	htmlPageCounter.innerText = currentPage;

	toPrevPageBtn.removeEventListener("click", moveTo);
	toNextPageBtn.removeEventListener("click", moveTo);
	toFirstPageBtn.removeEventListener("click", moveTo);
	toLastPageBtn.removeEventListener("click", moveTo);
};

toPrevPageBtn.addEventListener("click", () => moveTo("left"));
toNextPageBtn.addEventListener("click", () => moveTo("right"));

toFirstPageBtn.addEventListener("click", () => moveTo("start"));
toLastPageBtn.addEventListener("click", () => moveTo("end"));

const petsDescr = document.querySelector(".pets-description");

for (let i = 0; i < petsData.length; i++) {
	petsDescr.innerHTML += `
	<figure class="pets-description__item" id="${i}pets-description">
		<img src=${petsData[i].img} alt=${petsData[i].name} >
		<figcaption>
			<h2 class="common-title">${petsData[i].name}</h2>
			<h3 class="common-subtitle">${petsData[i].type} - ${petsData[i].breed}</h3>
			<p class="pets-description__text">${petsData[i].description}</p>
			<ul>
				<li>
					<strong>Age:</strong> ${petsData[i].age}
				</li>
				<li>
					<strong>Inoculations:</strong> ${petsData[i].inoculations.join(", ")}
				</li>
				<li>
					<strong>Diseases:</strong> ${petsData[i].diseases.join(", ")}
				</li>
				<li>
					<strong>Parasites:</strong> ${petsData[i].parasites.join(", ")}
				</li>

			</ul>
		</figcaption>
		<button class="pets__slider-right-btn pets-description__item-cross">
			<img src="./../images/Vector.svg" alt="cross" >
		</button>
	</figure>`;
}

const closePopupBtn = [
	...document.querySelectorAll(".pets-description__item-cross"),
];
const petsDescrItem = [...document.querySelectorAll(".pets-description__item")];

petsBox.addEventListener("click", (e) => {
	let currItem = document.getElementById(`${e.target.id[0]}pets-description`);
	currItem.classList.add("active");
	petsDescr.classList.add("active");
	body.classList.add("active");
});

petsDescr.addEventListener("click", (e) => {
	if (e.target === petsDescr) {
		petsDescrItem.forEach((item) => item.classList.remove("active"));
		petsDescr.classList.remove("active");
		body.classList.remove("active");
	}
});

closePopupBtn.forEach((item) => {
	item.addEventListener("click", (e) => {
		petsDescrItem.forEach((item) => item.classList.remove("active"));
		petsDescr.classList.remove("active");
		body.classList.remove("active");
	});
});
