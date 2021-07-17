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
    this.head = 0;
    this.maxForce = 5;
    this.maxSpeed = 1;
    this.perception = 20;
  }

  edgeDetect(ctx) {
    if (this.position.x >= ctx.canvas.width) {
      this.position.x = 0;
    }
    if (this.position.y >= ctx.canvas.height) {
      this.position.y = 0;
    }
    if (this.position.componentsx < 0) {
      this.position.componentsx = ctx.canvas.width;
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

  length() {
    return Math.hypot(this.x, this.y);
  }

  heading() {
    return (this.head = Math.atan2(this.y, this.x));
  }

  steering(heading) {
    const dx = Math.cos(heading.x);
    const dy = Math.sin(heading.y);

    return new Vector(dx, dy);
  }

  separation(boids) {
    let heading = new Vector();
    let newHeading;
    let boidsInRange = 0;
    let dotProduct = 0;
    const headingWeight = 0.001;

    boids.map((boid, i) => {
      //Check how close other boids are, color boid red if within this.perception
      let dx = deltaX(boid, this);
      let dy = deltaY(boid, this);
      const hitDetection = Math.sqrt(dx ** 2 + dy ** 2);

      if (boid != this && hitDetection < this.perception) {
        boidsInRange++;
        //Calculate dot product
        // dotProduct = this.velocity.dotProduct(boid.velocity);

        //Calculate new heading for this
        // newHeading = heading
        //   .addByNum(headingWeight)
        //   .multiply(boid.velocity.subtract(this.velocity))
        //   .multiplyByNum(this.maxForce);

        // this.velocity + headingWeight * (boid.velocity - this.velocity);

        heading = heading.subtract(boid.position.subtract(this.position));

        //console.log(toDegrees(angleBetween));
        //Steer this boid toward that angle
      }

      // if (dotProduct > 0 && boidsInRange > 0) {
      //   return (heading = heading.add(boid.steering(newHeading)));
      // }
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
        //return boid.draw(ctx, "red");
        boidsInRange++;
        //console.log(boidsInRange.length);
        //Get average of all velocities in range
        //debugger;
        // if (boidsInRange > 0) {
        //   let sumBoidsVel = alignment.add(boid.velocity);
        //   let avgVel = sumBoidsVel.divideByNum(boidsInRange);
        //   return (alignment = alignment
        //     .add(avgVel)
        //     .multiplyByNum(this.maxForce));
        // }
        alignment = alignment.add(boid.velocity);
        //Add the average to this boid's velocity
      }

      //return boid.draw(ctx);
    });

    if (boidsInRange > 0) {
      alignment = alignment.divideByNum(boidsInRange);
    }
    return (alignment = alignment
      .subtract(this.velocity)
      .divideByNum(this.maxForce));
  }

  flocking(boids) {
    let alignment = this.align(boids);
    let separation = this.separation(boids);
    this.velocity = this.velocity.add(alignment).limit(this.maxSpeed);
    this.position = this.position.add(this.velocity);
  }

  draw(ctx, color = "#fff") {
    //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
  }
}
