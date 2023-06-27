/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            transitionTimingFunction: {
                DEFAULT: "ease-in-out",
            },
            transitionDuration: {
                DEFAULT: "450ms",
            },
            keyframes: {
                fadeIn: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
            },
            animation: {
                fade: "fadeIn .5s ease-in-out",
            },
            zIndex: {
                1: "1",
                2: "2",
            },
        },
        screens: {
            xs: "425px",
            ...defaultTheme.screens,
        },
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
        require("@tailwindcss/typography"),
    ],
};

