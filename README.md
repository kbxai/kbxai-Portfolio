# Kartik Bajaj — Portfolio (kbxai)

A visually immersive, high-performance personal portfolio website built with **React**, **Three.js**, and **Tailwind CSS**.  
This project presents my work as a Data Science student and AI enthusiast through a modern, cinematic web experience with a strong focus on performance, interaction, and design precision.

---

## Live Demo

**Website:** https://kbxai-portfolio.onrender.com/

---

## Overview

This portfolio is designed to feel less like a static website and more like an interactive product.  
It combines real-time 3D graphics, motion design, and a clean editorial layout to showcase projects, skills, and personal branding in a distinctive way.

---

## Features

- **3D Interactive Background**  
  High-performance drifting starfield built with `Three.js` and `@react-three/fiber`, featuring depth-based parallax and additive blending.

- **Cinematic UI/UX**  
  Film-grain noise overlay, floating island–style navigation, and glassmorphism effects for a refined, premium aesthetic.

- **Custom Cursor System**  
  Physics-based magnetic cursor with reactive hover states and spring animations implemented using `Framer Motion`.

- **Advanced Motion Design**  
  Staggered content reveals, smooth scrolling behavior, and editorial-style typography transitions.

- **Responsive Layout**  
  Fully responsive design that scales seamlessly from mobile devices to large desktop screens.

---

## Tech Stack

- **Core:** React 18, TypeScript  
- **Styling:** Tailwind CSS  
- **3D & Graphics:** Three.js, React Three Fiber, React Three Drei  
- **Motion & Animation:** Framer Motion  
- **Icons:** Lucide React  

---

## Project Structure

```bash
├── components/
│   ├── CustomCursor.tsx   # Physics-based custom cursor
│   ├── Hero.tsx           # Landing section with 3D background
│   ├── Navbar.tsx         # Floating navigation bar
│   ├── Projects.tsx       # Masonry-style project grid
│   ├── Scene3D.tsx        # Three.js starfield configuration
│   └── ...
├── constants.ts           # Content data (resume, projects, skills)
├── types.ts               # TypeScript interfaces
├── App.tsx                # Main application layout
├── index.tsx              # Entry point
└── index.html             # HTML shell and Tailwind configuration
