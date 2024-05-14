import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AD3637', 
        secondary: '#CC9899', 
        info: '#E4D0D0',
      },
      focus: {
        ring: '#AD3637',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('daisyui'),

  ],
  daisyui: {
    // themes: false,
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
    theme: {
      colors: {
        'primary': '#1DA1F2', 
        'secondary': '#14171A',
     
      },
    },
  },

};
export default config;
