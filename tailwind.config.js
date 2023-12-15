module.exports = {
    content: ['./src/**/*.{html,js}'],
    important: '#root',
    theme: {
        extend: {
            opacity: {
                0: '0',
            },
            visibility: ['responsive', 'group-hover', 'group-focus', 'focus-within', 'hover', 'focus'],
            keyframes: {
                wave: {
                    '0%': { transform: 'rotate(0.0deg)' },
                    '10%': { transform: 'rotate(14deg)' },
                    '20%': { transform: 'rotate(-8deg)' },
                    '30%': { transform: 'rotate(14deg)' },
                    '40%': { transform: 'rotate(-4deg)' },
                    '50%': { transform: 'rotate(10.0deg)' },
                    '60%': { transform: 'rotate(0.0deg)' },
                    '100%': { transform: 'rotate(0.0deg)' },
                },
                showDown: {
                    '0%': { opacity: 0.1, transform: ' translateY(-100px),translateZ(-20px)' },
                    '25%': { opacity: 0.3, transform: ' translateY(-75px), translateZ(-8px)' },
                    '50%': { opacity: 0.7, transform: ' translateY(-50px), translateZ(-6px)' },
                    '75%': { opacity: 0.8, transform: ' translateY(-25px), translateZ(-4px)' },
                    '100%': { opacity: 1, transform: ' translateY(0px) , translateZ(0px)' },
                },
                showOn: {
                    '0%': { opacity: 1, transform: ' translateY(0px),translateZ(0px)' },
                    '25%': { opacity: 0.8, transform: ' translateY(-25px), translateZ(-2px)' },
                    '50%': { opacity: 0.7, transform: ' translateY(-50px), translateZ(-4px)' },
                    '75%': { opacity: 0.3, transform: ' translateY(-75px), translateZ(-6px)' },
                    '100%': { opacity: 0, transform: ' translateY(-100px) , translateZ(-20px)', display: 'none' },
                },
            },
            animation: {
                'waving-hand': 'wave 1s ease-in-out infinite',
                'showDown-popup': 'showDown 0.2s ease-in-out ',
                'showOn-popup': 'showOn 0.2s ease-in-out forwards',
            },
        },
    },
    plugins: [],
}
