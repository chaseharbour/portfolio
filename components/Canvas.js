import React, { useRef, useEffect } from "react";
import Boid from "../classes/boid";

import canvasStyles from "../styles/_canvas.module.scss";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const boids = [];
  const colors = ["#e1bc29", "#ff4960", "#2f8dda"];

  let randX;
  let randY;

  const resizeCanvas = (canvas) => {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
  };

  // useEffect(() => {
  //   for (let i = 0; i < 25; i++) {
  //     randX = Math.random() * 300;
  //     randY = Math.random() * 150;
  //     boids.push(new Boid(randX, randY, 4, 2));
  //   }
  // }, [boids]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const min = Math.min(context.canvas.height, context.canvas.width);

    let animationFrameId;
    let frameCount = 0;

    for (let i = 0; i < 40; i++) {
      let randColor = Math.floor(Math.random() * colors.length);
      randX = Math.random() * context.canvas.width;
      randY = Math.random() * context.canvas.height;
      boids.push(new Boid(randX, randY, min * 0.018, 2, colors[randColor]));
    }

    resizeCanvas(canvas);

    const render = () => {
      frameCount++;
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      boids.map((boid, i) => {
        boid.draw(context);
        boid.flocking(boids, context);
        //boid.edgeDetect(context);
      });
      //boids[0].perceptionField(context);
      //console.log(boids[0].align(boids, context));
      //console.log(boids[0].align());
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
