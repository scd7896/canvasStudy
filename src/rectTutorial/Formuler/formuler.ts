import { buttonClickEventListner } from "./Events/button";
const init = () => {
	const button = document.querySelector(".draw-button") as HTMLButtonElement;
	button.addEventListener("click", buttonClickEventListner);
};
init();
