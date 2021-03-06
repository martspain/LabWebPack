// JavaScript pagina 3

import {createNavBar} from "../JS/utils";
import {createNavElement} from "../JS/utils";
import {createNavButtons} from "../JS/utils";

export const runThree = () => {
	let navBar = createNavBar();
	document.body.appendChild(navBar);

	let title = document.createElement("div");
	title.setAttribute("class","title_background");
	let titleText = document.createElement("h1");
	titleText.setAttribute("class","title");
	titleText.innerHTML = "Apocalipsis Zombie";
	title.appendChild(titleText);
	document.body.appendChild(title);

	/*
	let audio = document.createElement("audio");
	audio.setAttribute("controls", "controls");
	audio.setAttribute("autoplay", "autoplay");
	let source = document.createElement("source");
	source.setAttribute("src","./res/zombie.mp3");
	source.setAttribute("type","audio/mpeg");
	audio.appendChild(source);
	document.body.appendChild(audio);
	*/

	let text = document.createElement("p");
	let boldText = document.createElement("b");
	boldText.innerText = "No tenía reloj, así que no puedo decirlo exactamente, pero calculo que pasé cerca de dos horas en el elevador esperando a que alguien me rescatara. Pude haber esperado más pero comencé a escuchar gritos fuera, además de fuertes golpes. Parecían explosiones. Me armé de valor y salí por la compuerta de arriba del elevador. Al entrar a un pasillo del hotel, vi que todo seguía apagado, excepto las luces de emergencia rojas del hotel. Con esa tenue iluminación pude ver a una persona al otro lado del pasillo. Le grité por auxilio pero la persona no respondía. Conforme me fui acercando me iba percatando de los extraños sonidos que emitía. O más bien, parecían rugidos de una bestia enfurecida. De cualquier manera me acerqué más sin meditar. Pensé que tal vez tenía un resfriado o algo parecido. Pero no. Resultó ser un zombie. Salí huyendo al lado contrario del pasillo, vi una puerta abierta y aproveché para encerrarme en ese cuarto. El zombie por poco consigue una cena. Comence a buscar cosas que me sirvieran, pero era difícil considerando la falta de luz. Luego de un rato de explorar el cuarto con mis manos y permitir que mis ojos se acostumbraran a la oscuridad me di cuenta que me encontraba en un Penthouse. Había olvidado que me encontraba en el último piso del hotel. Busque en la cocina y encontré un encendedor. Con el encendedor encontré una linterna. Y con la linterna busque algo con lo que me pudiera defender. Tras mucha búsqueda, finalmente encontré una katana en el armario del cuarto principal. Y además de eso, algunos trajes antiguos Samurai. Al parecer me encontraba en la habitación de un coleccionista de objetos Samurai. De cualquier manera, me armé como pude y sin pensarlo mucho salí del cuarto. Me encontré al primer zombie que vi, pero con la katana no tuve miedo de enfrentarme a él. Sin mucho esfuerzo, lo partí en dos pedazos. Con esta katana me fui abriendo paso por las gradas del hotel, hasta llegar a la planta baja. Aquí me encontré muchos zombies. Además, reconocí a uno de ellos, era el loco que me perseguía anteriormente con un cuchillo. Con mucho placer lo quité de mi camino, llegué al parqueo y tomé la primera motocicleta que encontré con llaves. Luego de recorrer varios kilómetros y observar muchas ciudades destruidas, un zombie se lanzó a mí con tal fuerza que me tiró de la moto. Aturdido por el impacto logré observar un río, y al otro lado una horda de zombies que venían hacia mí. Así que me quite los zapatos y comencé a nadar con todas mis fuerzas.";
	text.appendChild(boldText);
	document.body.appendChild(text);

	let bottomNavBar = createNavButtons("./pageTwo.html","./pageFour.html");
	document.body.appendChild(bottomNavBar);
}

