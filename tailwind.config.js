module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    screens: {
      xxs: "350px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1100px", // laptop
      xl: "1280px", //desktop
      "2xl": "1526px",
    },
    extend: {
      colors: {
        textLgColor: "var(--text-large-color)",
        textSmColor: "var(--text-small-color)",
        navBar: {
          logo: "var(--logo-color)",
          logoHover: "var(--logo-hover-color)",
          link: "var(--link-color)",
          linkHover: "var(--link-hover)",
          themeIcons: "var(--theme-icon)",
          lightThemeBg: "var(--light-theme-bg)",
          darkThemeBg: "var(--dark-theme-bg)",
        },
      },
    },
  },
  plugins: [],
};
