import { clickCanvasCheckRGB } from '../Events/Root/canvas';
import Context from '../View/Context'
const { ctx, canvas } = Context

// 이미지 스포이드 기능
const imageInit = () => {
	const img = new Image();
	const root = document.querySelector("#root");
	img.onload = (event) => {
		ctx.drawImage(img, 10,10, 300, 300);
		const imageData = ctx.getImageData(10, 10, 300, 300);
		for (let i = 0; i < imageData.data.length ; i++) {
			const color = imageData.data[i] - 200;
			imageData.data[i] = color < 0 ? 0 : color
		}
	}
	img.src = "/KakaoTalk_Photo_2020-01-19-09-11-40.jpeg"
}

canvas.addEventListener("click", clickCanvasCheckRGB(ctx, canvas))
export default imageInit;