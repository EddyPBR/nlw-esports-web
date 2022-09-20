import type { DefaultSeoProps } from "next-seo";

export const SEO: DefaultSeoProps = {
  title: "NLW e-Sports",
  description: "Encontre seu duo ou squad perfeito!",
  canonical: process.env.NEXT_PUBLIC_WEBSITE_URL,
  openGraph: {
    url: process.env.NEXT_PUBLIC_WEBSITE_URL,
    title: "NLW e-Sports",
    description: "Encontre seu duo ou squad perfeito!",
    locale: "pt-br",
    images: [
      {
        url:
          process.env.NEXT_PUBLIC_WEBSITE_URL +
          "/images/nlw-esports-wallpaper-logo.png",
        width: 1440,
        height: 630,
        alt: "wallpaper NLW-eSports",
        type: "image/png",
      },
      {
        url:
          process.env.NEXT_PUBLIC_WEBSITE_URL +
          "/images/nlw-esports-wallpaper-games.png",
        width: 1440,
        height: 630,
        alt: "wallpaper NLW-eSports games",
        type: "image/png",
      },
    ],
    site_name: "NLW e-Sports",
  },
  twitter: {
    handle: "@eddypbr",
    site: process.env.NEXT_PUBLIC_WEBSITE_URL,
    cardType: "summary_large_image",
  },
  robotsProps: {
    nosnippet: true,
    notranslate: true,
    noimageindex: true,
    noarchive: true,
    maxSnippet: -1,
    maxImagePreview: "none",
    maxVideoPreview: -1,
  },
  additionalMetaTags: [
    {
      name: "application-name",
      content: "NLW e-Sports",
    },
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge; chrome=1",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: process.env.NEXT_PUBLIC_WEBSITE_URL + "/favicon.ico",
    },
    {
      rel: "manifest",
      href: process.env.NEXT_PUBLIC_WEBSITE_URL + "manifest.json",
    },
  ],
};
