/* * @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-sky': '#48CAE4',
        'blue-blue': '#0077B6'
      },
      fontSize: {
        'w-form': '41rem'
      },
      backgroundImage: {
        'gradient-form': 'linear-gradient(to right, #48CAE4, #0077B6)'
      },
      width: {
        'w-modal-reservation': '98vw',
      },
      height: {
        'h-modal-reservation': '98vh'
      },
    },
  },
  plugins: [],
}

