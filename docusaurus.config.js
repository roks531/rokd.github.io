// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */


const config = {
  title: "Rok Damjanić - Tech and Adventures",
  tagline: 'Explore my tech projects, blogs, and adventures',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rokdamjanic.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'roks531', // Usually your GitHub org/user name.
  projectName: 'rokd.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  future: {
    experimental_faster: true,
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English'
      },
      sl: {
        label: 'Slovenščina'
      }
    }
  },
  // add search plugin
  plugins: [
    [
      './plugins/recent-blog-posts',  // Path to your custom plugin
      {
        showReadingTime: true, 
        postsPerPage: 'ALL',
        blogSidebarCount: 'ALL', 
        blogSidebarTitle: 'All posts',// Add other options if needed
      },
    ],
  ],
  //
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
         //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
         },
         blog: false,
        // blog: {
        //   showReadingTime: true, 
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   // editUrl:
        //   //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        gtag: {
          trackingID: 'G-W32HFNBE85', 
          anonymizeIP: true,
        },
        sitemap: {
          lastmod: 'date', // Optionally add lastmod if you want to track when a page was last modified.
          changefreq: 'weekly', // Set the crawl frequency for all pages 
          priority: 0.5, // Default priority for pages
          ignorePatterns: ['/tags/**'], // Exclude pages with paths matching these patterns
          filename: 'sitemap.xml', // Output file name
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      algolia: {
        // The application ID provided by Algolia
        appId: 'JV67CWDNZ4',
  
        // Public API key: it is safe to commit it
        apiKey: 'f8f4060cbdfc7e5dd0be1c88c1162a1c',
  
        indexName: 'rokd',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // // Optional: Algolia search parameters
        searchParameters: {},
  
        // // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      metadata: [
        { name: 'description', content: 'The official website of Rok Damjanić. Discover my projects, insights on tech, and my outdoor adventures.' },
        { name: 'keywords', content: 'Rok Damjanić, Damjanic, tech blog, hiking blog, projects, tech solutions' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Rok Damjanić - Tech Projects and Outdoor Adventures' },
        { name: 'twitter:description', content: 'Sharing insights on tech projects, solutions, and my passion for outdoor exploration.' },
        { name: 'twitter:image', content: 'https://rokdamjanic.com/img/social-card.png' },
        { property: 'og:title', content: 'Rok Damjanić - Tech and Adventures' },
        { property: 'og:description', content: 'The official site of Rok Damjanić, featuring tech projects and outdoor exploration stories.' },
        { property: 'og:image', content: 'https://rokdamjanic.com/img/social-card.png' },
        { property: 'og:url', content: 'https://rokdamjanic.com' },
        { property: 'og:type', content: 'website' },
      ],
  
      headTags: [
        {
          tagName: 'script',
          attributes: { type: 'application/ld+json' },
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Rok Damjanić',
            url: 'https://rokdamjanic.com',
            sameAs: [
              'https://www.linkedin.com/in/rok-damjanic/',
              'https://github.com/roks531',
            ],
            description: 'Sharing my experiences in tech and outdoor adventures.',
          }),
        },
        {
          tagName: 'script',
          attributes: { type: 'application/ld+json' },
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Rok Damjanić Official Site',
            url: 'https://rokdamjanic.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://rokdamjanic.com/?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        },
      ],
      navbar: {
        title: "Home",
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo_dark_mode.png',
         // className: 'move-logo', 
         // width: 70,
         // height: 200,
        },
        items: [
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/about', label: 'About', position: 'left'}, // gets the file from src/pages/about.md
        //  {
        //    type: 'localeDropdown',
         //   position: 'right',
        //  },
         // {
         //   type: 'search',
         //   position: 'center',
        //  },
          {
            href: 'mailto:rok.damjanic@yahoo.com',
            position: 'right',
            className: 'header-email-link',
            'aria-label': 'Email',
          },
          {
            href: 'https://www.linkedin.com/in/rok-damjanic/',
            position: 'right',
            className: 'header-linkedin-link',
            'aria-label': 'LinkedIn',
          },
          {
            href: 'https://github.com/roks531',
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          
        ],
      },
      footer: {
        links: [
          {
            label: 'Github',
            href: 'https://github.com/roks531',
          },
          {
            label: 'Linkedin',
            href: 'https://www.linkedin.com/in/rok-damjanic/',
          },
          // {
          //   html: `
          //       <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
          //         <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
          //       </a>
          //     `,
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rok Damjanić`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.palenight,
        additionalLanguages: ['plsql','http', 'bash', 'sql', 'docker', 'yaml', 'ini'],
      },
    }),
};

export default config;
