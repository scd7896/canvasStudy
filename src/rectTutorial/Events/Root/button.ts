import Context from '../../View/Context';
const {canvas} = Context;
const exportCanvasImg = () => {
	const img = new Image();
	const root = document.querySelector("#root");
	img.onload = () => {
		root.appendChild(img);
	}
	img.src = canvas.toDataURL();
}

const init = () => {
	const button = document.querySelector("#button");
	button.addEventListener("click", exportCanvasImg);
}
export default init;