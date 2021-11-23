const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];



function createBox(i,ico) {
	const {name,prefix,type,family,color} = ico[i];
	let	divBox = `<div class="col-9 col-sm-6 col-md-4 col-lg-2 mc-card">
				<i class="${family} ${prefix+name} mc-icon-${color}"></i>
				<h5>${name}</h5>
			</div>`
	return divBox;
}

function createAllBox(ico) {
	const container = document.getElementById("mc-box-container");
	let boxHTMl = '';
	for (let i in ico) {
		let box = createBox(i,ico);
		boxHTMl += box;
	}
	container.innerHTML = boxHTMl;
}

createAllBox(icone)

// const selezione = document.getElementById("menu-select");
// console.log(selezione);
// selezione.addEventListener("change", function() {
// 	let element = selezione.value;
// 	console.log("element");
// 	if (element == "animal") {
// 		let iconeNew = icone.filter(x => x.type == "animal")
// 		console.log(iconeNew);
// 		createAllBox(iconeNew);
// 	}
// 	else if (element == "vegetable") {
// 		let iconeNew = icone.filter(x => x.type == "vegetable")
// 		console.log(iconeNew);
// 		createAllBox(iconeNew);
// 	}
// 	else if (element == "user") {
// 		let iconeNew = icone.filter(x => x.type == "user")
// 		console.log(iconeNew);
// 		createAllBox(iconeNew);
// 	}
// 	else if (element == "all") {
// 		let iconeNew = icone;
// 		console.log(iconeNew);
// 		createAllBox(iconeNew);
// 	}
// 	console.log(element)

// })
document.getElementById('menu-select').addEventListener('change', function() {
	console.log('You selected: ', this.value);
	let iconeNew='';
	if (this.value == "animal") {
		iconeNew = icone.filter(x => x.type == "animal")
		console.log(iconeNew);
		createAllBox(iconeNew);
	}
	else if (this.value == "vegetable") {
		iconeNew = icone.filter(x => x.type == "vegetable")
		console.log(iconeNew);
		createAllBox(iconeNew);
	}
	else if (this.value == "user") {
		iconeNew = icone.filter(x => x.type == "user")
		console.log(iconeNew);
		createAllBox(iconeNew);
	}
	else if (this.value == "all") {
		iconeNew = icone;
		console.log(iconeNew);
		createAllBox(iconeNew);
	}
  });