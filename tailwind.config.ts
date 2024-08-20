import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobileMini: "412px",
        mobileSmall: "480px",
        mobileLarger: "536px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        desktopLarge: "1440px",
        desktopXLarge: "1920px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: {
          medium: "#230157",
          haiti: "#130327",
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
          stroker: "#999999",
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
