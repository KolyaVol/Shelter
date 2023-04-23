const petsData = [
	{
		name: "Jennifer",
		img: "./images/pets-jennifer.png",
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
		img: "./images/pets-sophia.png",
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
		img: "./images/pets-woody.png",
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
		img: "./images/pets-scarlet.png",
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
		img: "./images/pets-katrine.png",
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
		img: "./images/pets-timmy.png",
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
		img: "./images/pets-freddie.png",
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
		img: "./images/pets-charly.png",
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

console.log(`Привет! Ели успел сделать всё... Есть куча багов, по этому надеюсь на лояльную проверку) \n100/110\nМогут попадаться одинаковые блоки на странцие our-pets при ширине <1280px`);
const nav = document.querySelector(".nav");
const burgerBtn = document.querySelector(".burger-icon");
const navList = document.querySelector(".nav__list");
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

let leftSlideArr = [],
	centerSlideArr = [],
	rightSlideArr = [];

function createUniqSlider(arr) {
	for (let i = 0; i < 3; i++) {
		arr.push(Math.floor(Math.random() * 7.99));
	}
	for (let i = 0; i < 3; i++) {
		if (
			arr[i] === arr[i + 1] ||
			arr[i] === arr[i + 2] ||
			arr[i] === arr[i - 1] ||
			arr[i] === arr[i - 2]
		) {
			arr.length = 0;
			createUniqSlider(arr);
		}
	}
}

function createUniqSliderPack(arr1, arr2) {
	if (arr2.some((item) => arr1.includes(item))) {
		arr2.length = 0;
		createUniqSlider(arr2);
		createUniqSliderPack(arr1, arr2);
	}
}

createUniqSlider(leftSlideArr);
createUniqSlider(centerSlideArr);
createUniqSlider(rightSlideArr);
createUniqSliderPack(centerSlideArr, leftSlideArr);
createUniqSliderPack(centerSlideArr, rightSlideArr);

const leftSlider = document.querySelector(".left-slider");
const centerSlider = document.querySelector(".center-slider");
const rightSlider = document.querySelector(".right-slider");

const generateHtml = (item, slideNum) => {
	item.innerHTML = `	<div class="pets__slider-item" id=${slideNum[0]}item>
							<img src=${petsData[slideNum[0]].img} id=${slideNum[0]}img alt="${
		petsData[slideNum[0]].name
	}" >
							<span id=${slideNum[0]}span>${petsData[slideNum[0]].name}</span>
							<button class="btn btn-secondary pets__slider-item-btn" id=${slideNum[0]}btn>
								Learn&nbsp;more
							</button>
						</div>
						<div class="pets__slider-item" id=${slideNum[1]}item>
							<img src=${petsData[slideNum[1]].img} id=${slideNum[1]}img alt="${
		petsData[slideNum[1]].name
	}" >
							<span id=${slideNum[1]}span>${petsData[slideNum[1]].name}</span>
							<button class="btn btn-secondary pets__slider-item-btn" id=${slideNum[1]}btn>
								Learn&nbsp;more
							</button>
						</div>
						<div class="pets__slider-item" id=${slideNum[2]}item>
							<img src=${petsData[slideNum[2]].img} id=${slideNum[2]}img alt="${
		petsData[slideNum[2]].name
	}" >
							<span id=${slideNum[2]}span>${petsData[slideNum[2]].name}</span>
							<button class="btn btn-secondary pets__slider-item-btn" id=${slideNum[2]}btn>
								Learn&nbsp;more
							</button>
						</div>`;
};

generateHtml(leftSlider, leftSlideArr);
generateHtml(centerSlider, centerSlideArr);
generateHtml(rightSlider, rightSlideArr);

const petsLBtn = document.querySelector(".pets__slider-left-btn");
const petsRBtn = document.querySelector(".pets__slider-right-btn");
const petsBox = document.querySelector(".pets__slider-box");
const petsCont = [...document.querySelectorAll(".pets__slider-container")];

let offset = 0;

petsBox.addEventListener("animationend", (animationEvent) => {
	if (animationEvent.animationName === "slide-left") {
		petsBox.classList.remove("translate-left");
		rightSlider.innerHTML = centerSlider.innerHTML;
		centerSlider.innerHTML = leftSlider.innerHTML;
		centerSlideArr = leftSlideArr;
		leftSlideArr = [];
		rightSlideArr = centerSlideArr;
		createUniqSlider(leftSlideArr);
		createUniqSliderPack(centerSlideArr, leftSlideArr);
		generateHtml(leftSlider, leftSlideArr);
	} else {
		petsBox.classList.remove("translate-right");
		leftSlider.innerHTML = centerSlider.innerHTML;
		centerSlider.innerHTML = rightSlider.innerHTML;
		centerSlideArr = rightSlideArr;
		rightSlideArr = [];
		leftSlideArr = centerSlideArr;
		createUniqSlider(rightSlideArr);
		createUniqSliderPack(centerSlideArr, rightSlideArr);
		generateHtml(rightSlider, rightSlideArr);
	}
});

const moveTo = (className) => {
	petsBox.classList.add(`translate-${className}`);
	petsLBtn.removeEventListener("click", moveTo);
	petsRBtn.removeEventListener("click", moveTo);
};

petsLBtn.addEventListener("click", () => moveTo("left"));
petsRBtn.addEventListener("click", () => moveTo("right"));

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
			<img src="./images/Vector.svg" alt="cross" >
		</button>
	</figure>`;
}

const closePopupBtn = [
	...document.querySelectorAll(".pets-description__item-cross"),
];
const petsDescrItem = [...document.querySelectorAll(".pets-description__item")];

centerSlider.addEventListener("click", (e) => {
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
