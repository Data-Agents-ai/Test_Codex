import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulsePhase: number;
}

interface Connection {
  node1: Node;
  node2: Node;
  opacity: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes
    const nodeCount = 25;
    const nodes: Node[] = [];
    
    const colors = [
      'rgba(0, 255, 255, 0.8)', // Cyan
      'rgba(255, 100, 100, 0.8)', // Red/orange
      'rgba(100, 200, 255, 0.8)', // Light blue
      'rgba(255, 150, 0, 0.8)', // Orange
    ];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    nodesRef.current = nodes;

    // Create connections between nearby nodes
    const updateConnections = () => {
      const connections: Connection[] = [];
      const maxDistance = 120;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            connections.push({
              node1: nodes[i],
              node2: nodes[j],
              opacity,
            });
          }
        }
      }

      connectionsRef.current = connections;
    };

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Update and draw nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.offsetWidth) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.offsetHeight) node.vy *= -1;

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.offsetWidth, node.x));
        node.y = Math.max(0, Math.min(canvas.offsetHeight, node.y));

        // Update pulse
        node.pulsePhase += 0.02;
        const pulseSize = node.size * (1 + Math.sin(node.pulsePhase) * 0.3);

        // Draw node with glow effect
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, pulseSize * 3
        );
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, pulseSize * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw solid center
        ctx.beginPath();
        ctx.fillStyle = node.color;
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update connections
      updateConnections();

      // Draw connections
      connectionsRef.current.forEach((connection) => {
        const { node1, node2, opacity } = connection;
        
        // Create gradient line
        const gradient = ctx.createLinearGradient(
          node1.x, node1.y,
          node2.x, node2.y
        );
        
        const color1 = node1.color.replace(/[\d\.]+\)$/g, `${opacity})`);
        const color2 = node2.color.replace(/[\d\.]+\)$/g, `${opacity})`);
        
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.moveTo(node1.x, node1.y);
        ctx.lineTo(node2.x, node2.y);
        ctx.stroke();
      });

      // Add floating bokeh particles
      for (let i = 0; i < 15; i++) {
        const x = (Math.sin(time + i) * 50) + (canvas.offsetWidth / 2) + (i * 30);
        const y = (Math.cos(time * 0.7 + i) * 30) + (canvas.offsetHeight / 2);
        const size = Math.sin(time * 2 + i) * 8 + 12;
        const opacity = (Math.sin(time * 1.5 + i) + 1) * 0.1;

        if (x >= -size && x <= canvas.offsetWidth + size && 
            y >= -size && y <= canvas.offsetHeight + size) {
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
          const color = i % 2 === 0 ? 
            `rgba(0, 255, 255, ${opacity})` : 
            `rgba(255, 100, 100, ${opacity})`;
          
          gradient.addColorStop(0, color);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default AnimatedBackground;
