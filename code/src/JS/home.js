// Javascript de la p�gina de home

import {createNavBar} from "../JS/utils";
import {createNavElement} from "../JS/utils";
import {createNavButtons} from "../JS/utils";
import pic from "../../res/imagen.jpeg";
//import next from "../../dist/pageOne.html";
//import prev from "../../dist/pageSix.html";
//import img from "../res/imagen.jpeg";

export const run = () => {
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
	profilePic.setAttribute("src",pic);
	profilePic.setAttribute("alt","Imagen de Perfil");
	document.body.appendChild(profilePic);

	let text = document.createElement("p");
	let boldText = document.createElement("b");
	boldText.innerText = "Todo comenz� en la ma�ana de un martes 13. Era un d�a como cualquier otro. Acababa de despertar, y cuando me di cuenta mi reloj marcaba las 9 A.M. Esto significa que iba tarde para mi clase de Sistemas y Tecnolog�as Web. Me alist� en menos de 5 minutos, y al salir de casa, el perro de mis vecinos, Manchas, se encontraba rompiendo la bolsa de basura frente a mi puerta. Al darme cuenta de esto lo intent� capturar, pero Manchas r�pidamente me esquiv�, dispers� la basura por toda la entrada y seguidament� se infiltr� a mi casa.";
	text.appendChild(boldText);
	document.body.appendChild(text);

	let bottomNavBar = createNavButtons("./pageSix.html","./pageOne.html");
	document.body.appendChild(bottomNavBar);
};
