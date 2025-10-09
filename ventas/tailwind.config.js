/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      fontFamily: {
        'public-regular': ['PublicSans-Regular', "sans-serif"],
        'public-medium': ['PublicSans-Medium', "sans-serif"],
        'public-bold': ['PublicSans-Bold', "sans-serif"],
        'public-black': ['PublicSans-Black', "sans-serif"],
        'sans': ['PublicSans-Regular', "sans-serif"], // Esto sobrescribe la fuente sans por defecto
      }

    },
  },
  plugins: [],
}