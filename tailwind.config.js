/** @type {import('tailwindcss').Config} */
import tailForms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        'Inter var, sans-serif',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
      ],
    },
    extend: {},
  },
  plugins: [tailForms],
  safelist: [
    {
      pattern:
        /(bg|text|border|ring)-(sky|green|orange|red|blue|fuchsia|lime|stone|neutral)-(200|300|400)/gim,
    },
  ],
};

