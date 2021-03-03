// JavaScript de la pagina dos

import {createNavBar} from "../JS/utils";
import {createNavElement} from "../JS/utils";
import {createNavButtons} from "../JS/utils";
import pic from "../../res/cuchillo.jpeg";

export const runTwo = () => {
	let navBar = createNavBar();
	document.body.appendChild(navBar);

	let title = document.createElement("div");
	title.setAttribute("class","title_background");
	let titleText = document.createElement("h1");
	titleText.setAttribute("class","title");
	titleText.innerHTML = "El elevador de la muerte";
	title.appendChild(titleText);
	document.body.appendChild(title);

	let profilePic = document.createElement("img");
	profilePic.setAttribute("src",pic);
	profilePic.setAttribute("alt","Imagen de Perfil");
	document.body.appendChild(profilePic);

	let text = document.createElement("p");
	let boldText = document.createElement("b");
	boldText.innerText = "Iba de camino a mi curso, como dije anteriormente, cuando de repente un hombre encapuchado sali� del callej�n de la izquierda. Comenz� a correr hacia mi con un cuchillo y gritando que me iba a matar. Naturalmente comenc� a correr con toda mi energ�a, aunque a veces me mareaba por el golpe que ten�a en la cabeza. Aun as�, sin titubear segu� huyendo lo m�s lejos que pude. Hasta que llegu� a un punto en el que ya no escuche los gritos del loco coleccionista de cuchillos. Aunque ya no lo escuchaba, segu�a nervioso por los eventos acontecidos. As� que busqu� un lugar donde refugiarme, ya que hab�a comenzado a llover. El primer lugar que encontr� fue un hotel: El Westin Camino Real. Le dije al portero que iba a visitar a un huesped. Aunque el portero no estaba muy convencido, me logr� colar al hotel y r�pidamente ingres� a un elevador y presion� el bot�n para ir al �ltimo piso. Sin embargo, a medio camino se apagan las luces del elevador y �ste se detiene. Recuerdo haber pensado: \"justo lo que necesito para completar un p�simo d�a\". Aunque no sab�a que ese, era solo el comienzo.";
	text.appendChild(boldText);
	document.body.appendChild(text);

	let bottomNavBar = createNavButtons("pageOne.html","pageThree.html");
	document.body.appendChild(bottomNavBar);
}