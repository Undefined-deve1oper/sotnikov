/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
    plugins: [],
};

