# Kartik Bajaj - Portfolio (kbxai)

A visually immersive, high-performance personal portfolio website built with React, Three.js, and Tailwind CSS. This project showcases my work as a Data Science student and AI enthusiast through a modern, cinematic web experience.

## 🚀 Live Demo

[Insert Link to Live Site Here]

## ✨ Features

- **3D Interactive Background**: A performant, drifting star field using `Three.js` and `@react-three/fiber`, featuring depth parallax and additive blending.
- **Cinematic UI/UX**: Custom film grain noise overlay, "floating island" navigation, and glassmorphism effects for a premium feel.
- **Custom Cursor**: A physics-based magnetic cursor with reactive hover states and spring animations using `Framer Motion`.
- **Advanced Animations**: Staggered content reveals, smooth scrolling behaviors, and editorial typography transitions.
- **Responsive Design**: Fully responsive layout that adapts gracefully from mobile devices to large desktop screens.

## 🛠️ Tech Stack

- **Core**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **3D & Graphics**: Three.js, React Three Fiber, React Three Drei
- **Motion & Physics**: Framer Motion
- **Icons**: Lucide React

## 📂 Project Structure

```bash
├── components/         # React components
│   ├── CustomCursor.tsx # Custom physics-based cursor
│   ├── Hero.tsx         # Landing section with 3D background
│   ├── Navbar.tsx       # Floating navigation bar
│   ├── Projects.tsx     # Masonry grid project display
│   ├── Scene3D.tsx      # Three.js starfield configuration
│   └── ...
├── constants.ts        # Content data (Resume, Projects, Skills)
├── types.ts            # TypeScript interfaces
├── App.tsx             # Main application layout
├── index.tsx           # Entry point
└── index.html          # HTML shell & tailwind config
```

## 🚀 Running Locally

This project uses modern ES Modules via CDN (`esm.sh`) for a lightweight, build-free development experience.

1. **Clone the repository**
   ```bash
   git clone https://github.com/kbxai/portfolio.git
   cd portfolio
   ```

2. **Serve the directory**
   You can use any static file server.

   **Using Python:**
   ```bash
   python3 -m http.server 8000
   ```
   
   **Using Node (http-server):**
   ```bash
   npx http-server .
   ```

3. **Open in Browser**
   Navigate to `http://localhost:8000` to view the application.

## 📬 Contact

- **Email**: [kartikbajaj.me@gmail.com](mailto:kartikbajaj.me@gmail.com)
- **LinkedIn**: [Kartik Bajaj](https://www.linkedin.com/in/kartik-bajaj-3ababa372/)
- **GitHub**: [kbxai](https://github.com/kbxai)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
