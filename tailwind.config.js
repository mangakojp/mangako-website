/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                mangako: {
                    ivory: '#FAF9F6',
                    cream: '#FDFBF7',
                    pink: '#FADADD',
                    coral: '#FF7F50',
                    sunrise: '#FFD700',
                    cyan: '#E0FFFF',
                    teal: '#008080',
                    indigo: '#4B0082',
                    ink: '#1A1A1D',
                    lavender: '#E6E6FA',
                }
            },
            fontFamily: {
                sans: ['"Noto Sans JP"', 'sans-serif'],
                mincho: ['"Shippori Mincho"', 'serif'],
            },
            animation: {
                grid: 'grid 15s linear infinite',
            },
            keyframes: {
                grid: {
                    '0%': { transform: 'translateY(-50%)' },
                    '100%': { transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
