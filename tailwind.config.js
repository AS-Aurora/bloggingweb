/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],  theme: {
    extend: {backgroundImage: {
      'custom-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
    },},
  },
  plugins: [],
}

