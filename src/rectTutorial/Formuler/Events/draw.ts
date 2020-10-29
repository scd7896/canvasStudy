import Context from "../../View/Context";
interface Window {
	f: (payload: number) => number;
}
const { ctx, canvas } = Context;

const xmax = 5;
const ymax = 5;
const xmin = -5;
const ymin = -5;
const width = canvas.width;
const height = canvas.height;
type f = (x: number) => number;
const drawX = (countNumber: number) => {
	const isBlackStroke = countNumber === -5 || countNumber === 5 || countNumber === 0;
	ctx.strokeStyle = isBlackStroke ? "#333" : "#aaa";
	const startX = (height / 10) * (countNumber + 5);
	ctx.beginPath();
	ctx.moveTo(0, startX);
	ctx.lineTo(width, startX);
	ctx.stroke();
};

const drawY = (countNumber: number) => {
	const isBlackStroke = countNumber === -5 || countNumber === 5 || countNumber === 0;
	ctx.strokeStyle = isBlackStroke ? "#333" : "#aaa";
	const startY = (height / 10) * (countNumber + 5);
	ctx.beginPath();
	ctx.moveTo(startY, 0);
	ctx.lineTo(startY, height);
	ctx.stroke();
};

const isProper = (payload: string) => {
	const mathTalkens = [
		"\\+",
		"\\-",
		"\\*",
		"\\/",
		"\\%",
		"\\(",
		"\\)",
		"\\,",
		" ",
		"Math\\.sqrt",
		"Math\\.pow",
		"Math\\.log",
		"Math\\.abs",
		"Math\\.cos",
		"Math\\.sin",
		"Math\\.tan",
		"Math\\.exp",
		"x",
		"\\d",
	];
	mathTalkens.forEach(function (el) {
		payload = payload.replace(new RegExp(el, "g"), "");
	});
	// 아무것도 남아 있지 않아야 문제가 없음
	if (payload.length == 0) return true;
	return false;
};

const evalPlay = (x: number, payload: string) => eval(`${payload}`);
/**
 *
 * @param payload "x * x, 2x + 1, 2x, 2x - 1, 2x/2"
 */
export const drawFormuler = (payload: string) => {
	if (!isProper(payload)) {
		alert("수식이 잘못되었습니다");
		return;
	}
	ctx.clearRect(0, 0, width, height);
	function drawAxis() {
		for (let i = xmin; i <= xmax; i++) {
			drawX(i);
			drawY(i);
		}
	}
	drawAxis();
	const oneBlockSize = height / 10;
	const halfHeight = height / 2;

	const drawGraph = () => {
		for (let x = -5; x <= 5; x += 0.1) {
			const y = evalPlay(x, payload);
			const xPoint = (x + 5) * oneBlockSize;
			const yPoint = halfHeight - y * oneBlockSize;
			console.log(y);
			if (x === -5) {
				ctx.beginPath();
				ctx.strokeStyle = "red";
				ctx.lineWidth = 1.5;
				ctx.moveTo(xPoint, yPoint);
			} else {
				ctx.lineTo(xPoint, yPoint);
			}
		}
		ctx.stroke();
	};
	drawGraph();
};
