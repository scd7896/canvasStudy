import { fabric } from "fabric";

const init = () => {
	var canvas = new fabric.Canvas("canvas");
	const button = document.querySelector("#download");
	button!.addEventListener("click", () => {
		console.log(canvas.toDataURL({ format: "png" }));
	});
	const image = new Image();
	image.setAttribute("crossorigin", "anonymous");
	image.onload = () => {
		const img = new fabric.Image(image, {
			top: 100,
			left: 100,
			width: 640,
			height: 640,
			crossOrigin: "anonymous",
		});

		canvas.add(img);
	};
	image.src = "https://pht.qoo-static.com/M-nyPaFTWJBCpTJ2dJikIHktj9oVfHhTOgyKJCtyGugdWmUWqerIvL9IOvLlQ_eWQg=h640";
};

init();
