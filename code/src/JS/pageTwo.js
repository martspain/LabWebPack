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
	boldText.innerText = "Iba de camino a mi curso, como dije anteriormente, cuando de repente un hombre encapuchado salió del callejón de la izquierda. Comenzó a correr hacia mi con un cuchillo y gritando que me iba a matar. Naturalmente comencé a correr con toda mi energía, aunque a veces me mareaba por el golpe que tenía en la cabeza. Aun así, sin titubear seguí huyendo lo más lejos que pude. Hasta que llegué a un punto en el que ya no escuche los gritos del loco coleccionista de cuchillos. Aunque ya no lo escuchaba, seguía nervioso por los eventos acontecidos. Así que busqué un lugar donde refugiarme, ya que había comenzado a llover. El primer lugar que encontré fue un hotel: El Westin Camino Real. Le dije al portero que iba a visitar a un huesped. Aunque el portero no estaba muy convencido, me logré colar al hotel y rápidamente ingresé a un elevador y presioné el botón para ir al último piso. Sin embargo, a medio camino se apagan las luces del elevador y éste se detiene. Recuerdo haber pensado: \"justo lo que necesito para completar un pésimo día\". Aunque no sabía que ese, era solo el comienzo.";
	text.appendChild(boldText);
	document.body.appendChild(text);

	let bottomNavBar = createNavButtons("pageOne.html","pageThree.html");
	document.body.appendChild(bottomNavBar);
}