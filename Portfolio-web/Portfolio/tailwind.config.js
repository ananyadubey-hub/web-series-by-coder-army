/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",       // ye Vite ke root HTML file ko scan karega
    "./src/**/*.{js,jsx}" // ye src folder ke sab JS/JSX files me Tailwind classes scan karega
  ],
  theme: {
    extend: {}, // yahan apna custom colors, fonts ya spacing extend kar sakte ho
  },
  plugins: [], // Tailwind plugins agar use karna ho to yahan add karo
}
