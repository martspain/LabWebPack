// JavaScript pagina 6

import {createNavBar} from "../JS/utils";
import {createNavElement} from "../JS/utils";
import {createNavButtons} from "../JS/utils";
import pic from "../../res/rocket.png";

export const runSix = () => {
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
	boldText.innerText = "Al volver pude verme a m� mismo salir de mi casa por primera vez (cuando me encontr� a Manchas). As� que sin meditarlo fui al lado m�o y me dispar� en la cabeza, ya que no pueden haber dos versiones de m� al mismo tiempo. Luego tom� un lanzacohetes y con �l destru� la nave espacial cuando vino. Finalmente, volv� a mi casa, recog� la basura, enterr� mi cuerpo y me acost� tranquilamente luego de un d�a tan agitado.";
	text.appendChild(boldText);
	document.body.appendChild(text);

	let profilePic = document.createElement("img");
	profilePic.setAttribute("src",pic);
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

	let bottomNavBar = createNavButtons("./pageFive.html","./index.html");
	document.body.appendChild(bottomNavBar);
}