import React, { useRef, useEffect } from "react";
import Boid from "../classes/boid";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const boids = [];

  let randX;
  let randY;

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      randX = Math.random() * 300;
      randY = Math.random() * 150;
      boids.push(new Boid(randX, randY, 8, Math.random() * 2 + 5));
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
        boid.draw(context, frameCount);
        boid.move(context);
      });
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [boids]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
