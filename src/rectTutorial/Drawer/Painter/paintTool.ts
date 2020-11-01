import { PaintToolTypes } from "../util/typing";

class PaintTool {
	private static instance: PaintTool;
	public paintTool: PaintToolTypes;
	private constructor() {}
	public static get Instance() {
		return this.instance || (this.instance = new this());
	}
}

export default PaintTool.Instance;
