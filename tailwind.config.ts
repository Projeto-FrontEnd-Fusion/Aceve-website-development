import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/types/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      aspectRatio: {
        '11/20': '11 / 20',
      },
      screens: {
        mobileMicro: "375px",
        mobileMini: "412px",
        mobileSmall: "480px",
        mobileLarger: "536px",
        mobileXLarger: "640px",
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
        primary: {
          "100": "#FAF6FE",
          "200": "#F2EBFC",
          "300": "#E8DAFA",
          "400": "#D6BDF5",
          "500": "#A468E4",
          "600": "#823DC7",
          "700": "#663198",
          "800": "#54287B",
        },
        grey: {
          "100": "#FFFFFF",
          "200": "#F5F3F6",
          "300": "#CCCCCC",
          "400": "#CBCBCB",
          "500": "#A5A1A8",
          "600": "#5F5764",
          "700": "#2A272C",
          "800": "#1E1E1F",
        },

        // Estilos antigos utilizados em certos componentes.
        // Não remover antes de refatorar
        // Não usar em components novos
        purple: {
          light: "#482E98",
        },
        white: {
          normal: "#FFF",
          smooth: "#FEFCFB",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
