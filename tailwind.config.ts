import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bca: {
          blue: '#0060AF',
          deepBlue: '#005DAA',
          navy: '#003B70',
          orange: '#F26522',
        },
      },
      boxShadow: {
        enterprise: '0 18px 60px rgba(15, 23, 42, 0.12)',
      },
    },
  },
};

export default config;
