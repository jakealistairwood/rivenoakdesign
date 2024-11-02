/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./utils/**/*.{js,ts,jsx,tsx,mdx}",
        "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1.5rem",
                md: "2rem",
                xl: "0",
            },
            screens: {
                md: "1024px",
                lg: "1440px",
            },
        },
        extend: {
            fontFamily: {
                body: "var(--font-body)",
                subheading: "var(--font-subheading)",
                serif: "var(--font-serif)",
                mono: "var(--font-mono)",
                inter: "var(--font-inter)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "carbon-grey": "#586057",
                "vibrant-green": "#E0FF63",
                "forest-green": "#0B4D3F",
                "black-60": "rgba(0, 0, 0, 0.6)",
                "black-80": "rgba(0, 0, 0, 0.8)",
                walnut: "#2E2E27",
                "slate-green": "#09261A",
                "taupe-brown": "#8A7968",
                cinnamon: "#AA835C",
                ecru: "#ECEBE4",
            },
        },
    },
    plugins: [],
};
