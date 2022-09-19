/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'rosa-50': '#fee7ea',
                'rosa-100': '#fccfd5',
                'rosa-200': '#faa0ac',
                'rosa-300': '#f76e80',
                'rosa-400': '#f53d56',
                'rosa-500': '#f20d2b',
                'rosa-600': '#c20a23',
                'rosa-700': '#91081a',
                'rosa-800': '#610511',
                'rosa-900': '#300309',
                'mora-50': '#f1eff6',
                'mora-100': '#e3deed',
                'mora-200': '#c7beda',
                'mora-300': '#b9add1',
                'mora-400': '#9d8dbf',
                'mora-500': '#826cac',
                'mora-600': '#685393',
                'mora-700': '#5b4880',
                'mora-800': '#453762',
                'mora-900': '#2e2541',
            },
            fontFamily: {
                sans: 'Reem Kufi Fun',
                serif: 'Lora',
                'serif-ital': 'Lora Italic',
            },
        },
    },
    plugins: [],
}
