/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      // defaultWeb: 'Roboto Mono, monospace',
      sans: 'Roboto Mono, monospace', // 모든 폰트를 변경함
      bodyFont: 'Noto Sans KR, serif'
    },
    extend: {
      colors: {
        defaultColor: '#00FE00',
      },
      fontSize: {
        huge: ['12rem', { lineHeight: '3'}]
      },
      height: {
        screen: '98dvh',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

