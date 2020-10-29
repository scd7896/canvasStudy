class Context {
	private static _instance: Context;
	public ctx: CanvasRenderingContext2D;
	public canvas: HTMLCanvasElement;
	private constructor() {
		const canvas = document.querySelector("#first") as HTMLCanvasElement;
		this.ctx = canvas.getContext("2d");
		this.canvas = canvas;
	}
	public static get Instance() {
		return this._instance || (this._instance = new this())
	}
}
export default Context.Instance;