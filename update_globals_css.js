const fs = require('fs');

const css = `
@import 'tailwindcss';

:root {
  --background: #000000;
  --foreground: #F7F7F8;
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
  font-family: var(--font-sans), sans-serif;
  -webkit-font-smoothing: antialiased;
  position: relative;
}

/* Texture overlay for ultra-premium look */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: 0.03;
}

.glass {
  background: rgba(15, 15, 15, 0.6);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.2);
}

.glass-panel {
  background: linear-gradient(180deg, rgba(30, 30, 30, 0.4) 0%, rgba(10, 10, 10, 0.8) 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
}

.text-gradient {
  background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

::selection {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}
`;

fs.writeFileSync('src/app/globals.css', css);
console.log('CSS updated');
