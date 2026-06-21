/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C2410C',
        secondary: '#78716C',
        accent: '#DC2626',
        background: '#FAF8F5',
        surface: '#F5F1EB',
        text: '#1C1917',
        'text-muted': '#78716C',
        border: '#E7E5E4',
        success: '#15803D',
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        sans: ['Source Sans 3', 'sans-serif'],
      },
      boxShadow: {
        'lg': '0 10px 40px rgba(194, 65, 12, 0.08)',
        'xl': '0 20px 50px rgba(194, 65, 12, 0.12)',
        '2xl': '0 25px 60px rgba(194, 65, 12, 0.15)',
      },
    },
  },
  plugins: [],
}
