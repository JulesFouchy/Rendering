import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  title: "ICAN - Rendering",
  tagline: "An introduction to 3D Rendering",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://julesfouchy.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/Rendering/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "julesfouchy",
  projectName: "Rendering",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  plugins: [require.resolve("docusaurus-lunr-search")],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      title: "",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "deep_dive",
          position: "left",
          label: "Deep dive",
        },
        {
          type: "docSidebar",
          sidebarId: "M1GP",
          position: "left",
          label: "M1 GP",
        },
        {
          type: "docSidebar",
          sidebarId: "M2GP",
          position: "left",
          label: "M2 GP",
        },
        { to: "/Ressources", label: "Ressources", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Pour me contacter :",
          items: [
            {
              label: "Discord",
              to: `https://discord.com/users/372812330742054914`,
            },
            {
              label: "E-Mail",
              to: `mailto:jules.fouchy@ntymail.com`,
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
