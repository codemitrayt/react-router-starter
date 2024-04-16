import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        white: {
          DEFAULT: "hsl(0 0% 100%)",
        },
        black: {
          DEFAULT: "hsl(0 0% 0%)",
        },
        gray: {
          25: "hsl(240 11% 98%)",
          50: "hsl(240 11% 94%)",
          100: "hsl(240 6% 90%)",
          200: "hsl(240 4% 85%)",
          250: "hsl(240 3% 77%)",
          300: "hsl(240 2% 68%)",
          400: "hsl(240 2% 60%)",
          500: "hsl(240 2% 52%)",
          600: "hsl(240 2% 43%)",
          700: "hsl(240 3% 35%)",
          750: "hsl(240 4% 26%)",
          800: "hsl(240 4% 18%)",
          850: "hsl(240 3% 14%)",
          900: "hsl(240 5.7% 10.4%)",
        },
        pink: {
          200: "hsl(343 98% 84%)",
          500: "hsl(343 98% 60%)",
          600: "hsl(343 65% 48%)",
          700: "hsl(343 65% 36%)",
        },
        red: {
          200: "hsl(1 100% 92%)",
          500: "hsl(3 100% 61%)",
          700: "hsl(0 82%  39%)",
        },
        orange: {
          200: "hsl(18 100% 88%)",
          500: "hsl(18 99%  70%)",
          700: "hsl(18 42%  42%)",
        },
        mint: {
          200: "hsl(177 56%  88%)",
          500: "hsl(178 54%  69%)",
          700: "hsl(179  24%  41%)",
        },
        purple: {
          200: "hsl(249 100%  88%)",
          500: "hsl(248 99%  70%)",
          700: "hsl(248 42%  42%)",
        },
        yellow: {
          200: "hsl(42 100%  88%)",
          500: "hsl(42 99%  70%)",
          700: "hsl(43 42%  42%)",
        },
        blue: {
          200: "hsl(217 100%  88%)",
          500: "hsl(216 99%  70%)",
          700: "hsl(216 42%  42%)",
        },
        secondary: {
          DEFAULT: "hsl(351 99% 66%)",
        },
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "button-gradient":
          "linear-gradient(135deg,hsl(343 98% 60%),hsl(343 98% 60%) 61%,hsl(351 99% 66%))",
        "conic-gradient":
          "conic-gradient(red 0deg, red 40deg, yellow 40deg, yellow 100deg, green 100deg, green 180deg, blue 180deg, blue 270deg, pink 270deg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-light text-xs tracking-tagline uppercase": {},
        },
        ".quote": {
          "@apply text-lg leading-normal": {},
        },
        ".button": {
          "@apply text-xs font-bold tracking-wider": {},
        },
        ".glass-effect": {
          "@apply backdrop-blur rounded-2xl bg-foreground/95 supports-[backdrop-filter]:bg-foreground/5 border border-foreground/20 p-5":
            {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
