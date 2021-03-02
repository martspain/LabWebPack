// JavaScript pagina 6

let navBar = createNavBar();
document.body.appendChild(navBar);

let title = document.createElement("div");
title.setAttribute("class","title_background");
let titleText = document.createElement("h1");
titleText.setAttribute("class","title");
titleText.innerHTML = "Desenlace";
title.appendChild(titleText);
document.body.appendChild(title);

let text = document.createElement("p");
let boldText = document.createElement("b");
boldText.innerText = "Al volver pude verme a mí mismo salir de mi casa por primera vez (cuando me encontré a Manchas). Así que sin meditarlo fui al lado mío y me disparé en la cabeza, ya que no pueden haber dos versiones de mí al mismo tiempo. Luego tomé un lanzacohetes y con él destruí la nave espacial cuando vino. Finalmente, volví a mi casa, recogí la basura, enterré mi cuerpo y me acosté tranquilamente luego de un día tan agitado.";
text.appendChild(boldText);
document.body.appendChild(text);

let profilePic = document.createElement("img");
profilePic.setAttribute("src","./res/rocket.png");
profilePic.setAttribute("alt","Imagen de Perfil");
profilePic.setAttribute("class","rocket");
document.body.appendChild(profilePic);

let titleTwo = document.createElement("div");
titleTwo.setAttribute("class","title_background");
let titleTextTwo = document.createElement("h1");
titleTextTwo.setAttribute("class","title");
titleTextTwo.innerHTML = "Fin?";
titleTwo.appendChild(titleTextTwo);
document.body.appendChild(titleTwo);

let bottomNavBar = createNavButtons("pageFive.html","./index.html");
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
