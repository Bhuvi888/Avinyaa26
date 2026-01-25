/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#E50914",
                secondary: "#0071eb",
                "cosmic-void": "#02030a",
                "nebula-purple": "#1a0833",
                "deep-space": "#050510",
            },
            fontFamily: {
                display: ['Orbitron', 'sans-serif'],
                body: ['Rajdhani', 'sans-serif'],
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                scroll: {
                    'from': { transform: 'translateX(0)' },
                    'to': { transform: 'translateX(-50%)' }
                }
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'scroll': 'scroll 40s linear infinite',
            },
        },
    },
    plugins: [],
}
