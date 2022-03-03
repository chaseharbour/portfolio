import React, { useRef, useEffect, useState } from "react";
import Boid from "../classes/boid";

import canvasStyles from "../styles/_canvas.module.scss";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({});

  const boids = [];
  const colors = ["#e1bc29", "#ff4960", "#2f8dda"];

  let randX;
  let randY;
  let randColor;

  let min;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    min = Math.min(context.canvas.height, context.canvas.width);

    let animationFrameId;
    let frameCount = 0;

    for (let i = 0; i < 60; i++) {
      randColor = Math.floor(Math.random() * colors.length);
      randX = Math.random() * context.canvas.width;
      randY = Math.random() * context.canvas.height;
      boids.push(new Boid(randX, randY, min * 0.018, 2, colors[randColor]));
    }

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
      //canvas.removeEventListener("resize", resizeCanvas);
    };
  }, [boids]);

  const resizeCanvas = () => {
    canvasRef.current.width = canvasRef.current.clientWidth;
    canvasRef.current.height = canvasRef.current.clientHeight;
  };

  const handleCanvasClick = (e) => {
    randColor = Math.floor(Math.random() * colors.length);
    boids.push(
      new Boid(e.clientX, e.clientY, min * 0.018, 2, colors[randColor])
    );
  };

  useEffect(() => {
    resizeCanvas();

    canvasRef.current.addEventListener("resize", resizeCanvas);
    return () => {
      canvasRef.current.removeEventListener("resize", resizeCanvas);
    };
  });

  return (
    <canvas
      onClick={handleCanvasClick}
      className={canvasStyles.canvas}
      ref={canvasRef}
      {...props}
    />
  );
};

export default Canvas;
