/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0D1117',
        secondary: '#161B22',
        accent: '#FF6B6B',
        red: '#DC2626',
        slate: '#F0F6FC',
        lightSlate: '#8B949E',
        lightPrimary: '#FFFFFF',
        lightSecondary: '#F8F9FA',
        lightText: '#1F2937',
        lightMuted: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}