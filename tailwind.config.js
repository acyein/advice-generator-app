/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', 'app.js'],
    theme: {
        extend: {
            fontFamily: {
                'primary': ['Manrope', 'sans-serif']
            },
            colors: {
                cyan: {
                    'light': 'hsl(193, 38%, 86%)',
                },
                green: {
                    'neon': 'hsl(150, 100%, 66%)'
                },
                blue: {
                    'gray': 'hsl(217, 19%, 38%)',
                    'gray-dark': 'hsl(217, 19%, 24%)',
                    'dark': 'hsl(218, 23%, 16%)'
                },
            },
            boxShadow: {
                'neon': '0 0 25px 0 hsla(150, 100%, 66%, 80%)'
            }
        }
    },
    plugins: [],
};