/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        thin:100,
        light: 200,
        medium:300,
        semiBold:400,
        bold:500,
      },
      placeholderColor: {
        'white': '#fff',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}

