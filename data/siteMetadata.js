// @ts-check
/** @type {import("pliny/config").PlinyConfig } */

const siteMetadata = {
  title: "Akai's Coding Adventure",
  author: 'Akaisme',
  fullName: 'Ngo Thanh Sang',
  headerTitle: "Akaisme's Blog",
  description: 'My desire to practice my skills and share my acquired knowledge fuels my endeavors.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://akaisme.click',
  analyticsURL:
    "https://analytics.us.umami.is/share/LwbQOMMcBOK9zcwU/Karhdo's%20Blog%20-%20Karhdo's%20Coding%20Adventure",
  siteRepo: 'https://github.com/5hry/akaisme',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/projects/karhdo-blog.png',
  email: 'ngothanhsang000@gmail.com',
  github: 'https://github.com/5hry',
  facebook: 'https://www.facebook.com/stn.akai',
  linkedin: 'https://www.linkedin.com/in/akaisme/',
  locale: 'en-US',
  socialAccounts: {
    github: '5hry',
    linkedin: 'akaisme',
    facebook: 'stn.akai',
  },
  analytics: {
    umamiWebsiteId: '7b7953a7-de2e-4e30-9a29-1a4aee05c627',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'top',
    },
  },
};

module.exports = siteMetadata;
