/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Alata"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f6f7ff',
          100: '#eff0ff',
          200: '#dfe2fe',
          300: '#c4c8fc',
          400: '#9fa7f9',
          500: '#7c83f5',
          600: '#880000',
          700: '#660000',
          800: '#433caa',
          900: '#393589',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#f3f5f7',
          200: '#e7ecf0',
          300: '#d2dbe4',
          400: '#b4c2d1',
          500: '#96a9be',
          600: '#778fa9',
          700: '#647b96',
          800: '#54677d',
          900: '#485767',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd6',
          200: '#ffdcad',
          300: '#ffc278',
          400: '#ff9f42',
          500: '#ff7c1d',
          600: '#f45b0a',
          700: '#cc3e09',
          800: '#a1310f',
          900: '#832a0f',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        cream: '#FFF9F0',
      },
      backgroundImage: {
        'festive-pattern': "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e67e22' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 10px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};