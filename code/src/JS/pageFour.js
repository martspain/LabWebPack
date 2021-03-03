// JavaScript pagina 4

import {createNavBar} from "../JS/utils";
import {createNavElement} from "../JS/utils";
import {createNavButtons} from "../JS/utils";
import pic from "../../res/video.mp4";

export const runFour = () => {
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
	boldText.innerText = "Luego de nadar al otro lado del r�o comenc� a escuchar un sonido muy fuerte que ven�a del cielo. Cuando veo hacia arriba veo un platillo volador que lanza un destello tan fuerte que no me deja ver y luego de esto pierdo la conciencia. Cuando despierto, me doy cuenta que estoy en otro planeta: el Planeta Birig Bamba. Termin� siendo la mascota del l�der de este planeta. Al parecer era un planeta muy fiestero, porque vi que tambi�n abdujeron a Steve Aoki...";
	text.appendChild(boldText);
	document.body.appendChild(text);

	let video = document.createElement("video");
	video.setAttribute("heigth", "320px");
	video.setAttribute("width", "480px");
	video.setAttribute("controls", "controls");
	let source = document.createElement("source");
	source.setAttribute("src", pic);
	source.setAttribute("type", "video/mp4");
	video.appendChild(source);
	document.body.appendChild(video);

	let textTwo = document.createElement("p");
	let boldTextTwo = document.createElement("b");
	boldTextTwo.innerText = "Luego de un par de semanas de portarme bien y ganarme su confianza, le quit� un arma al guardia y tom� de reh�n al lider. Le dije que me llevara frente a su ejercito y ah� mismo le dispar� en la cabeza y me converti en el jefe del planeta. Entonces llev� a todo el ejercito Birig Bambiano a la Tierra para recuperarla. Utilizando todas sus armas de �ltima tecnolog�a vencimos a todos los zombies. Sin embargo, ya no quedaban humanos vivos.";
	textTwo.appendChild(boldTextTwo);
	document.body.appendChild(textTwo);

	let bottomNavBar = createNavButtons("pageThree.html","pageFive.html");
	document.body.appendChild(bottomNavBar);

}