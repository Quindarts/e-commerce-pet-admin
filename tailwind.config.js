module.exports = {
    content: ['./src/**/*.{html,js}'],
    important: '#root',
    theme: {
        extend: {
            opacity: {
                0: '0',
            },
            visibility: ['responsive', 'group-hover', 'group-focus', 'focus-within', 'hover', 'focus'],
        },
    },
    plugins: [],
}
