import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: {
          medium: "#230157",
          haiti: "#15052a",
          light: "#482E98",
        },
        white: {
          normal: "#FFF",
          smooth: "#FEFCFB",
        },
        yellow: {
          normal: "#EEAA44",
        },
        gray: {
          normal: "#444444",
        },
        beige: {
          normal: "#FDF7ED ",
        },
        preto: {
          normal: "#000000",
          bunker: "#14171A",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
