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
	const cancelButton = elt("button", { width: "100", height: "100" }, "뒤로가기");
	let metaKey = false;
	window.addEventListener("keydown", (e) => {
		if (e.key === "Meta") {
			metaKey = true;
		}
	});
	window.addEventListener("keyup", (e) => {
		if (e.key === "Meta") {
			metaKey = false;
		}
	});
	window.addEventListener("keydown", (e) => {
		if (metaKey && e.key === "z") paintTools.cancel(ctx as CanvasRenderingContext2D);
	});
	toolBar.appendChild(cancelButton);
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
			// TODO: 마우스를 눌렀을 때, draw 모드와 select 모드를 구분할 수 있도록
			// const event = document.createEvent("HTMLEvents");
			// event.initEvent("change", false, true);
			// colorInput.colorInput.dispatchEvent(event);
			paintTools[paintTool.paintTool](e, ctx);
		},
		false
	);
	return [canvas, ctx];
};
