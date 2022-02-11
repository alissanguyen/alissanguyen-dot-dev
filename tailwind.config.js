module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    screens: {
      xxs: "350px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1000px", // laptop: Default screen size
      xl: "1280px", //desktop
      "2xl": "1526px"
    },
    extend: {
      colors: {
        textLgColor: "var(--text-large-color)",
        textSmColor: "var(--text-small-color)",
        navBar: {
          link: "var(--nav-link)",
          linkHover: "var(--nav-link-hover)",
          blogBtnText: "var(--blog-btn-text)"
        },
        aboutMe: {
          smIconBg: "var(--sm-icon-bg)",
          smIcon: "var(--sm-icon)",
          aboutMeText: "var(--aboutme-text)"
        }
      }
    }
  },
  plugins: []
};
