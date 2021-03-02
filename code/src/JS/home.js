// Javascript de la página de home

let navBar = createNavBar();
document.body.appendChild(navBar);

let title = document.createElement("div");
title.setAttribute("class","title_background");
let titleText = document.createElement("h1");
titleText.setAttribute("class","title");
titleText.innerHTML = "Mi aventura al planeta BirigBamba";
title.appendChild(titleText);
document.body.appendChild(title);

let profilePic = document.createElement("img");
profilePic.setAttribute("src","../res/imagen.jpeg");
profilePic.setAttribute("alt","Imagen de Perfil");
document.body.appendChild(profilePic);

let text = document.createElement("p");
let boldText = document.createElement("b");
boldText.innerText = "Todo comenzó en la mañana de un martes 13. Era un día como cualquier otro. Acababa de despertar, y cuando me di cuenta mi reloj marcaba las 9 A.M. Esto significa que iba tarde para mi clase de Sistemas y Tecnologías Web. Me alisté en menos de 5 minutos, y al salir de casa, el perro de mis vecinos, Manchas, se encontraba rompiendo la bolsa de basura frente a mi puerta. Al darme cuenta de esto lo intenté capturar, pero Manchas rápidamente me esquivó, dispersó la basura por toda la entrada y seguidamenté se infiltró a mi casa.";
text.appendChild(boldText);
document.body.appendChild(text);

let bottomNavBar = createNavButtons("pageSix.html","pageOne.html");
document.body.appendChild(bottomNavBar);
/*
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
*/