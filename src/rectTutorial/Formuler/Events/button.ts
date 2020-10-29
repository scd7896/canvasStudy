import { drawFormuler } from "./draw";
export const buttonClickEventListner = () => {
	const input = document.querySelector(".formuler-input") as HTMLInputElement;
	drawFormuler(input.value);
};
