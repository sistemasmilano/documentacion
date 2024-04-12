import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "CGI V3",
  tagline: "documentacion de la version 3 de CGI",
  favicon: "img/milano32.png",

  // Set the production url of your site here
  url: "http://pruebas-mm.milano-melody.net/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/CGIV3/doc/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Milano", // Usually your GitHub org/user name.
  projectName: "CGIV3", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/sistemasmilano/documentacion/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/sistemasmilano/documentacion/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "CGI V3",
      logo: {
        alt: "CGI V3 Logo",
        src: "img/logo.jpeg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/sistemasmilano/CGIV3.Client",
          label: "Client",
          position: "right",
        },
        {
          href: "https://github.com/sistemasmilano/CGIV3.Server",
          label: "Server",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "CGI ",
          items: [
            {
              label: "BASE",
              href: "https://cgi.melody-milano.com.mx/CGI/default.aspx",
            },
            {
              label: "V2",
              href: "https://cgi.melody-milano.com.mx/CGIV2",
            },
            {
              label: "V3",
              href: "https://cgi.melody-milano.com.mx/CGIV3/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - Milano Operadora S.A. de C.V.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
