// JavaScript pagina 5

import {createNavBar} from "../JS/utils";
import {createNavElement} from "../JS/utils";
import {createNavButtons} from "../JS/utils";
import pic from "../../res/delorean.jpg";

export const runFive = () => {
	let navBar = createNavBar();
	document.body.appendChild(navBar);

	let title = document.createElement("div");
	title.setAttribute("class","title_background");
	let titleText = document.createElement("h1");
	titleText.setAttribute("class","title");
	titleText.innerHTML = "Viaje en el Tiempo";
	title.appendChild(titleText);
	document.body.appendChild(title);

	let profilePic = document.createElement("img");
	profilePic.setAttribute("src",pic);
	profilePic.setAttribute("alt","Imagen de Delorean");
	profilePic.setAttribute("class","delorean");
	document.body.appendChild(profilePic);

	let text = document.createElement("p");
	let boldText = document.createElement("b");
	boldText.innerText = "Entonces, volví al Planeta Birig Bamba muy enojado. Pero pensé en una solución: le pedí a los científicos más listos que diseñaran una máquina del tiempo y un antídoto para evitar que los zombies destruyeran todo. Hicieron todo lo que les pedí, así que luego de agradecerles me marché y volví al día en que empezó todo.";
	text.appendChild(boldText);
	document.body.appendChild(text);

	let bottomNavBar = createNavButtons("./pageFour.html","./pageSix.html");
	document.body.appendChild(bottomNavBar);

}