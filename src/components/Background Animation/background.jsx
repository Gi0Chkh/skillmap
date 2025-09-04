import "./background.module.css";
import React, { useEffect, useRef } from 'react';

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const dotsCount = 150;
    const maxDistance = 150;
    const dots = [];

    // Create dots
    for (let i = 0; i < dotsCount; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw lines between close dots
      for (let i = 0; i < dotsCount; i++) {
        for (let j = i + 1; j < dotsCount; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(5,5,5,${1 - distance / maxDistance})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      // Move dots
      dots.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce from edges
        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;

        // Draw dot
        ctx.fillStyle = 'var(--acent-color)';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (<div className="container">
     <canvas ref={canvasRef} />;
  </div>)
}

export default Background;
