import {themes as prismThemes} from 'prism-react-renderer';

const logo = {
  alt: 'Country State City API Documentation',
  src: 'img/world.svg',
  // srcDark: 'img/docusaurus_keytar.svg',
};

module.exports = {
  title: 'Country State City API',
  tagline: 'Documentation Website',
  url: 'https://countrystatecity.in',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: 'img/world.png',

  deploymentBranch: 'gh-pages',

  organizationName: 'dr5hn', // Usually your GitHub org/user name.
  projectName: 'csc-website', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: true,
  customFields: {
    description:
      '🌍 World countries, states, regions, provinces, cities, towns in JSON, SQL, XML, PLIST, YAML, and CSV. All Countries, States, Cities with ISO2, ISO3, Country Code, Phone Code, Capital, Native Language, Timezones, Latitude, Longitude, Region, Subregion, Flag Emoji, and Currency. #countries #states #cities - dr5hn/countries-states-cities-database',
  },
  plugins: [
    'docusaurus-plugin-sass',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          editUrl:
            'https://github.com/dr5hn/csc-website/edit/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
        gtag: {
          trackingID: 'G-XPF0QLDXVS',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['php', 'dart', 'ruby', 'rust', 'go', 'swift', 'java']
    },
    announcementBar: {
      id: 'supportus',
      backgroundColor: '#cddc39',
      textColor: '#000', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
      // content: '<h3 style="margin:0; font-weight: normal;">Maintenance is scheduled on <b>Sunday, October 9 at 00:00 IST</b>. Access to API will be unavailable.</h3>'
      content: '⭐️ If you like CountryStateCity DB, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/dr5hn/countries-states-cities-database">GitHub</a>! ⭐️',
    },
    image: 'img/api.png',
    navbar: {
      hideOnScroll: false,
      title: 'Country State City API',
      logo: logo,
      items: [
        {
          to: "/docs/",
          activeBasePath: "docs",
          label: "Documentation",
          position: "left",
        },
        {
          href: "https://api.countrystatecity.in/play",
          label: "Playground",
          position: "left",
          target: '_blank',
        },
        {
          href: "https://dr5hn.github.io/countries-states-cities-database/",
          label: "Demo",
          position: "left",
          target: '_blank',
        },
        {
          href: "https://stats.uptimerobot.com/VZ2NqHlJYM",
          label: "Status",
          position: "left",
          target: '_blank',
        },
        {
          href: "/faq/",
          activeBasePath: "faq",
          label: "FAQs",
          position: "right",
        },
        {
          href: "https://forms.gle/ckZ8Gub6jS9sUihJA",
          label: "Request API Key",
          position: "right",
          target: '_blank',
        },
        {
          href: "/donate/",
          activeBasePath: "donate",
          label: "Donate",
          position: "right",
        },
        {
          href: 'https://github.com/dr5hn/countries-states-cities-database',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          target: '_blank',
        },
        {
          href: 'https://twitter.com/dr5hn',
          position: 'right',
          className: 'header-twitter-link',
          'aria-label': 'Follow me on Twitter',
          target: '_blank',
        },
        {
          href: 'https://www.linkedin.com/in/dr5hn/',
          position: 'right',
          className: 'header-linkedin-link',
          'aria-label': 'Follow me on Twitter',
          target: '_blank',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo,
      copyright: `Made with 💚 in India<img src="/img/india.svg" width="16"> <br>Built with <a href="https://docusaurus.io/" target="_blank" rel="noreferrer">Docusaurus</a>`,
    },
  },

};
