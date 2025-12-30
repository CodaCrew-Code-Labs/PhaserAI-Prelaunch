/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(14, 91%, 54%)',
          alt: 'hsl(14, 91%, 50%)',
        },
        title: 'hsl(14, 4%, 100%)',
        text: {
          DEFAULT: 'hsl(14, 4%, 85%)',
          light: 'hsl(14, 4%, 55%)',
        },
      },
      backgroundImage: {
        'body-gradient': 'linear-gradient(90deg, hsl(104, 28%, 40%) 0%, hsl(58, 28%, 40%) 100%)',
        'container-gradient': 'linear-gradient(136deg, hsl(104, 28%, 35%) 0%, hsl(58, 28%, 35%) 100%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'biggest': '2rem',
        'h1': '1.5rem',
        'h2': '1.25rem',
        'h3': '1rem',
        'normal': '.938rem',
        'small': '.813rem',
        'smaller': '.75rem',
      },
      fontWeight: {
        'medium': '500',
        'semi-bold': '600',
        'black': '900',
      },
      animation: {
        'float': 'float 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(0, 0px)' },
          '50%': { transform: 'translate(0, 15px)' },
          '100%': { transform: 'translate(0, 0px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}