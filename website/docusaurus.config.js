// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

async function createConfig() {
  // ES Modules are imported with `import()` instead of `require()`, and are imported asynchronously
  const katex = (await import("rehype-katex")).default;
  return {
    
    title: "Modelos de Simulación",
    tagline: "Apuntes de la asignatura",
    favicon: "img/favicon.ico",
  
    // Set the production url of your site here
    url: "https://abelranni.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/modelos-de-simulacion",
  
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    projectName: "modelos-de-simulacion",
    organizationName: "abelranni",
    trailingSlash: false,
  
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
  
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: "es",
      locales: ["es"],
    },
  
    presets: [
      [
        "classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            remarkPlugins: [math],
            rehypePlugins: [katex],
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              "https://github.com/abelranni/modelos-de-simulacion/tree/main/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],
    stylesheets: [
      {
        href: "/katex/katex.min.css",
        type: "text/css",
      },
    ],
  
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
          title: "Modelos de Simulación",
          logo: {
            alt: "Abel Ranni",
            src: "img/docabr.png",
          },
          items: [
            {
              type: "docSidebar",
              sidebarId: "tutorialSidebar",
              position: "left",
              label: "Contenido",
            },
            // {to: '/blog', label: 'Blog', position: 'left'},
            {
              href: "https://github.com/abelranni/modelos-de-simulacion",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Contenido",
                  to: "/docs/intro",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Linkedin",
                  href: "https://www.linkedin.com/in/abelranni/",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/abelranni",
                },
              ],
            },
            {
              title: "More",
              items: [
                // {
                //   label: 'Blog',
                //   to: '/blog',
                // },
                {
                  label: "GitHub",
                  href: "https://github.com/abelranni/modelos-de-simulacion",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Abel Ranni - Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  };
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Modelos de Simulación",
  tagline: "Apuntes de la asignatura",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://abelranni.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/modelos-de-simulacion",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: "modelos-de-simulacion",
  organizationName: "abelranni",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/abelranni/modelos-de-simulacion/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Modelos de Simulación",
        logo: {
          alt: "Abel Ranni",
          src: "img/docabr.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Contenido",
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://github.com/abelranni/modelos-de-simulacion",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Contenido",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/abelranni/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/abelranni",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: "GitHub",
                href: "https://github.com/abelranni/modelos-de-simulacion",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Abel Ranni - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
