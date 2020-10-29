import Context from '../View/Context'
const { ctx } = Context
export const defaultRect = () => {
	ctx.strokeRect(40, 50, 500, 400);
}

export const fillAndCenterClearRect = () => {
	ctx.fillRect(40, 50, 500, 400);
	ctx.clearRect(100, 100, 150, 150);
}

export const pathTutorial = () => {
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(110, 100);
	ctx.lineTo(10, 100);
	ctx.closePath();
	ctx.stroke();
}

export const pathPlusDraw = (time: number) => {
	
	const isOverHalf = time > 50;
	const isOverQueter = time > 25;
	const isOverHalfQueter = time > 75;
	/**
	 * time 0 => 0
	 * time 25 => 50
	 * time 50 => 100
	 * time 75 => 50 
	*/
	const getStartXPoint = () => {
		if (!isOverHalf) return time * 2;
		const afterHalfNum = time - 50;
		return 100 - afterHalfNum * 2;
	}
	/**
	 * time 0 => 200
	 * time 25 =>  150
	 * time 50 => 200
	 * time 75 => 250
	 * time 99 => 198
	 */
	const getStartYPoint = () => {
		if (!isOverQueter) return 200 - time * 2;
		if (!isOverHalfQueter) return 150 + ((time - 25) * 2);
		return 250 - ((time - 75) * 2)
	}
	const startPointX = getStartXPoint()
	const startPointY = getStartYPoint();
	console.log(startPointY)
	ctx.moveTo(startPointX, startPointY); // 0,200 -> 50, 150 
	ctx.lineTo(Math.abs(startPointX - 100), (400 - startPointY));
	// ctx.moveTo(50, 150);
	// ctx.lineTo(50, 250);
	ctx.stroke();
}

export const rotatePlusDraw = () => {
	let cnt = 0;
	// pathPlusDraw(0);
	const interval = setInterval(() => {
		cnt++;
		pathPlusDraw(cnt % 100);
		
		// if (cnt > 100) clearInterval(interval) 
	}, Math.floor(1000/40))
}

export const arcDraw = () => {
	ctx.beginPath();
	ctx.arc(100, 100, 80, 0, Math.PI / 2, false);
	ctx.stroke();
}

export const borderRadius = () => {
	ctx.beginPath();
	ctx.moveTo(10,10);
	ctx.lineTo(200,10);

	// Math.PI가 180도를 나타내는 것이다. 
	// 단위는 라디안

	/**
	 */
	ctx.arc(200, 60, 10, -Math.PI/2, 0, false);
	ctx.lineTo(250,160);
	ctx.stroke();
}

export const artToExample = () => {
	ctx.beginPath();
	ctx.moveTo(10, 10);
	ctx.arcTo(250, 10, 250, 160, 50);
	ctx.lineTo(250, 160);
	ctx.stroke();

	const arcToStudy = () => {
		ctx.beginPath();
		ctx.moveTo(40, 100);
		ctx.arcTo(210, 100, 210, 200, 30);
		ctx.arcTo(210, 200, 10, 200, 30);
		ctx.arcTo(10, 200, 10, 100, 30);
		ctx.arcTo(10, 100, 210, 100, 30);
		ctx.stroke();
	}
	arcToStudy();
}

