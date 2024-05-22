import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan_color: '#a5d3d0',
        text_color: '#000000',
        white_color: '#f7f7f7',
        yellow_color: '#f0eb97',
      },
      fontFamily: {
        primary: ['Eingrantch Mono'],
      },
      height: {
        '138px': '8.625rem',
      },
      padding: {
        '10px': '0.625rem',
      },
      fontSize: {
        '17px': '1.0625rem',
      },
    },
  },
  plugins: [],
};
export default config;
