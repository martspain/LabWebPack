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
	boldText.innerText = "Al volver pude verme a mí mismo salir de mi casa por primera vez (cuando me encontré a Manchas). Así que sin meditarlo fui al lado mío y me disparé en la cabeza, ya que no pueden haber dos versiones de mí al mismo tiempo. Luego tomé un lanzacohetes y con él destruí la nave espacial cuando vino. Finalmente, volví a mi casa, recogí la basura, enterré mi cuerpo y me acosté tranquilamente luego de un día tan agitado.";
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