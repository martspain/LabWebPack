// JavaScript source code

let navBar = createNavBar();
document.body.appendChild(navBar);

let title = document.createElement("div");
title.setAttribute("class","title_background");
let titleText = document.createElement("h1");
titleText.setAttribute("class","title");
titleText.innerHTML = "Manchas";
title.appendChild(titleText);
document.body.appendChild(title);

let profilePic = document.createElement("img");
profilePic.setAttribute("src","./res/manchas.jpg");
profilePic.setAttribute("alt","Imagen de Manchas");
document.body.appendChild(profilePic);

let text = document.createElement("p");
let boldText = document.createElement("b");
boldText.innerText = "Luego de media hora de perseguir a Manchas por toda mi casa, finalmente pude atraparlo. Lo encerr� en un cuarto mientras ve�a los da�os: romi� 3 floreros, manch� toda mi casa con sus patas sucias y mordi� la alfombra de mi sala. Quer�a comenzar a limpiar todo este desastre, pero ten�a que ir a mi curso. Entonces comenc� a correr a la puerta, pero no me d� cuenta que justo en la entrada hab�a unas bolsas de pl�stico mojadas. As� que al pisar las bolsas, me resbal� y ca� para atr�s, golpeando seriamente mi cabeza. Mi cuerpo noqueado qued� justo en la puerta abierta de mi casa. Luego de una cantidad desconocida de tiempo, despert� en la parte trasera de una ambulancia, con dos enfermeros que muy amenamente platicaban frente a mi. La ambulancia estaba parada, al parecer en un sem�foro. As� que aprovechando el elemnto sorpresa y la conveniencia de esa parada, me quit� todo lo que hab�an conectado a mi cuerpo, y entre pu�etazos y patadas me logr� escapar. Despu�s de todo, a�n ten�a que ir a mi curso de Sistemas y Tecnolog�as Web.";
text.appendChild(boldText);
document.body.appendChild(text);

let bottomNavBar = createNavButtons("./index.html","pageTwo.html");
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