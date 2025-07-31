# 📘 My Next.js Assignment

This is a **Next.js application** built for the **B.Tech 3rd Semester - Full Stack Development with NextJS** assignment.

---

## 📚 Assignment Details

- **Subject:** Full Stack Development with NextJS  
- **Semester:** 3rd Sem, CSE-IT  
- **Assignment:** 01  
- **Deadline:** August 1, 2025

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/username/my-next-app.git
cd my-next-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Then open your browser at:  
**http://localhost:3000**

---

## ✨ Features Implemented

### ✅ Responsive Navigation Bar
- Sticky navbar with menu & submenu items:
  - `Services > Web Development > MERN / MEAN / .NET`
- Hamburger menu for mobile view (<768px).
- Active page indicator with hover & click feedback.
- Clean dropdown and nested submenus.

### ✅ Routing (App Router)
- File-based routing using Next.js **App Router** (`src/app/`).
- Pages include:
  - Home (`/`)
  - About (`/about`)
  - Contact (`/contact`)
  - Services and nested pages (`/services/web-development/mern`, etc.)

### ✅ Dark/Light Theme Toggle
- Theme toggle button in the navbar.
- Uses **CSS variables** (`:root` and `.dark`) to switch themes.
- Theme persists via `localStorage`.
- Smooth 0.3s transitions for theme change.

### ✅ Styling
- **Plain CSS** only (`globals.css`) — no Tailwind or CSS-in-JS.
- Max-width layout (1200px), centered content (800px).
- Media queries for responsive design.
- Interactive UI with:
  - Hover underline effects
  - Smooth theme transitions
  - Active link styling

---

##
