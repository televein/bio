// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '101': '315px',
        '102': '400px',
        '103': '245px',
        // Add more custom width values if needed
      },
    },
  },
  plugins: [],
}
