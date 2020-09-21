import React from "react";
import { PtsCanvas } from "react-pts-canvas";
import {
  CanvasSpace,
  Num,
  Pt,
  Polygon,
  Group,
  Rectangle,
  Create,
  World,
  Line,
  Particle,
  Circle,
  Body,
} from "pts/dist/es5";

let triangle;
let ballTwo;
let triangleBody;
let ballTwoBody;
let floorAnchor;
let floorLine;
let floorBody;
let textAnchor;
let collision;
let count = 0;

class PhysicsCanvas extends PtsCanvas {
  start(bound, space) {
    //Initialize the canvas and define sizing variables
    let r = 40;
    let center = this.space.center.add(100, -100);
    let height = this.space.innerBound.height;
    let width = this.space.innerBound.width;

    //Define coordinates for the objects on the canvas
    //Rendering the objects occurs in the 'animate' function
    triangle = Polygon.fromCenter(center, r + 20, 3);
    ballTwo = Polygon.fromCenter(center, r, 5);
    floorAnchor = new Pt([0, height - 20]);
    floorLine = Line.fromAngle(floorAnchor, 0, width);

    textAnchor = new Pt([15, 20]);

    //Instantiate the physics world
    this.world = new World(this.space.innerBound, 1, new Pt(0, height));

    //Create physics bodies for each object and add them to the physics world
    triangleBody = Body.fromGroup(triangle, 0.5);
    ballTwoBody = Body.fromGroup(ballTwo, 0.8);
    floorBody = Body.fromGroup(floorLine, 1);
    this.world.add(triangleBody, "triangle");
    this.world.add(ballTwoBody, "ballTwo");
    this.world.add(floorBody, "floor");

    //Lock floor and a point on the triangle
    triangleBody[0].lock = true;
    floorBody.lock = true;
  }

  animate(time, ftime, space) {
    //Create and start animation loop

    collision = Line.intersectPolygon2D(floorLine, ballTwoBody);

    //Increment counter if hexagon is not touching the ground
    if (!collision) {
      count++;
    } else {
      count = 0;
    }

    this.form.fillOnly("#fff").text(textAnchor, count.toString(), 50);
    //Render all the polygonal bodies in the world
    this.world.drawBodies((b, i) => {
      this.form.fillOnly("#fff").polygon(b);
    });

    //Update the physics engine
    this.world.update(ftime);
  }

  action(type, x, y, event) {
    // code for interaction

    //Update locked position of triangle Pt to cursor
    if (type === "move") {
      this.world.body("triangle")[0].position = new Pt(x, y);
    }
  }

  resize(size, event) {
    // code for resize
    if (this.world) this.world.bound = this.space.innerBound;
  }
}

export default PhysicsCanvas;
