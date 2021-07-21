import { toDegrees, toRadians } from "../helpers/conversions";
import { deltaX, deltaY } from "../helpers/deltas";
import Vector from "./vector";

const hitDetection = (dx, dy) => Math.sqrt(dx ** 2 + dy ** 2);

/*
Values that provide decent behavior on small screens:

this.alignmentFactor = 0.005;
this.cohesionFactor = 0.00008;
this.separationFactor = 0.03;
this.maxSpeed = 2;
this.perception = 20;
*/

export default class Boid {
  constructor(x, y, r, speed) {
    this.position = new Vector(x, y);
    this.x = this.position.x;
    this.y = this.position.y;
    this.r = r;
    this.speed = speed;
    this.velocity = new Vector().random2D(2, 5);
    this.acceleration = new Vector();
    this.alignmentFactor = 0.00002;
    this.cohesionFactor = 0.00004;
    this.separationFactor = 0.04;
    this.maxSpeed = 2;
    this.perception = 20;
  }

  edgeDetect(ctx) {
    if (this.position.x >= ctx.canvas.width) {
      this.position.x = 0;
    }
    if (this.position.y >= ctx.canvas.height) {
      this.position.y = 0;
    }
    if (this.position.x < 0) {
      this.position.x = ctx.canvas.width;
    }
    if (this.position.y < 0) {
      this.position.y = ctx.canvas.height;
    }
  }

  perceptionField(ctx) {
    ctx.fillStyle = "rgba(219, 219, 219, 0.5)";
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.perception, 0, 2 * Math.PI);
    ctx.fill();
  }

  cohesion(boids) {
    let cohesion = new Vector();
    let boidsInRange = 0;

    boids.map((boid, i) => {
      let dx = deltaX(boid, this);
      let dy = deltaY(boid, this);
      let hit = hitDetection(dx, dy);

      if (boid != this && hit < this.perception) {
        boidsInRange++;

        cohesion = cohesion.add(boid.position);
      }
    });

    if (boidsInRange > 0) {
      cohesion = cohesion.divideByNum(boidsInRange);
    }
    return (cohesion = cohesion
      .subtract(this.position)
      .scaleBy(this.cohesionFactor));
  }

  separation(boids) {
    let steering = new Vector();
    let boidsInRange = 0;

    boids.map((boid, i) => {
      //Check how close other boids are, color boid red if within this.perception
      let dx = deltaX(boid, this);
      let dy = deltaY(boid, this);
      let hit = hitDetection(dx, dy);

      if (boid != this && hit < this.perception) {
        boidsInRange++;
        steering = steering
          .subtract(boid.position.subtract(this.position))
          .scaleBy(this.separationFactor);
      }

      if (boidsInRange > 0) {
        steering = steering.divideByNum(boidsInRange);
      }
    });
    return steering;
  }

  align(boids, ctx) {
    //Alignment vector is not being updated
    let alignment = new Vector();
    let boidsInRange = 0;

    boids.map((boid, i) => {
      let dx = deltaX(boid, this);
      let dy = deltaY(boid, this);
      let hit = hitDetection(dx, dy);

      if (boid != this && hit < this.perception) {
        boidsInRange++;

        alignment = alignment.add(boid.velocity);
      }
    });

    if (boidsInRange > 0) {
      alignment = alignment.divideByNum(boidsInRange);
    }
    return (alignment = alignment
      .subtract(this.velocity)
      .scaleBy(this.alignmentFactor));
  }

  flocking(boids) {
    let alignment = this.align(boids);
    let separation = this.separation(boids);
    let cohesion = this.cohesion(boids);
    this.velocity = this.velocity
      .add(separation)
      .add(alignment)
      .add(cohesion)
      .limit(this.maxSpeed);
    this.position = this.position.add(this.velocity);

    //this.velocity = this.velocity.add(new Vector().random2D(0.2, 0.5));
  }

  draw(ctx, color = "#fff") {
    let theta = this.velocity.heading() + toRadians(90);
    ctx.setTransform(1, 0, 0, 1, this.position.x, this.position.y);
    ctx.rotate(theta);
    ctx.beginPath();
    ctx.moveTo(0, -this.r * 2);
    ctx.lineTo(-this.r, this.r * 2);
    ctx.lineTo(this.r, this.r * 2);
    ctx.closePath();
    // ctx.moveTo(this.position.x, this.position.y);
    // ctx.lineTo(this.position.x + this.r, this.position.y + -this.r * 3);
    // ctx.lineTo(this.position.x + this.r * 2, this.position.y);
    // ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
}
