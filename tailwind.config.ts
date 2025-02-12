import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'hover:bg-[#3A5899]',
    'hover:text-black',
    'hover:bg-white',
    'hover:text-[#6092FF]',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
