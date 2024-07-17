/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'dark-purple': '#221c3d',
      'primary-purple': '#8162ff',
      'background-black': '#141418',
      'secudary-black': '#1a1b1f',
      'gray01': '#26272b',
      'gray02': '#4e525b',
      'gray03': '#838896',
      'white': '#ffffff',
      'red': '#ef4444',
      'dark-red': '#2f1f1f'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}