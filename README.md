# Viyan Technologies Website

A premium, modern React application serving as the official corporate platform for **Viyan Technologies**. Built with React, Vite, TailwindCSS, and custom design patterns to deliver a state-of-the-art web experience.

---

## 🚀 Key Features

* **Dynamic Blog Engine**: Integrated dynamic blog system loaded from modular content files in `src/data/blogs/` and indexed in `src/data/blogData.js`. Supports search-engine-friendly clean URL routing.
* **Responsive Layouts**: Fully responsive navigation, homepage modules, and article layouts that scale fluidly across desktop, tablet, and mobile screens.
* **Premium CSS Typography**: Built-in `.prose` class overrides in `src/index.css` configured for optimized readability, styling headers, code blocks, lists, and tables automatically.
* **Optimized Routing**: Smooth page transitions and automatic scrolling to specific hash parameters handled dynamically.

---

## 🛠️ Technology Stack

* **Frontend Framework**: React 18
* **Build System & Dev Server**: Vite
* **Routing**: React Router DOM (v6)
* **Styling**: TailwindCSS & Custom HSL CSS variables
* **Icons**: React Icons (Lucide or Heroicons integration)

---

## 📂 Project Structure

```
viyan-website/
├── src/
│   ├── components/       # Reusable UI sections (Navbar, Blog, Hero, WhyChoose, etc.)
│   ├── data/
│   │   ├── blogs/        # Individual modular blog posts (HTML/text strings)
│   │   └── blogData.js   # Central blog index metadata exports
│   ├── pages/            # Page-level route views (BlogPost, BlogList, Home)
│   ├── index.css         # Styling system & global prose custom overrides
│   ├── App.jsx           # App component & Router routes
│   └── main.jsx          # Entry point
├── public/               # Static assets
└── vite.config.js        # Vite bundler configurations
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The app will be available locally at `http://localhost:5173`.

### 3. Build for Staging/Production

To bundle and compile highly optimized static assets:

```bash
npm run build
```

Production output will be generated inside the `dist/` directory.

---

## ✍️ How to Add a New Blog Post

1. Create a new file under `src/data/blogs/` (e.g. `myNewPost.js`) exporting your article text wrapped inside a single template literal:
   ```javascript
   export const myNewPostContent = `
     <p>Your article paragraphs...</p>
     <h2>Your Heading</h2>
     <p>More text...</p>
   `;
   ```
2. Import this variable inside `src/data/blogData.js`.
3. Add a new entry to the `blogPosts` array mapping the metadata parameters:
   ```javascript
   {
     id: 7,
     title: 'Your Article Title',
     excerpt: 'Short description of the article...',
     category: 'Your Category',
     author: 'Viyan Technologies',
     date: 'Jun 28, 2026',
     image: 'https://images.unsplash.com/...',
     slug: '/blog/your-custom-slug',
     content: myNewPostContent
   }
   ```
