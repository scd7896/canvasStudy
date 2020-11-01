import colorInput from "./colorInput";
import paintTools from "./paintTools";
import elt from "../util/elt";
import paintTool from "./paintTool";
import { Contorls, PaintToolTypes } from "../util/typing";

const controls: Contorls = {
	painter(ctx: CanvasRenderingContext2D) {
		const DEFAULT_TOOL = 0;
		const select = elt("select", null) as any;
		const label = elt("label", null, "그리기 도구 : ", select);

		for (const name in paintTools) {
			select.appendChild(elt("option", { value: name }, name));
		}
		select.selectedIndex = DEFAULT_TOOL;

		paintTool.paintTool = select.children[DEFAULT_TOOL].value as PaintToolTypes;
		select.addEventListener(
			"change",
			() => {
				paintTool.paintTool = select.children[select.selectedIndex].value as PaintToolTypes;
			},
			false
		);
		return label;
	},
	color(ctx: CanvasRenderingContext2D) {
		const input = (colorInput.colorInput = elt("input", { type: "color" }) as HTMLInputElement);
		const label = elt("label", null, "색: ", input);
		input.addEventListener(
			"change",
			() => {
				ctx.strokeStyle = input.value;
				ctx.fillStyle = input.value;
			},
			false
		);
		return label;
	},
};

export default controls;
