import React, { useRef, useEffect, useState } from "react";
import Boid from "../classes/boid";

import canvasStyles from "../styles/_canvas.module.scss";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({});
  const [resize, setResize] = useState(false);

  const boids = [];
  const colors = ["#e1bc29", "#ff4960", "#2f8dda"];

  let randX;
  let randY;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.canvas.width = canvasSize.w ? canvasSize.w : canvas.clientWidth;
    context.canvas.height = canvasSize.h ? canvasSize.h : canvas.clientHeight;

    const min = Math.min(context.canvas.height, context.canvas.width);

    let animationFrameId;
    let frameCount = 0;

    for (let i = 0; i < 60; i++) {
      let randColor = Math.floor(Math.random() * colors.length);
      randX = Math.random() * context.canvas.width;
      randY = Math.random() * context.canvas.height;
      boids.push(new Boid(randX, randY, min * 0.012, 2, colors[randColor]));
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
      // canvas.removeEventListener("resize", resizeCanvas);
    };
  }, [boids, canvasSize]);

  const resizeCanvas = () => {
    setResize(true);

    setCanvasSize({
      w: canvasRef.current.clientWidth,
      h: canvasRef.current.clientHeight,
    });

    setResize(false);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  });

  return <canvas className={canvasStyles.canvas} ref={canvasRef} {...props} />;
};

export default Canvas;
