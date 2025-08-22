module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // App Router
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages Router (se usar)
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Componentes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AB8BFF",
        secondary: "#151312",
        light: {
          100: "#D6C6FF",
          200: "#A8B5DB",
          300: "#9CA4AB",
        },
        dark: {
          100: "#221f3d",
          200: "#0f0d23",
        },
      },
    },
  },
  plugins: [],
};
