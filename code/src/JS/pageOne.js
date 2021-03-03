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
	boldText.innerText = "Luego de media hora de perseguir a Manchas por toda mi casa, finalmente pude atraparlo. Lo encerré en un cuarto mientras veía los daños: romió 3 floreros, manchó toda mi casa con sus patas sucias y mordió la alfombra de mi sala. Quería comenzar a limpiar todo este desastre, pero tenía que ir a mi curso. Entonces comencé a correr a la puerta, pero no me dí cuenta que justo en la entrada había unas bolsas de plástico mojadas. Así que al pisar las bolsas, me resbalé y caí para atrás, golpeando seriamente mi cabeza. Mi cuerpo noqueado quedó justo en la puerta abierta de mi casa. Luego de una cantidad desconocida de tiempo, desperté en la parte trasera de una ambulancia, con dos enfermeros que muy amenamente platicaban frente a mi. La ambulancia estaba parada, al parecer en un semáforo. Así que aprovechando el elemnto sorpresa y la conveniencia de esa parada, me quité todo lo que habían conectado a mi cuerpo, y entre puñetazos y patadas me logré escapar. Después de todo, aún tenía que ir a mi curso de Sistemas y Tecnologías Web.";
	text.appendChild(boldText);
	document.body.appendChild(text);

	let bottomNavBar = createNavButtons("./index.html",next);
	document.body.appendChild(bottomNavBar);

};