// JavaScript pagina 4

let navBar = createNavBar();
document.body.appendChild(navBar);

let title = document.createElement("div");
title.setAttribute("class","title_background");
let titleText = document.createElement("h1");
titleText.setAttribute("class","title");
titleText.innerHTML = "Abduccion Alien";
title.appendChild(titleText);
document.body.appendChild(title);

let text = document.createElement("p");
let boldText = document.createElement("b");
boldText.innerText = "Luego de nadar al otro lado del río comencé a escuchar un sonido muy fuerte que venía del cielo. Cuando veo hacia arriba veo un platillo volador que lanza un destello tan fuerte que no me deja ver y luego de esto pierdo la conciencia. Cuando despierto, me doy cuenta que estoy en otro planeta: el Planeta Birig Bamba. Terminé siendo la mascota del líder de este planeta. Al parecer era un planeta muy fiestero, porque vi que también abdujeron a Steve Aoki...";
text.appendChild(boldText);
document.body.appendChild(text);

let video = document.createElement("video");
video.setAttribute("heigth", "320px");
video.setAttribute("width", "480px");
video.setAttribute("controls", "controls");
let source = document.createElement("source");
source.setAttribute("src", "./res/video.mp4");
source.setAttribute("type", "video/mp4");
video.appendChild(source);
document.body.appendChild(video);

let textTwo = document.createElement("p");
let boldTextTwo = document.createElement("b");
boldTextTwo.innerText = "Luego de un par de semanas de portarme bien y ganarme su confianza, le quité un arma al guardia y tomé de rehén al lider. Le dije que me llevara frente a su ejercito y ahí mismo le disparé en la cabeza y me converti en el jefe del planeta. Entonces llevé a todo el ejercito Birig Bambiano a la Tierra para recuperarla. Utilizando todas sus armas de última tecnología vencimos a todos los zombies. Sin embargo, ya no quedaban humanos vivos.";
textTwo.appendChild(boldTextTwo);
document.body.appendChild(textTwo);

let bottomNavBar = createNavButtons("pageThree.html","pageFive.html");
document.body.appendChild(bottomNavBar);

function createNavBar(){
	let navBar = document.createElement("ul");
	navBar.setAttribute("class","navbar");

	let navElementHome = createNavElement("./index.html", "Pagina Principal");
	navBar.appendChild(navElementHome);

	let navElementOne = createNavElement("pageOne.html", "1. Manchas");
	navBar.appendChild(navElementOne);
	
	let navElementTwo = createNavElement("pageTwo.html", "2. Elevador");
	navBar.appendChild(navElementTwo);

	let navElementThree = createNavElement("pageThree.html", "3. Zombies");
	navBar.appendChild(navElementThree);

	let navElementFour = createNavElement("pageFour.html", "4. Aliens");
	navBar.appendChild(navElementFour);

	let navElementFive = createNavElement("pageFive.html", "5. Tiempo");
	navBar.appendChild(navElementFive);

	let navElementSix = createNavElement("pageSix.html", "6. Fin");
	navBar.appendChild(navElementSix);


	return navBar;
}

function createNavElement(path, name){
	let navElement = document.createElement("li");
	let link = document.createElement("a");
	link.setAttribute("href", path);
	link.innerHTML = name;
	navElement.appendChild(link);
	
	return navElement;
}

function createNavButtons(prevPath, nextPath){
	let navBar = document.createElement("ul");
	navBar.setAttribute("class", "navbar");

	let navElementOne = createNavElement(prevPath, "Anterior");
	navBar.appendChild(navElementOne);

	let navElementHome = createNavElement("./index.html", "Pagina Principal");
	navBar.appendChild(navElementHome);
	
	let navElementTwo = createNavElement(nextPath, "Siguiente");
	navBar.appendChild(navElementTwo);

	return navBar;
}
