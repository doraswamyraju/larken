/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        larken: {
          navy: '#071D3B',       // Primary Navy
          navyDark: '#0B2D52',   // Secondary Navy
          blue: '#087DDB',       // Primary Blue
          cyan: '#43C5FF',       // Accent Cyan
          lightBg: '#F4F7FB',    // Light Background
          text: '#35465B',       // Body Text
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(7, 29, 59, 0.06), 0 2px 6px -1px rgba(7, 29, 59, 0.04)',
        'card': '0 10px 30px -4px rgba(7, 29, 59, 0.08), 0 4px 12px -2px rgba(7, 29, 59, 0.03)',
        'dropdown': '0 12px 32px 0 rgba(7, 29, 59, 0.12)',
      },
    },
  },
  plugins: [],
}
