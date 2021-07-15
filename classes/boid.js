import { toDegrees, toRadians } from "../helpers/conversions";
import Vector from "./vector";

export default class Boid {
  constructor(x, y, r, speed) {
    this.position = new Vector(x, y);
    this.x = this.position.components[0];
    this.y = this.position.components[1];
    this.r = r;
    this.speed = speed;
    this.velocity = new Vector(1, 1).random2D(2, 5);
    this.acceleration = new Vector();
    this.head = 0;
    this.maxForce = 2;
    this.maxSpeed = 1;
    this.perception = 70;
  }

  draw(ctx, color = "#fff") {
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(
      this.position.components[0],
      this.position.components[1],
      this.r,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  move() {
    let newPos = this.position.add(this.velocity);
    let velLimit = this.velocity.limit(this.maxSpeed);
    let newVel = this.velocity.add(this.acceleration);

    this.position = newPos;
    this.velocity = newVel;
    this.velocity = velLimit;
  }

  edgeDetect(ctx) {
    if (this.position.components[0] >= ctx.canvas.width) {
      this.position.components[0] = 0;
    }
    if (this.position.components[1] >= ctx.canvas.height) {
      this.position.components[1] = 0;
    }
    if (this.position.components[0] < 0) {
      this.position.components[0] = ctx.canvas.width;
    }
    if (this.position.components[1] < 0) {
      this.position.components[1] = ctx.canvas.height;
    }
  }

  perceptionField(ctx) {
    ctx.fillStyle = "rgba(219, 219, 219, 0.5)";
    ctx.beginPath();
    ctx.arc(
      this.position.components[0],
      this.position.components[1],
      this.perception,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  length() {
    return Math.hypot(this.x, this.y);
  }

  heading() {
    return (this.head = Math.atan2(this.y, this.x));
  }

  steering(heading) {
    const dx = Math.cos(heading);
    const dy = Math.sin(heading);

    this.x += dx;
    this.y += dy;
  }

  separation(boids, ctx) {
    const separationFactor = 30;
    boids.map((boid, i) => {
      //Check how close other boids are, color boid red if within this.perception
      let dx = boid.x - this.x;
      let dy = boid.y - this.y;
      const hitDetection = Math.sqrt(dx ** 2 + dy ** 2);
      const headingWeight = this.perception;

      if (boid != this && hitDetection < this.perception) {
        //Calculate dot product
        const dotProduct = this.x * boid.x + this.y * boid.y;
        //Calculate angle between the two boids
        const angleBetween = Math.acos(
          dotProduct / (this.length() * boid.length())
        );

        //Calculate new heading for this
        let newHeading = this.head + headingWeight * (boid.head - this.head);

        if (dotProduct > 0) {
          return boid.steering(newHeading);
        }

        return;
        //console.log(toDegrees(angleBetween));
        //Steer this boid toward that angle
        //return boid.draw(ctx, "red");
      }
      return;
      //return boid.draw(ctx, "#fff");
    });
  }

  align(boids) {
    const avgHeading = boids.reduce(
      (prev, curr, i) => {
        return { vel: (prev.velocity + curr.velocity) / (i + 1) };
      },
      { vel: 0 }
    );

    //Makes boids poof??
    boids.map((boid, i) => {
      let dx = boid.x - this.x;
      let dy = boid.y - this.y;
      const hitDetection = Math.sqrt(dx ** 2 + dy ** 2);

      if (boid != this && hitDetection < this.perception) {
        if (this.velocity + avgHeading <= this.maxForce) {
          return (boid.velocity = avgHeading.vel);
        }
        //return (this.velocity = avgHeading.vel);
      }

      return;
    });
  }
}
