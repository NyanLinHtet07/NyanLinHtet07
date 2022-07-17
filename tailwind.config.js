const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            animation: {
                'b': 'bounce 11s infinite',
                'blob': "blob 12s infinite",
              },
            
              keyframes:{
                blob:{
                    "0%":{
                        transform: " translate(0,0) scale(1)"
                    },
                    "25%":{
                        transform:" translate(50px, -50px) scale(1.2)"
                    },
                    "50%":{
                        transform:" translate(80px,-80px) scale(1.6)"
                    },
                    "75%":{
                        transform: " translate(-50px, 50px) scale(1.2)"
                    },
                    "100%":{
                        transform:" translate(0,0) scale(1)"
                    }
                }
              }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
