\documentclass[11pt]{article}

\usepackage[a4paper,margin=1in]{geometry}
\usepackage{hyperref}
\usepackage{listings}
\usepackage{setspace}
\usepackage{xcolor}

\definecolor{codegray}{rgb}{0.95,0.95,0.95}

\lstset{
  backgroundcolor=\color{codegray},
  basicstyle=\ttfamily\small,
  frame=single,
  breaklines=true,
  showstringspaces=false
}

\setstretch{1.15}

\title{\textbf{Kartik Bajaj --- Portfolio (kbxai)}}
\author{}
\date{}

\begin{document}
\maketitle

\section*{Overview}

A visually immersive, high-performance personal portfolio website built with \textbf{React}, \textbf{Three.js}, and \textbf{Tailwind CSS}.  
The project presents my work as a Data Science student and AI enthusiast through a modern, cinematic web experience focused on performance, interaction, and design precision.

\section*{Live Demo}

\noindent
\textbf{Website:}  
\href{https://kbxai-portfolio.onrender.com/}{https://kbxai-portfolio.onrender.com/}

\section*{Features}

\begin{itemize}
  \item \textbf{3D Interactive Background} \\
  High-performance drifting starfield built using Three.js and \texttt{@react-three/fiber}, featuring depth-based parallax and additive blending.

  \item \textbf{Cinematic UI/UX} \\
  Film-grain noise overlay, floating island–style navigation, and glassmorphism effects for a refined, premium aesthetic.

  \item \textbf{Custom Cursor System} \\
  Physics-based magnetic cursor with reactive hover states and spring animations implemented using Framer Motion.

  \item \textbf{Advanced Motion Design} \\
  Staggered content reveals, smooth scrolling behavior, and editorial-style typography transitions.

  \item \textbf{Responsive Layout} \\
  Fully responsive design that scales seamlessly from mobile devices to large desktop screens.
\end{itemize}

\section*{Tech Stack}

\begin{itemize}
  \item \textbf{Core:} React 18, TypeScript
  \item \textbf{Styling:} Tailwind CSS
  \item \textbf{3D \& Graphics:} Three.js, React Three Fiber, React Three Drei
  \item \textbf{Motion \& Animation:} Framer Motion
  \item \textbf{Icons:} Lucide React
\end{itemize}

\section*{Project Structure}

\begin{lstlisting}
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
\end{lstlisting}

\section*{Running Locally}

This project uses modern ES Modules via CDN (\texttt{esm.sh}) to enable a lightweight, build-free development workflow.

\subsection*{1. Clone the Repository}

\begin{lstlisting}
git clone https://github.com/kbxai/portfolio.git
cd portfolio
\end{lstlisting}

\subsection*{2. Serve the Directory}

Any static file server can be used.

\textbf{Using Python:}
\begin{lstlisting}
python3 -m http.server 8000
\end{lstlisting}

\textbf{Using Node (http-server):}
\begin{lstlisting}
npx http-server .
\end{lstlisting}

\subsection*{3. Open in Browser}

\noindent
Navigate to: \\
\texttt{http://localhost:8000}

\section*{Contact}

\begin{itemize}
  \item \textbf{Email:} \href{mailto:kartikbajaj.me@gmail.com}{kartikbajaj.me@gmail.com}
  \item \textbf{LinkedIn:} \href{https://www.linkedin.com/in/kartik-bajaj-3ababa372/}{Kartik Bajaj}
  \item \textbf{GitHub:} \href{https://github.com/kbxai}{kbxai}
\end{itemize}

\section*{License}

This project is licensed under the \textbf{MIT License}.  
See the \texttt{LICENSE} file for details.

\end{document}
