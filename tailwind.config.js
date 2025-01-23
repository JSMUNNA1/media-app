/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Work-Sans': 'Work Sans', 
        'space-mono': ['Space Mono', 'monospace'],
        
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors:{
        'primary-color':'#2B2B2B',
         'button-color':'#A259FF',
        'card-bg-color':'#3B3B3B',
        
      }
    },
  },
  plugins: [],
}