/** @type {import('tailwindcss').Config} */
module.exports = {
   
   content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'background-black':'#141518',
      'dark-purple': '#221C3D',
      'primary-purple': '#8162FF',
      'secondary-black': '#1A1B1F',
      'gray-01': '#1A1B1F',
      'gray-02': '#4E525B',
      'gray-03': '#838896',
      'white': '#FFFFFF',
      'red': '#EF4444',
      'dark-red': '#2F1F1F',
    },
    fontFamily: {
      Nunito: ['Nunito', 'sans-serif'],
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

