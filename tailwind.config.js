/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FBF9F4',
          100: '#F7F3EC',
          200: '#EFE9DD',
          300: '#E4DCCB',
        },
        stone: {
          50: '#F5F1EA',
          100: '#EBE5D8',
          200: '#DDD4C2',
          300: '#C9BEA8',
          400: '#A89F8B',
        },
        sage: {
          50: '#F0F4EF',
          100: '#DCE7DA',
          200: '#B8CDB5',
          300: '#8FAE8B',
          400: '#6B8E66',
          500: '#4F7349',
          600: '#3D5B38',
          700: '#2F472C',
        },
        espresso: {
          700: '#3A3530',
          800: '#2A2622',
          900: '#1C1916',
          950: '#121010',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tracked': '0.18em',
        'tracked-wide': '0.25em',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
};
