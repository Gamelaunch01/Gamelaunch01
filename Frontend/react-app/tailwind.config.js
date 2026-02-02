/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#D4F443", // Neon yellow-green from the UI
                "background-light": "#F8FAFC",
                "background-dark": "#0A0C10",
                "card-dark": "#161B22",
                "card-light": "#FFFFFF",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Rajdhani", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.75rem",
            },
        },
    },
    plugins: [],
}
