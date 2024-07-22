

export default  {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B38CD",
        secondary: "#8C52FF",
        tertiary: "#6C18B0",
        background: "#130022",
        card: "#1E1E1E",
        text: "#E5E5E5",
        blackColor: "#030606",
        purple: "#5E0B9F",
        gray: "#d9d9d9a",
        white: "#FFFFFF",
        dark: "#8B38CD",
        light: "#FFFFFF0D",
        hard: "#130022",

      },
      fontFamily: {
        prompt: ["Prompt", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('assets/images/background.jfif')",
      },
      
    },
  },
  plugins: [],
};
