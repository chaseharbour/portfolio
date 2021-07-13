export default class Boid {
  constructor(x, y, r, speed) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = speed;
    this.velocity = this.x + speed;
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
    this.x += this.speed;
  }
}
