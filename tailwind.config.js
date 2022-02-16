module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    screens: {
      xxs: "350px",
      xs: "480px",
      "sm": "676px",
      md: "768px",
      custom: "910px",
      lg: "1050px", // laptop: Default screen size
      xl: "1280px", //desktop
      "2xl": "1526px"
    },
    extend: {
      colors: {
        textLgColor: "var(--text-large-color)",
        textSmColor: "var(--text-small-color)",
        subText: "var(--sub-text-color)",
        navBar: {
          link: "var(--nav-link)",
          linkHover: "var(--nav-link-hover)"
        },
        aboutMe: {
          smIconBg: "var(--sm-icon-bg)",
          smIcon: "var(--sm-icon)",
          aboutMeText: "var(--aboutme-text)"
        },
        projects: {
          text: "var(--project-text-color)",
          subText: "var(--project-sub-text)",
          arrow: "var(--project-arrow)",
          recentBg: "var(--recent-project-bg)"
        },
        contact: {
          label: "var(--label-text)",
          send: "var(--send-btn)",
          sendHover: "var(--send-btn-hover)"
        }
      }
    }
  },
  plugins: []
};
