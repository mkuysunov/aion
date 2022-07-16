const FlowbitePlugin = require('flowbite/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3579f7',
      },
      borderRadius: {
        paper: '16px',
      },
    },
  },
  plugins: [FlowbitePlugin],
};
