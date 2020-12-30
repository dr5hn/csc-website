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
  favicon: 'img/world.png',
  organizationName: 'dr5hn', // Usually your GitHub org/user name.
  projectName: 'csc-website', // Usually your repo name.
  customFields: {
    description:
      '🌍 World countries, states, regions, provinces, cities, towns in JSON, SQL, XML, PLIST, YAML, and CSV. All Countries, States, Cities with ISO2, ISO3, Country Code, Phone Code, Capital, Native Language, Timezones, Latitude, Longitude, Region, Subregion, Flag Emoji, and Currency. #countries #states #cities - dr5hn/countries-states-cities-database',
  },
  plugins: [
    'docusaurus-plugin-sass',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/dr5hn/csc-website/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          postsPerPage: 3,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
          },
          // Please change this to your repo.
          editUrl:
            'https://github.com/dr5hn/csc-website/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌙",
        darkIconStyle: {
          marginLeft: "2px",
        },
        lightIcon: "☀️",
        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    announcementBar: {
      id: 'supportus',
      backgroundColor: '#cddc39',
      textColor: '#000', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
      content:
        '⭐️ If you like CountryStateCity DB, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/dr5hn/countries-states-cities-database">GitHub</a>! ⭐️',
    },
    image: 'img/docusaurus-soc.png',
    gtag: {
      trackingID: 'UA-141789564-1',
    },
    algolia: {
      apiKey: '4d226a12bfacfc0155241188c56d579d',
      indexName: 'CSC_DOCS',
      searchParameters: {
        facetFilters: [`version:latest`],
      },
    },
    navbar: {
      hideOnScroll: false,
      title: 'Country State City API',
      logo: logo,
      items: [
        {
          to: "docs",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: "https://api.countrystatecity.in/play",
          label: "Playground",
          position: "left",
        },
        {
          href: "https://dr5hn.github.io/countries-states-cities-database/",
          label: "Demo",
          position: "left",
        },
        {
          href: "https://github.com/dr5hn/countries-states-cities-database/discussions/151",
          label: "Feedback/Suggestions",
          position: "right",
        },
        {
          href: "https://github.com/dr5hn/csc-website/issues",
          label: "Bug/Issues",
          position: "right",
        },
        {
          to: "request",
          activeBasePath: "request",
          label: "Request API Key",
          position: "right",
        },
        {
          href: 'https://github.com/dr5hn/countries-states-cities-database',
          // label: "Github",
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo,
      copyright: `Made with ❤️ in India<img src="img/india.svg" width="16">. Built with Docusaurus.`,
    },
  },

};
