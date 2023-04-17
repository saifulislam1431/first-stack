/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f972cc",
        
"secondary": "#4e4ee8",
        
"accent": "#94ba2c",
        
"neutral": "#302438",
        
"base-100": "#F0EDF2",
        
"info": "#9FD1DF",
        
"success": "#5AD8BD",
        
"warning": "#987C0B",
        
"error": "#F12213",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

