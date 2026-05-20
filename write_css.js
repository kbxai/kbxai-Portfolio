const fs = require('fs');

const css = `@import "tailwindcss";

:root {
  --background: #05050A;
  --foreground: #ffffff;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* Antigravity glass styles */
.glass {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.ambient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  z-index: -1;
  opacity: 0.3;
  animation: float 20s infinite ease-in-out alternate;
}

@keyframes float {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(40px, -60px) scale(1.1); }
  66% { transform: translate(-30px, 30px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.neon-text-cyan {
  text-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
}
.neon-text-purple {
  text-shadow: 0 0 20px rgba(138, 43, 226, 0.5);
}

::selection {
  background-color: rgba(0, 240, 255, 0.2);
  color: #00F0FF;
}
`;

fs.writeFileSync('src/app/globals.css', css);
console.log('CSS written');