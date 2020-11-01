function relativePosition(event: MouseEvent, element: HTMLCanvasElement) {
	const rect = element.getBoundingClientRect();
	return {
		x: Math.floor(event.clientX - rect.left),
		y: Math.floor(event.clientY - rect.top),
	};
}
function setDragListeners(ctx: CanvasRenderingContext2D, img: ImageData, draw: any) {
	const mouseMoveEventListner = (e: MouseEvent) => {
		ctx.putImageData(img, 0, 0);
		draw(relativePosition(e, ctx.canvas));
	};
	const mouseUpEventListner = (e: MouseEvent) => {
		ctx.putImageData(img, 0, 0);

		draw(relativePosition(e, ctx.canvas));
		document.removeEventListener("mousemove", mouseMoveEventListner, false);
		document.removeEventListener("mouseup", mouseUpEventListner, false);
	};
	document.addEventListener("mousemove", mouseMoveEventListner, false);
	document.addEventListener("mouseup", mouseUpEventListner, false);
}
let lastImage: Array<ImageData> = [];
const PaintTools = {
	brush(e: MouseEvent, ctx: CanvasRenderingContext2D) {
		ctx.lineCap = "round";
		ctx.lineJoin = "round";
		const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
		lastImage.push(img);
		const p = relativePosition(e, ctx.canvas);
		ctx.beginPath();
		ctx.moveTo(p.x, p.y);
		setDragListeners(ctx, img, (q: { x: number; y: number }) => {
			ctx.lineTo(q.x, q.y);
			ctx.stroke();
		});
	},
	line(e: MouseEvent, ctx: CanvasRenderingContext2D) {
		ctx.lineCap = "round";
		const img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
		lastImage.push(img);
		const p = relativePosition(e, ctx.canvas);
		setDragListeners(ctx, img, ({ x, y }: { x: number; y: number }) => {
			ctx.beginPath();
			ctx.moveTo(p.x, p.y);
			ctx.lineTo(x, y);
			ctx.stroke();
		});
	},
	cancel(ctx: CanvasRenderingContext2D) {
		lastImage.length > 0 && ctx.putImageData(lastImage.pop(), 0, 0);
	},
};

export default PaintTools;
