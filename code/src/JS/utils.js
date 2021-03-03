// Utilities

import pagOne from "../../src/HTML/pageOne.html";

export function createNavBar(){
	let navBar = document.createElement("ul");
	navBar.setAttribute("class","navbar");

	let navElementHome = createNavElement("./index.html", "Pagina Principal");
	navBar.appendChild(navElementHome);

	let navElementOne = createNavElement(pagOne, "1. Manchas");
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

export function createNavElement(path, name){
	let navElement = document.createElement("li");
	let link = document.createElement("a");
	link.setAttribute("href", path);
	link.innerHTML = name;
	navElement.appendChild(link);
	
	return navElement;
}

export function createNavButtons(prevPath, nextPath){
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

