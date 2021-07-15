import React, { useRef, useEffect } from "react";
import Boid from "../classes/boid";

import canvasStyles from "../styles/_canvas.module.scss";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const boids = [];

  let randX;
  let randY;

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      randX = Math.random() * 300;
      randY = Math.random() * 150;
      boids.push(new Boid(randX, randY, 6, 2));
    }
  }, [boids]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let animationFrameId;
    let frameCount = 0;

    const render = () => {
      frameCount++;
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      boids.map((boid, i) => {
        boid.draw(context);
        boid.edgeDetect(context);
        //boid.heading();
        //boid.separation(boids, context);
        //boid.align(boids);
        boid.move();
      });
      boids[0].perceptionField(context);
      console.log(boids[0].velocity.normalize());

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [boids]);

  return <canvas className={canvasStyles.canvas} ref={canvasRef} {...props} />;
};

export default Canvas;
