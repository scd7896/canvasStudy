import elt from "../util/elt";
import paintTools from "./paintTools";
import paintTool from "./paintTool";
import controls from "./controls";
import { Contorls } from "../util/typing";
import colorInput from "./colorInput";
export const createPainter = (parent: HTMLElement, width: number, height: number) => {
	const title = elt("h2", null, "페인터");
	const [canvas, ctx] = createCanvas(width, height);
	const toolBar = elt("div", null, "");

	Object.keys(controls).map((name: keyof Contorls) => {
		toolBar.appendChild(controls[name](ctx as CanvasRenderingContext2D));
	});

	toolBar.style.fontSize = "small";
	toolBar.style.marginBottom = "3px";

	parent.appendChild(elt("div", null, title, toolBar, canvas));
};

const createCanvas = (width: number, height: number) => {
	const canvas = elt("canvas", { width, height }) as HTMLCanvasElement;
	const ctx = canvas.getContext("2d");
	canvas.style.border = "1px solid gray";
	canvas.style.cursor = "pointer";

	canvas.addEventListener(
		"mousedown",
		(e) => {
			const event = document.createEvent("HTMLEvents");
			event.initEvent("change", false, true);
			colorInput.colorInput.dispatchEvent(event);
			console.log("tete", colorInput.colorInput, paintTool.paintTool);
			paintTools[paintTool.paintTool](e, ctx);
		},
		false
	);
	return [canvas, ctx];
};
