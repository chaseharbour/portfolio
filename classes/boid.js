export default class Boid {
  constructor(x, y, r, speed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = speed;
    this.Xvelocity = this.speed * Math.random() < 0.5 ? -1 : 1;
    this.Yvelocity = this.speed * Math.random() < 0.5 ? -1 : 1;
  }

  draw(ctx, frameCount) {
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }

  move(ctx) {
    if (this.x >= ctx.canvas.width) {
      this.x = 0;
    }
    if (this.y >= ctx.canvas.height) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = ctx.canvas.width;
    }
    if (this.y < 0) {
      this.y = ctx.canvas.height;
    }
    this.x += this.Xvelocity;
    this.y += this.Yvelocity;
  }
}
