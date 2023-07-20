// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MTCorp docs',
  tagline: 'Welcome to the MTCorp documentation hub.',
  url: 'https://github.com',
  baseUrl: '/easycrmdocs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/MTCorpLogo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Alexmedoli', // Usually your GitHub org/user name.
  projectName: 'easycrmdocs', // Usually your repo name.
  deploymentBranch: "gh-pages",
  themeConfig:{
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // @ts-ignore
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({ 
      

      navbar: {
        hideOnScroll: true,
        title: 'EasyCRM docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/MTCorpLogo.png',
        },
      
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            to:'https://app.swaggerhub.com/apis-docs/Alexmedoli/EasyCRMdocs/1.0.0', label:'Swagger', position: 'left'
          },
          //{
            //to:'graphs', label:'Gráficos2', position:'left'
          //},
          {
            href: 'https://gitlab.mtcorp.com.br/',
            label: 'GitLab',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation guide',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme:require('prism-react-renderer/themes/nightOwlLight'),
        darkTheme: require('prism-react-renderer/themes/nightOwl'),
      },
    }),
};

module.exports = {
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {liveCodeBlock: {
        playgroundPosition: 'bottom',
        },
  },
};

module.exports = {
  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    mermaid: {
      options: {
        maxTextSize: 50,
      },
    },
  },
}


//module.exports = {
//  plugins: ['ideal-image',
//  /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
//  ({
//    quality: 70,
//    max: 1030,
//    min: 640,
//    steps: 2,
    // Use false to debug, but it incurs huge perf costs
//    disableInDev: true,
//  }),],
//};


module.exports = config;
