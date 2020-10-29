import Context from '../View/Context';
const { ctx, canvas } = Context;

const NBALL = 100;
const R = 5;
const TIME_INTERVAL = 1000;
const BACK_SHADOW = 0.1;
const wall = {
	left: 0,
	right: canvas.width,
	top: 0,
	bottom: canvas.height
}

const balls: Array<Balls> = [];
class Balls {
	public x: number;
	public y: number;
	public r: number;
	public vx?: number;
	public vy?: number;
	public color?: string;
	constructor(x: number,y:number,r: number,vx?: number,vy?: number,color?: string) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.vx = vx;
		this.vy = vy;
		this.color = color;
	}
	setVelocityAsRandom(vmin: number, vmax: number) {
		const v = vmin + Math.random() * (vmax - vmin);
		const t = 2*Math.PI * Math.random();
		this.vx = v * Math.cos(t);
		this.vy = v * Math.sin(t);
		return this;
	}
	setColorAsRandom(lmin: number, lmax: number) {
		const R = Math.floor(lmin+Math.random() * (lmax-lmin))
		const G = Math.floor(lmin+Math.random() * (lmax-lmin))
		const B = Math.floor(lmin+Math.random() * (lmax-lmin))
		this.color = `rgb(${R}, ${G}, ${B})`
		return this;
	}
	draw() {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI, true);
		ctx.fill();
		return this;
	}
	move() {
		this.x += this.vx;
		this.y += this.vy;
		return this;
	}
	collisionWall(wall: any) {
		if (this.x - this.r < wall.left) {
			this.x = wall.left + this.r;
			if (this.vx < 0) this.setVelocityAsRandom(2,7);
		}
		if (this.x + this.r > wall.right) {
			this.x = wall.right - this.r;
			if (this.vx > 0) this.setVelocityAsRandom(2,7);
		}
		if (this.y - this.r < wall.top) {
			this.y = wall.top + this.r;
			if (this.vy < 0) this.setVelocityAsRandom(2,7);
		}
		if (this.y + this.r > wall.bottom) {
			this.y = wall.bottom - this.r;
			if (this.vy > 0) this.setVelocityAsRandom(2,7);
		}
		return this;
	}
}
for (let i = 0 ; i < NBALL ; i++) {
	balls[i] = new Balls(wall.right/2, wall.bottom/2, R);
	balls[i].setVelocityAsRandom(2,7).setColorAsRandom(50, 255);
}

const drawFrame = () => {
	ctx.fillStyle = `rgba(0,0,0,${BACK_SHADOW})`;
	ctx.fillRect(0,0,canvas.width,canvas.height);
	for(let i = 0 ; i < balls.length; i++) {
		balls[i].move().collisionWall(wall).draw();
	}
}
setInterval(drawFrame, TIME_INTERVAL)