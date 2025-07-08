/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A2036',
        secondary: '#0540AD',
        grayish: '#98a3a9',
        background: '#F2F5F9',
        success: '#27AE60',
        warning: '#F1C40F',
        error: '#E74C3C',
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        myfont: ['MyFont', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
