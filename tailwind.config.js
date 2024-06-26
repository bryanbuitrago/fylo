/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: { min: '480px' },
        md: { min: '768px' },
        lg: { min: '976px' },
        xl: { min: '1440px' },
      },
      colors: {
        lightRed: 'hsl(0, 100%, 63%)',
        accentCyan: 'hsl(176, 68%, 64%)',
        accentBlue: 'hsl(198, 60%, 50%)',
        darkBlue: 'hsl(217, 28%, 15%)',
        darkBlue1: 'hsl(218, 28%, 13%)',
        darkBlue2: 'hsl(216, 53%, 9%)',
        darkBlue3: 'hsl(219, 30%, 18%)',
      },
      backgroundImage: (theme) => ({
        'curvy-dark-mode': "url('/images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('/images/bg-curvy-light-mode.svg')",
        'logo-dark-mode': "url('/images/logo-dark-mode.svg')",
        'logo-light-mode': "url('/images/logo-light-mode.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
};
