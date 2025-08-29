import "./App.css";

function App() {
  const canvas = document.getElementById("background");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const dotsCount = 100;
  const maxDistance = 150;
  const dots = [];

  // Create dots
  for (let i = 0; i < dotsCount; i++) {
    dots.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5, // slow speed
      vy: (Math.random() - 0.5) * 0.5,
      radius: 2,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw lines between close dots
    for (let i = 0; i < dotsCount; i++) {
      for (let j = i + 1; j < dotsCount; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < maxDistance) {
          ctx.strokeStyle = `rgba(255,255,255,${1 - distance / maxDistance})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();
        }
      }
    }

    // Move dots
    dots.forEach((dot) => {
      dot.x += dot.vx;
      dot.y += dot.vy;

      // Bounce from edges
      if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

      // Draw dot
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();

  // Update canvas size on window resize
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  
  return (
    <section className="main-section1">
      <canvas id="background"></canvas>
    </section>
  );
}

export default App;
