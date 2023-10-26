import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6c8ce2",
        "dark-xs": "#d1d5db",
        "dark-sm": "#1f2937",
        "dark-lg": "#111827",
        "dark-xl": "#030712",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[class=dark]"],
          primary: "#6c8ce2",
          "dark-xs": "#d1d5db",
          "dark-sm": "#1f2937",
          "dark-lg": "#111827",
          "dark-xl": "#030712",
        },
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["[class=light]"],
          primary: "#6c8ce2",
        },
      },
      // {
      //   mytheme: {
      //     primary: "#6c8ce2",
      //     secondary: "#4e0087",
      //     accent: "#fc996f",
      //     neutral: "#1e222f",
      //     "base-100": "#272b49",
      //     info: "#9ec4e6",
      //     success: "#85e0a9",
      //     warning: "#f8b249",
      //     error: "#f5666a",
      //   },
      // },
    ],
  },
};
export default config;
