export type PaintToolTypes = "brush" | "line";

export interface Contorls {
	painter: (ctx: CanvasRenderingContext2D) => HTMLElement;
	color: (ctx: CanvasRenderingContext2D) => HTMLElement;
}
