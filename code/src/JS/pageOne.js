// JavaScript source code

import {createNavBar} from "../JS/utils";
import {createNavElement} from "../JS/utils";
import {createNavButtons} from "../JS/utils";
import next from "../HTML/pageTwo.html"
import pic from "../../res/manchas.jpg";

export const runOne = () => {

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
	profilePic.setAttribute("src",pic);
	profilePic.setAttribute("alt","Imagen de Manchas");
	document.body.appendChild(profilePic);

	let text = document.createElement("p");
	let boldText = document.createElement("b");
	boldText.innerText = "Luego de media hora de perseguir a Manchas por toda mi casa, finalmente pude atraparlo. Lo encerr� en un cuarto mientras ve�a los da�os: romi� 3 floreros, manch� toda mi casa con sus patas sucias y mordi� la alfombra de mi sala. Quer�a comenzar a limpiar todo este desastre, pero ten�a que ir a mi curso. Entonces comenc� a correr a la puerta, pero no me d� cuenta que justo en la entrada hab�a unas bolsas de pl�stico mojadas. As� que al pisar las bolsas, me resbal� y ca� para atr�s, golpeando seriamente mi cabeza. Mi cuerpo noqueado qued� justo en la puerta abierta de mi casa. Luego de una cantidad desconocida de tiempo, despert� en la parte trasera de una ambulancia, con dos enfermeros que muy amenamente platicaban frente a mi. La ambulancia estaba parada, al parecer en un sem�foro. As� que aprovechando el elemnto sorpresa y la conveniencia de esa parada, me quit� todo lo que hab�an conectado a mi cuerpo, y entre pu�etazos y patadas me logr� escapar. Despu�s de todo, a�n ten�a que ir a mi curso de Sistemas y Tecnolog�as Web.";
	text.appendChild(boldText);
	document.body.appendChild(text);

	let bottomNavBar = createNavButtons("./index.html",next);
	document.body.appendChild(bottomNavBar);

};