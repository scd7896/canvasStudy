import Context from '../View/Context';
import './mangDel.css';
const { ctx, canvas } = Context;
const width = canvas.width;
const height = canvas.height;

let xc = -0.6;
let yc = 0;

const displayCenter = (xc: number, yc: number) => {
	document.querySelector("#xc").innerHTML = xc.toFixed(3);
	document.querySelector("#yc").innerHTML = yc.toFixed(3);
}

const draw = () => {
	const magnification = document.querySelector("#magnification") as HTMLInputElement;
	const mag = magnification.value;
	const maxitNode = document.querySelector("#maxit") as HTMLInputElement;
	const maxit = maxitNode.value;
	displayCenter(xc, yc)
	mandelbrot(mag, maxit);
}

draw();

function mandelbrot(mag: string, maxit: string) {
	const w = ctx.canvas.width;
	const h = ctx.canvas.height;
	const xmin = xc - 1/parseFloat(mag);
	const xmax = xc + 1/parseFloat(mag);
	const ymin = yc - (xmax - xmin) * h / w / 2;
	const ymax = yc + (xmax - xmin) * h / w / 2;
	const dx = (xmax-xmin)/w;
	const dy = (ymax-ymin)/h;

	const color = [];
	color[0] = "black";
	let L = 255;
	const dL = 255 / parseInt(maxit, 10);
	for (let i = parseInt(maxit, 10); i > 0 ; i--) {
		color[i] = `rgb(255, ${Math.floor(L)}, 255)`; 
		L-=dL;
	}
	for (let i = 0; i < w; i++) {
		const x = xmin + i * dx;
		for (let j = 0; j < h; j++) {
			const y = ymin + j * dx;
			let a = x;
			let b = y;
			let a2 = a*a;
			let b2 = b*b;
			let count = parseInt(maxit, 10);
			for (; a2+b2<=4 && count; count--) {
				b = 2 * a * b + y;
				a = a2 - b2 + x;
				a2 = a * a;
				b2 = b * b;
			}
			ctx.fillStyle = color[count];
			ctx.fillRect(i,j,1,1);
		}
	}
}

const button = document.querySelector("#button");
button.addEventListener("click", draw);
canvas.addEventListener("click", (event) => {
	const ix = event.offsetX;
	const iy = event.offsetY;
	const mag = document.querySelector("#magnification") as HTMLInputElement;
	const magValue = parseFloat(mag.value);
	xc += (2*ix/width - 1)/magValue;
	yc += (2*iy-height)/magValue/width;
	draw();
})