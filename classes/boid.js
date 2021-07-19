import { toDegrees, toRadians } from "../helpers/conversions";
import { deltaX, deltaY } from "../helpers/deltas";
import Vector from "./vector";

export default class Boid {
  constructor(x, y, r, speed) {
    this.position = new Vector(x, y);
    this.x = this.position.x;
    this.y = this.position.y;
    this.r = r;
    this.speed = speed;
    this.velocity = new Vector().random2D(2, 5);
    this.acceleration = new Vector();
    this.alignmentFactor = 0.0005;
    this.cohesionFactor = 0.00001;
    this.separationFactor = 0.09;
    this.maxSpeed = 1.5;
    this.perception = 12;
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
      const hitDetection = Math.sqrt(dx ** 2 + dy ** 2);

      if (boid != this && hitDetection < this.perception) {
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
    let heading = new Vector();

    boids.map((boid, i) => {
      //Check how close other boids are, color boid red if within this.perception
      let dx = deltaX(boid, this);
      let dy = deltaY(boid, this);
      const hitDetection = Math.sqrt(dx ** 2 + dy ** 2);

      if (boid != this && hitDetection < this.perception) {
        heading = heading
          .subtract(boid.position.subtract(this.position))
          .scaleBy(this.separationFactor);
      }
    });
    return heading;
  }

  align(boids, ctx) {
    //Alignment vector is not being updated
    let alignment = new Vector();
    let boidsInRange = 0;

    boids.map((boid, i) => {
      let dx = deltaX(boid, this);
      let dy = deltaY(boid, this);
      const hitDetection = Math.sqrt(dx ** 2 + dy ** 2);

      if (boid != this && hitDetection < this.perception) {
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
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }
}
