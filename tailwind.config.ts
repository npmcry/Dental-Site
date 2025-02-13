import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'border-[#2469FD]', 
    'text-[#2469FD]', 
    'bg-[#2469FD]', 
    'hover:bg-[#3A5899]', 
    'hover:text-[#2469FD]',
    'hover:bg-white',
  ],
  

  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
