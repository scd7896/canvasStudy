export const clickCanvasCheckRGB = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => (
	event: MouseEvent
) => {
	const x = event.offsetX;
	const y = event.offsetY;
	console.log(canvas.width, canvas.height);
	const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	const getRGBData = (x: number, y: number, i: number) => {
		console.log(x * canvas.width + y);
		return imageData.data[y * canvas.width * 4 + 4 * x + i];
	};
	const to3digit = (n: number) => {
		return `000${n}`.slice(-3);
	};
	const R = getRGBData(x, y, 0);
	const G = getRGBData(x, y, 1);
	const B = getRGBData(x, y, 2);
	const A = getRGBData(x, y, 3);
	ctx.beginPath();

	ctx.fillStyle = `rgb(${R},${G},${B})`;
	ctx.clearRect(500, 0, 80, 80);
	ctx.fillRect(500, 0, 80, 80);
	ctx.strokeRect(500, 0, 90, 90);
	console.log(R, G, B, A);
};
