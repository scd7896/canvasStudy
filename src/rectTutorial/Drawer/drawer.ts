import { createPainter } from "./Painter/painter";
const init = () => {
	createPainter(document.body, 800, 600);
};
init();
