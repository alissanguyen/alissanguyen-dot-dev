module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    screens: {
      xxs: "350px",
      xs: "480px",
      custom2: "580px",
      sm: "676px",
      md: "768px",
      custom: "910px",
      lg: "1050px", // laptop: Default screen size
      xl: "1280px", //desktop
      "2xl": "1526px",
      "3xl": "1696px"
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
          aboutMeText: "var(--aboutme-text)",
          alissa: "var(--alissa)"
        },
        projects: {
          text: "var(--project-text-color)",
          subText: "var(--project-sub-text)",
          arrow: "var(--project-arrow)",
          recentBg: "var(--recent-project-bg)",
          recentHover: "var(--recent-project-bg-hover)",
          recentShadow: "var(--recent-project-shadow)"
        },
        contact: {
          label: "var(--label-text)",
          send: "var(--send-btn)",
          sendHover: "var(--send-btn-hover)"
        },
        blog: {
          lgText: "var(--blog-lg-text)",
          border: "var(--blog-input-border)"
        },
        post: {
          bodyText: "var(--text-body)",
          bodyTextLg: "var(--text-body-lg)",
          icon: "var(--icon)",
          twitter: "var(--twitter)",
          linkedin: "var(--linkedin)",
          instagram: "var(--instagram)",
          hyperlink: "var(--hyperlink)",
          hyperlinkHover: "var(--hyperlink-hover)",
          quote: "var(--quote)",
          quoteAuthor: "var(--quote-author)"
        }
      }
    }
  },
  plugins: []
};
