function generateSpacingValues(baseValue, levels) {
  const values = {};
  let currentVal = 0;

  for (let i = 1; i <= levels; i++) {
    currentVal === 0 ? (currentVal = 16) : (currentVal = currentVal + 8);

    // Transform px to rem
    const valueInRem = `${currentVal / baseValue}rem`;

    // Add to obj
    values[`${i}`] = `${valueInRem}`;
  }

  return values;
}

const colors = {
  orange: '#f2e9e2',
  green: '#3b8068',
  gray: '#292d31',
  'gray-light': '#adacb1',
  black: '#000000',
  white: '#ffffff',
};

const screens = {
  sm: '280px',
  md: '768px',
  lg: '1024px',
  xl: '1400px',
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    spacing: generateSpacingValues(16, 20),
    colors,
    screens,
    fontFamily: {
      sans: ['Poppins, sans-serif'],
    },
    extend: {
      keyframes: {
        langList: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
};
