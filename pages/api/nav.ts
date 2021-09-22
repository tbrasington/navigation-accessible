// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
export interface NavigationProps {
  label: Label[];
  link: Link;
  main_url: Link;
  title: string;
  document: Document;
}

export interface Document {
  id: string;
  uid: string;
  url: null;
  type: AlternateLanguageType;
  href: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  linked_documents: any[];
  lang: Lang;
  alternate_languages: AlternateLanguage[];
  data: Data;
}

export interface AlternateLanguage {
  id: string;
  uid: string;
  type: AlternateLanguageType;
  lang: string;
}

export type AlternateLanguageType = "entry" | "navigation_tray";

export interface Data {
  title: Label[];
  region: string;
  column_1_title: Label[];
  column_1: Column[];
  column_2_title: Label[];
  column_2: Column[];
  column_3_title: Label[];
  column_3: Column[];
  image: Image;
  internal_advert_title: Label[];
  internal_advert_text: Label[];
  link: Link;
  link_label: Label[];
}

export interface Column {
  label: Label[];
  prismic_link: Link;
  internal_url: null;
  commerce_tools_category: CommerceToolsCategory | null;
}

export interface CommerceToolsCategory {
  key: string;
  slug: Slug;
}

export interface Slug {
  en: string;
  is: string;
}

export interface Label {
  type: LabelType;
  text: string;
  spans: any[];
}

export type LabelType =
  | "heading1"
  | "heading2"
  | "heading4"
  | "heading6"
  | "paragraph";

export interface Link {
  link_type: LinkType;
  id?: string;
  type?: AlternateLanguageType;
  tags?: string[];
  slug?: string;
  lang?: Lang;
  first_publication_date?: string;
  last_publication_date?: string;
  uid?: string;
  isBroken?: boolean;
}

export type Lang = "en-gb";

export type LinkType = "Document";

export interface Image {
  dimensions: Dimensions;
  alt: null;
  copyright: null;
  url: string;
}

export interface Dimensions {
  width: number;
  height: number;
}

export const navData: NavigationProps[] = [
  {
    label: [
      {
        type: "heading4",
        text: "Men",
        spans: [],
      },
    ],
    link: {
      id: "XyAyyhMAACEAe8Rs",
      type: "navigation_tray",
      tags: ["navigation"],
      slug: "men--english",
      lang: "en-gb",
      first_publication_date: "2020-07-28T14:26:40+0000",
      last_publication_date: "2021-08-13T15:24:09+0000",
      uid: "men",
      link_type: "Document",
      isBroken: false,
    },
    main_url: {
      id: "XyKsMRAAACYAmq6H",
      type: "entry",
      tags: ["landing-page", "index"],
      slug: "men",
      lang: "en-gb",
      first_publication_date: "2020-07-30T11:29:20+0000",
      last_publication_date: "2021-08-13T15:32:59+0000",
      uid: "men",
      link_type: "Document",
      isBroken: false,
    },
    title: "Men",
    document: {
      id: "XyAyyhMAACEAe8Rs",
      uid: "men",
      url: null,
      type: "navigation_tray",
      href: "https://sixty-six-north-dev.cdn.prismic.io/api/v2/documents/search?ref=YUrsGhEAACAAi86I&integrationFieldsRef=sixty-six-north-dev%7E2bca0098-4adf-4abd-a430-b957f4538feb&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XyAyyhMAACEAe8Rs%22%29+%5D%5D",
      tags: ["navigation"],
      first_publication_date: "2020-07-28T14:26:40+0000",
      last_publication_date: "2021-08-13T15:24:09+0000",
      slugs: ["men--english", "men"],
      linked_documents: [],
      lang: "en-gb",
      alternate_languages: [
        {
          id: "XyR1qBEAACQA_rKX",
          uid: "men",
          type: "navigation_tray",
          lang: "is",
        },
      ],
      data: {
        title: [
          {
            type: "heading1",
            text: "Men | English  ",
            spans: [],
          },
        ],
        region: "uk",
        column_1_title: [
          {
            type: "heading2",
            text: "Shop",
            spans: [],
          },
        ],
        column_1: [
          {
            label: [
              {
                type: "heading6",
                text: "Coats & Jackets",
                spans: [],
              },
            ],
            prismic_link: {
              link_type: "Document",
            },
            internal_url: null,
            commerce_tools_category: {
              key: "men-outerlayers",
              slug: {
                en: "men-jackets-and-coats",
                is: "karlar-yfirhafnir",
              },
            },
          },
          {
            label: [
              {
                type: "heading6",
                text: "Tops & Vests",
                spans: [],
              },
            ],
            prismic_link: {
              link_type: "Document",
            },
            internal_url: null,
            commerce_tools_category: {
              key: "men-tops",
              slug: {
                en: "men-tops-and-vests",
                is: "karlar-peysur-og-vesti",
              },
            },
          },
          {
            label: [
              {
                type: "heading6",
                text: "Bottoms",
                spans: [],
              },
            ],
            prismic_link: {
              link_type: "Document",
            },
            internal_url: null,
            commerce_tools_category: {
              key: "men-bottoms",
              slug: {
                en: "men-bottoms",
                is: "karlar-buxur",
              },
            },
          },
          {
            label: [
              {
                type: "heading6",
                text: "Accessories",
                spans: [],
              },
            ],
            prismic_link: {
              link_type: "Document",
            },
            internal_url: null,
            commerce_tools_category: {
              key: "men-accessories",
              slug: {
                en: "men-accessories",
                is: "karlar-aukahlutir",
              },
            },
          },
        ],
        column_2_title: [
          {
            type: "heading2",
            text: "Ideas and guides",
            spans: [],
          },
        ],
        column_2: [
          {
            label: [
              {
                type: "heading6",
                text: "Trail running",
                spans: [],
              },
            ],
            prismic_link: {
              id: "YPGSqBUAACUAs0IH",
              type: "entry",
              tags: [],
              slug: "trail-running-gear",
              lang: "en-gb",
              first_publication_date: "2021-07-16T14:09:34+0000",
              last_publication_date: "2021-07-16T14:09:34+0000",
              uid: "trail-running-gear",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "What to wear in Iceland",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwZCKBQAACUAmEvx",
              type: "entry",
              tags: ["nordur-journal"],
              slug: "what-to-wear-in-iceland",
              lang: "en-gb",
              first_publication_date: "2020-07-12T20:54:37+0000",
              last_publication_date: "2020-08-10T13:35:45+0000",
              uid: "what-to-wear-in-iceland",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Winter running",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwXkXxQAACYAlrLY",
              type: "entry",
              tags: ["Guides", "nordur-journal"],
              slug: "winter-running-guide",
              lang: "en-gb",
              first_publication_date: "2020-07-08T15:41:26+0000",
              last_publication_date: "2021-09-02T15:55:33+0000",
              uid: "winter-running-guide",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Hiking in Iceland",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwXHxxQAACMAljJY",
              type: "entry",
              tags: ["nordur-journal", "Guides"],
              slug: "hiking-in-iceland",
              lang: "en-gb",
              first_publication_date: "2020-07-08T13:19:06+0000",
              last_publication_date: "2021-02-17T13:33:15+0000",
              uid: "hiking-in-iceland",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Skiing in Iceland",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwZCKBQAACUAmEvz",
              type: "entry",
              tags: ["nordur-journal", "Guides"],
              slug: "layering",
              lang: "en-gb",
              first_publication_date: "2020-07-13T11:03:22+0000",
              last_publication_date: "2021-01-21T11:48:11+0000",
              uid: "layering",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
        ],
        column_3_title: [
          {
            type: "heading2",
            text: "Sagas: Our Icons",
            spans: [],
          },
        ],
        column_3: [
          {
            label: [
              {
                type: "heading6",
                text: "Snæfell",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwnHlBQAACMAp92-",
              type: "entry",
              tags: ["saga"],
              slug: "saga--sn%C3%A6fell",
              lang: "en-gb",
              first_publication_date: "2020-07-11T16:31:56+0000",
              last_publication_date: "2021-03-30T07:53:18+0000",
              uid: "saga-snaefell",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Tindur Down",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwsJ4hQAACMArWui",
              type: "entry",
              tags: ["saga"],
              slug: "saga--tindur-down",
              lang: "en-gb",
              first_publication_date: "2020-07-12T13:23:57+0000",
              last_publication_date: "2021-09-21T15:46:15+0000",
              uid: "saga-tindur-down",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Jökla",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XuJ8kxAAACMAXpjo",
              type: "entry",
              tags: ["saga", "jokla"],
              slug: "saga--jokla",
              lang: "en-gb",
              first_publication_date: "2020-06-11T18:49:34+0000",
              last_publication_date: "2021-09-21T15:46:15+0000",
              uid: "jokla",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Drangajökull",
                spans: [],
              },
            ],
            prismic_link: {
              id: "X4AqthIAACIAGofr",
              type: "entry",
              tags: ["saga"],
              slug: "saga--drangajokull",
              lang: "en-gb",
              first_publication_date: "2020-11-03T13:00:25+0000",
              last_publication_date: "2021-08-27T09:58:38+0000",
              uid: "drangajokull",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
        ],
        image: {
          dimensions: {
            width: 4000,
            height: 4000,
          },
          alt: null,
          copyright: null,
          url: "https://images.prismic.io/sixty-six-north-dev/c7e10aeb-d8f1-4a28-bd78-e55cc14bd3e4_66North_AW21_22_V4A4541+2.jpeg?auto=compress,format&rect=0,1917,5464,5464&w=4000&h=4000",
        },
        internal_advert_title: [
          {
            type: "heading6",
            text: "Dyngja Down Jacket",
            spans: [],
          },
        ],
        internal_advert_text: [
          {
            type: "heading1",
            text: "16 years of style.",
            spans: [],
          },
        ],
        link: {
          id: "Xwm--hQAACMAp7fv",
          type: "entry",
          tags: ["nordur-journal", "Collections"],
          slug: "dyngja-down-jacket",
          lang: "en-gb",
          first_publication_date: "2020-07-13T13:33:02+0000",
          last_publication_date: "2021-08-26T12:51:03+0000",
          uid: "dyngja-down-jacket",
          link_type: "Document",
          isBroken: false,
        },
        link_label: [
          {
            type: "heading6",
            text: "Learn more",
            spans: [],
          },
        ],
      },
    },
  },
  {
    label: [
      {
        type: "heading4",
        text: "Women",
        spans: [],
      },
    ],
    link: {
      id: "XyA2FhMAACMAe9Jk",
      type: "navigation_tray",
      tags: ["navigation"],
      slug: "women--english",
      lang: "en-gb",
      first_publication_date: "2020-07-28T14:35:17+0000",
      last_publication_date: "2021-08-13T15:24:00+0000",
      uid: "women",
      link_type: "Document",
      isBroken: false,
    },
    main_url: {
      id: "XyKmUBAAAB8AmpRO",
      type: "entry",
      tags: ["landing-page", "index"],
      slug: "women",
      lang: "en-gb",
      first_publication_date: "2020-07-30T11:15:51+0000",
      last_publication_date: "2021-08-13T11:57:36+0000",
      uid: "women",
      link_type: "Document",
      isBroken: false,
    },
    title: "Women",
    document: {
      id: "XyA2FhMAACMAe9Jk",
      uid: "women",
      url: null,
      type: "navigation_tray",
      href: "https://sixty-six-north-dev.cdn.prismic.io/api/v2/documents/search?ref=YUrsGhEAACAAi86I&integrationFieldsRef=sixty-six-north-dev%7E2bca0098-4adf-4abd-a430-b957f4538feb&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XyA2FhMAACMAe9Jk%22%29+%5D%5D",
      tags: ["navigation"],
      first_publication_date: "2020-07-28T14:35:17+0000",
      last_publication_date: "2021-08-13T15:24:00+0000",
      slugs: ["women--english", "men--english"],
      linked_documents: [],
      lang: "en-gb",
      alternate_languages: [],
      data: {
        title: [
          {
            type: "heading1",
            text: "Women | English  ",
            spans: [],
          },
        ],
        region: "uk",
        column_1_title: [
          {
            type: "heading2",
            text: "Shop",
            spans: [],
          },
        ],
        column_1: [
          {
            label: [
              {
                type: "heading6",
                text: "Coats & Jackets",
                spans: [],
              },
            ],
            prismic_link: {
              link_type: "Document",
            },
            internal_url: null,
            commerce_tools_category: {
              key: "women-outerlayers",
              slug: {
                en: "women-jackets-and-coats",
                is: "konur-yfirhafnir",
              },
            },
          },
          {
            label: [
              {
                type: "heading6",
                text: "Tops & Vests",
                spans: [],
              },
            ],
            prismic_link: {
              link_type: "Document",
            },
            internal_url: null,
            commerce_tools_category: {
              key: "women-tops",
              slug: {
                en: "women-tops-and-vests",
                is: "konur-peysur-og-bolir",
              },
            },
          },
          {
            label: [
              {
                type: "heading6",
                text: "Bottoms",
                spans: [],
              },
            ],
            prismic_link: {
              link_type: "Document",
            },
            internal_url: null,
            commerce_tools_category: {
              key: "women-bottoms",
              slug: {
                en: "women-bottoms",
                is: "konur-buxur",
              },
            },
          },
          {
            label: [
              {
                type: "heading6",
                text: "Accessories",
                spans: [],
              },
            ],
            prismic_link: {
              link_type: "Document",
            },
            internal_url: null,
            commerce_tools_category: {
              key: "women-accessories",
              slug: {
                en: "women-accessories",
                is: "konur-aukahlutir",
              },
            },
          },
        ],
        column_2_title: [
          {
            type: "heading2",
            text: "Ideas and guides",
            spans: [],
          },
        ],
        column_2: [
          {
            label: [
              {
                type: "heading6",
                text: "Trail running",
                spans: [],
              },
            ],
            prismic_link: {
              id: "YPGSqBUAACUAs0IH",
              type: "entry",
              tags: [],
              slug: "trail-running-gear",
              lang: "en-gb",
              first_publication_date: "2021-07-16T14:09:34+0000",
              last_publication_date: "2021-07-16T14:09:34+0000",
              uid: "trail-running-gear",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "What to wear in Iceland",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwZCKBQAACUAmEvx",
              type: "entry",
              tags: ["nordur-journal"],
              slug: "what-to-wear-in-iceland",
              lang: "en-gb",
              first_publication_date: "2020-07-12T20:54:37+0000",
              last_publication_date: "2020-08-10T13:35:45+0000",
              uid: "what-to-wear-in-iceland",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Winter running",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwXkXxQAACYAlrLY",
              type: "entry",
              tags: ["Guides", "nordur-journal"],
              slug: "winter-running-guide",
              lang: "en-gb",
              first_publication_date: "2020-07-08T15:41:26+0000",
              last_publication_date: "2021-09-02T15:55:33+0000",
              uid: "winter-running-guide",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Hiking in Iceland",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwXHxxQAACMAljJY",
              type: "entry",
              tags: ["nordur-journal", "Guides"],
              slug: "hiking-in-iceland",
              lang: "en-gb",
              first_publication_date: "2020-07-08T13:19:06+0000",
              last_publication_date: "2021-02-17T13:33:15+0000",
              uid: "hiking-in-iceland",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Skiing in Iceland",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwZCKBQAACUAmEvz",
              type: "entry",
              tags: ["nordur-journal", "Guides"],
              slug: "layering",
              lang: "en-gb",
              first_publication_date: "2020-07-13T11:03:22+0000",
              last_publication_date: "2021-01-21T11:48:11+0000",
              uid: "layering",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
        ],
        column_3_title: [
          {
            type: "heading2",
            text: "Sagas: Our Icons",
            spans: [],
          },
        ],
        column_3: [
          {
            label: [
              {
                type: "heading6",
                text: "Snæfell",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwnHlBQAACMAp92-",
              type: "entry",
              tags: ["saga"],
              slug: "saga--sn%C3%A6fell",
              lang: "en-gb",
              first_publication_date: "2020-07-11T16:31:56+0000",
              last_publication_date: "2021-03-30T07:53:18+0000",
              uid: "saga-snaefell",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Tindur Down",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwsJ4hQAACMArWui",
              type: "entry",
              tags: ["saga"],
              slug: "saga--tindur-down",
              lang: "en-gb",
              first_publication_date: "2020-07-12T13:23:57+0000",
              last_publication_date: "2021-09-21T15:46:15+0000",
              uid: "saga-tindur-down",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Jökla",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XuJ8kxAAACMAXpjo",
              type: "entry",
              tags: ["saga", "jokla"],
              slug: "saga--jokla",
              lang: "en-gb",
              first_publication_date: "2020-06-11T18:49:34+0000",
              last_publication_date: "2021-09-21T15:46:15+0000",
              uid: "jokla",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Drangajökull",
                spans: [],
              },
            ],
            prismic_link: {
              id: "X4AqthIAACIAGofr",
              type: "entry",
              tags: ["saga"],
              slug: "saga--drangajokull",
              lang: "en-gb",
              first_publication_date: "2020-11-03T13:00:25+0000",
              last_publication_date: "2021-08-27T09:58:38+0000",
              uid: "drangajokull",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
        ],
        image: {
          dimensions: {
            width: 4000,
            height: 4000,
          },
          alt: null,
          copyright: null,
          url: "https://images.prismic.io/sixty-six-north-dev/0c70ed19-2a27-4ead-a752-31d6960b1232_66North_AW21_22_5174+1.jpeg?auto=compress,format&rect=0,1365,5464,5464&w=4000&h=4000",
        },
        internal_advert_title: [
          {
            type: "heading6",
            text: "Dyngja Down Jacket",
            spans: [],
          },
        ],
        internal_advert_text: [
          {
            type: "paragraph",
            text: "16 years of style.",
            spans: [],
          },
        ],
        link: {
          id: "Xwm--hQAACMAp7fv",
          type: "entry",
          tags: ["nordur-journal", "Collections"],
          slug: "dyngja-down-jacket",
          lang: "en-gb",
          first_publication_date: "2020-07-13T13:33:02+0000",
          last_publication_date: "2021-08-26T12:51:03+0000",
          uid: "dyngja-down-jacket",
          link_type: "Document",
          isBroken: false,
        },
        link_label: [
          {
            type: "heading6",
            text: "Learn more",
            spans: [],
          },
        ],
      },
    },
  },
  {
    label: [
      {
        type: "heading4",
        text: "Norður Journal",
        spans: [],
      },
    ],
    link: {
      id: "XyAsxBMAACMAe6l6",
      type: "navigation_tray",
      tags: ["navigation"],
      slug: "navigation--nor%C3%B0ur-journal",
      lang: "en-gb",
      first_publication_date: "2020-07-28T13:56:07+0000",
      last_publication_date: "2021-07-09T09:49:31+0000",
      uid: "journeys",
      link_type: "Document",
      isBroken: false,
    },
    main_url: {
      id: "XuxqlhIAACMAs-_7",
      type: "entry",
      tags: ["nordur-journal", "index"],
      slug: "nor%C3%B0ur-journal",
      lang: "en-gb",
      first_publication_date: "2020-06-19T07:39:30+0000",
      last_publication_date: "2021-09-15T15:37:42+0000",
      uid: "nordur",
      link_type: "Document",
      isBroken: false,
    },
    title: "Norður Journal",
    document: {
      id: "XyAsxBMAACMAe6l6",
      uid: "journeys",
      url: null,
      type: "navigation_tray",
      href: "https://sixty-six-north-dev.cdn.prismic.io/api/v2/documents/search?ref=YUrsGhEAACAAi86I&integrationFieldsRef=sixty-six-north-dev%7E2bca0098-4adf-4abd-a430-b957f4538feb&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XyAsxBMAACMAe6l6%22%29+%5D%5D",
      tags: ["navigation"],
      first_publication_date: "2020-07-28T13:56:07+0000",
      last_publication_date: "2021-07-09T09:49:31+0000",
      slugs: ["navigation--nor%C3%B0ur-journal"],
      linked_documents: [],
      lang: "en-gb",
      alternate_languages: [
        {
          id: "XymkhREAACIAFZAA",
          uid: "norður-journal",
          type: "navigation_tray",
          lang: "is",
        },
      ],
      data: {
        title: [
          {
            type: "heading1",
            text: "Navigation | Norður Journal",
            spans: [],
          },
        ],
        region: "uk",
        column_1_title: [
          {
            type: "heading2",
            text: "Sections",
            spans: [],
          },
        ],
        column_1: [
          {
            label: [
              {
                type: "heading6",
                text: "Index",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XuxqlhIAACMAs-_7",
              type: "entry",
              tags: ["nordur-journal", "index"],
              slug: "nor%C3%B0ur-journal",
              lang: "en-gb",
              first_publication_date: "2020-06-19T07:39:30+0000",
              last_publication_date: "2021-09-15T15:37:42+0000",
              uid: "nordur",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "People",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XyMkJhEAACMA-OP4",
              type: "entry",
              tags: ["nordur-journal", "index"],
              slug: "nor%C3%B0ur-journal--people",
              lang: "en-gb",
              first_publication_date: "2020-07-30T19:50:07+0000",
              last_publication_date: "2021-09-15T15:43:55+0000",
              uid: "nordur-people",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Journeys",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XyMwLBEAACEA-RmM",
              type: "entry",
              tags: ["nordur-journal", "index"],
              slug: "nor%C3%B0ur-journal--journeys",
              lang: "en-gb",
              first_publication_date: "2020-07-30T20:42:19+0000",
              last_publication_date: "2021-08-16T13:27:22+0000",
              uid: "nordur-people1",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Guides",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XyMzShEAACQA-Sdy",
              type: "entry",
              tags: ["nordur-journal", "index"],
              slug: "nor%C3%B0ur-journal--guides",
              lang: "en-gb",
              first_publication_date: "2020-07-30T20:55:23+0000",
              last_publication_date: "2021-07-16T15:00:49+0000",
              uid: "nordur-guides",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Collections",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XyMz0xEAACQA-Snh",
              type: "entry",
              tags: ["nordur-journal", "index"],
              slug: "nor%C3%B0ur-journal--collections",
              lang: "en-gb",
              first_publication_date: "2020-07-30T20:56:46+0000",
              last_publication_date: "2021-08-13T13:24:04+0000",
              uid: "nordur-collections",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Announcements",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XyM0JREAACQA-StT",
              type: "entry",
              tags: ["nordur-journal", "index"],
              slug: "nor%C3%B0ur-journal--announcements",
              lang: "en-gb",
              first_publication_date: "2020-07-30T21:01:27+0000",
              last_publication_date: "2021-06-08T14:08:15+0000",
              uid: "nordur-announcements",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
        ],
        column_2_title: [
          {
            type: "heading2",
            text: "Win a trip to Iceland",
            spans: [],
          },
        ],
        column_2: [
          {
            label: [
              {
                type: "heading6",
                text: "Sign up",
                spans: [],
              },
            ],
            prismic_link: {
              id: "YJpRbREAACMA84JU",
              type: "entry",
              tags: [],
              slug: "win-a-trip-to-iceland",
              lang: "en-gb",
              first_publication_date: "2021-06-02T15:57:06+0000",
              last_publication_date: "2021-09-20T12:59:52+0000",
              uid: "win-a-trip-to-iceland",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
        ],
        column_3_title: [
          {
            type: "heading2",
            text: "The Icelandic Art of Living",
            spans: [],
          },
        ],
        column_3: [
          {
            label: [
              {
                type: "heading6",
                text: "You have to take chances",
                spans: [],
              },
            ],
            prismic_link: {
              id: "YORoUBIAACUAWdnm",
              type: "entry",
              tags: [],
              slug: "you-have-to-take-chances",
              lang: "en-gb",
              first_publication_date: "2021-07-06T16:21:56+0000",
              last_publication_date: "2021-07-21T13:21:50+0000",
              uid: "baltasars-katla",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "What a time to be a volcanologist!",
                spans: [],
              },
            ],
            prismic_link: {
              id: "YJujQxEAACUA-Wj_",
              type: "entry",
              tags: ["nordur-journal", "People"],
              slug: "volcano-erupts-in-iceland",
              lang: "en-gb",
              first_publication_date: "2021-05-12T13:12:18+0000",
              last_publication_date: "2021-06-02T15:47:53+0000",
              uid: "2021-volcano-eruption-geology",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Útilykt",
                spans: [],
              },
            ],
            prismic_link: {
              id: "YKJKBREAAB4AnTb7",
              type: "entry",
              tags: [
                "nordur-journal",
                "Collections",
                "Circular",
                "Announcement",
              ],
              slug: "utilykt",
              lang: "en-gb",
              first_publication_date: "2021-05-18T11:36:35+0000",
              last_publication_date: "2021-05-18T14:06:14+0000",
              uid: "utilykt-66north-fischersund",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "The Snowdrifts Cross Vatnajökull",
                spans: [],
              },
            ],
            prismic_link: {
              id: "YHW90xIAACIAy3-0",
              type: "entry",
              tags: ["nordur-journal", "Journeys", "People"],
              slug: "the-snowdrifts-cross-vatnajokull",
              lang: "en-gb",
              first_publication_date: "2021-04-13T16:14:06+0000",
              last_publication_date: "2021-04-13T16:19:57+0000",
              uid: "the-snowdrifts-cross-vatnajokull",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Fjord Lines",
                spans: [],
              },
            ],
            prismic_link: {
              id: "X-nUCRIAAMip_7Ig",
              type: "entry",
              tags: ["People", "Circular"],
              slug: "fjord-lines---runar-petur",
              lang: "en-gb",
              first_publication_date: "2021-01-11T11:22:42+0000",
              last_publication_date: "2021-06-02T16:37:14+0000",
              uid: "fjord-lines-runar-petur",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Life at the edge of ice",
                spans: [],
              },
            ],
            prismic_link: {
              id: "X70gUxIAACYAehka",
              type: "entry",
              tags: ["nordur-journal", "People"],
              slug: "life-at-the-edge-of-the-ice",
              lang: "en-gb",
              first_publication_date: "2020-11-25T13:20:10+0000",
              last_publication_date: "2021-06-02T16:11:54+0000",
              uid: "nordurlife-at-the-edge-of-ice",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Climbing the Ram",
                spans: [],
              },
            ],
            prismic_link: {
              id: "X5FzrxIAACEAgrPR",
              type: "entry",
              tags: ["nordur-journal", "Journeys"],
              slug: "climbing-the-ram",
              lang: "en-gb",
              first_publication_date: "2020-10-23T11:36:27+0000",
              last_publication_date: "2021-01-06T14:04:15+0000",
              uid: "climbing-the-ram",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
        ],
        image: {
          dimensions: {
            width: 4000,
            height: 4000,
          },
          alt: null,
          copyright: null,
          url: "https://images.prismic.io/sixty-six-north-dev/3a2df4d9-2b5a-46d4-a227-d7f92d37a1ee_Balti_Katla_+%285%29+.jpeg?auto=compress,format&rect=668,0,2667,2667&w=4000&h=4000",
        },
        internal_advert_title: [
          {
            type: "heading6",
            text: "NORÐUR Journal",
            spans: [],
          },
        ],
        internal_advert_text: [
          {
            type: "heading2",
            text: "You have to take chances",
            spans: [],
          },
        ],
        link: {
          id: "YORoUBIAACUAWdnm",
          type: "entry",
          tags: [],
          slug: "you-have-to-take-chances",
          lang: "en-gb",
          first_publication_date: "2021-07-06T16:21:56+0000",
          last_publication_date: "2021-07-21T13:21:50+0000",
          uid: "baltasars-katla",
          link_type: "Document",
          isBroken: false,
        },
        link_label: [
          {
            type: "heading6",
            text: "Read",
            spans: [],
          },
        ],
      },
    },
  },
  {
    label: [
      {
        type: "heading4",
        text: "Circular",
        spans: [],
      },
    ],
    link: {
      id: "XyAuwxMAACMAe7KE",
      type: "navigation_tray",
      tags: ["navigation"],
      slug: "navigation--circular",
      lang: "en-gb",
      first_publication_date: "2020-07-28T14:03:29+0000",
      last_publication_date: "2020-11-25T13:31:55+0000",
      uid: "navigation-circular",
      link_type: "Document",
      isBroken: false,
    },
    main_url: {
      id: "XuyJbRIAACAAtHis",
      type: "entry",
      tags: ["circular-page"],
      slug: "circular",
      lang: "en-gb",
      first_publication_date: "2020-06-19T09:46:24+0000",
      last_publication_date: "2021-07-16T09:37:11+0000",
      uid: "circular",
      link_type: "Document",
      isBroken: false,
    },
    title: "Circular",
    document: {
      id: "XyAuwxMAACMAe7KE",
      uid: "navigation-circular",
      url: null,
      type: "navigation_tray",
      href: "https://sixty-six-north-dev.cdn.prismic.io/api/v2/documents/search?ref=YUrsGhEAACAAi86I&integrationFieldsRef=sixty-six-north-dev%7E2bca0098-4adf-4abd-a430-b957f4538feb&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XyAuwxMAACMAe7KE%22%29+%5D%5D",
      tags: ["navigation"],
      first_publication_date: "2020-07-28T14:03:29+0000",
      last_publication_date: "2020-11-25T13:31:55+0000",
      slugs: ["navigation--circular"],
      linked_documents: [],
      lang: "en-gb",
      alternate_languages: [
        {
          id: "XymayBEAACMAFWQl",
          uid: "navigation-circular",
          type: "navigation_tray",
          lang: "is",
        },
      ],
      data: {
        title: [
          {
            type: "heading1",
            text: "Navigation | Circular",
            spans: [],
          },
        ],
        region: "uk",
        column_1_title: [
          {
            type: "heading2",
            text: "About",
            spans: [],
          },
        ],
        column_1: [
          {
            label: [
              {
                type: "heading6",
                text: "Heritage",
                spans: [],
              },
            ],
            prismic_link: {
              id: "Xp8aaBIAACAAz-ww",
              type: "entry",
              tags: ["heritage", "circular-page"],
              slug: "heritage",
              lang: "en-gb",
              first_publication_date: "2020-04-22T13:52:13+0000",
              last_publication_date: "2021-09-21T09:06:56+0000",
              uid: "heritage",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Made for Life",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XuyJbRIAACAAtHis",
              type: "entry",
              tags: ["circular-page"],
              slug: "circular",
              lang: "en-gb",
              first_publication_date: "2020-06-19T09:46:24+0000",
              last_publication_date: "2021-07-16T09:37:11+0000",
              uid: "circular",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
        ],
        column_2_title: [
          {
            type: "heading2",
            text: "Our commitments",
            spans: [],
          },
        ],
        column_2: [
          {
            label: [
              {
                type: "heading6",
                text: "Carbon neutral since 2019",
                spans: [],
              },
            ],
            prismic_link: {
              id: "Xwa9jRQAACQAmmvM",
              type: "entry",
              tags: ["circular-page"],
              slug: "circular--environment",
              lang: "en-gb",
              first_publication_date: "2020-07-09T06:47:52+0000",
              last_publication_date: "2021-09-13T14:23:37+0000",
              uid: "circular-environment",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Design philosophy",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwbLhRQAACUAmqg2",
              type: "entry",
              tags: ["circular-page"],
              slug: "circular--design-philosophy",
              lang: "en-gb",
              first_publication_date: "2020-07-09T07:51:51+0000",
              last_publication_date: "2020-11-25T09:17:56+0000",
              uid: "circular-design-philosophy",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Materials that last",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwbMoxQAACUAmq0u",
              type: "entry",
              tags: ["circular-page"],
              slug: "circular--materials",
              lang: "en-gb",
              first_publication_date: "2020-07-09T07:53:20+0000",
              last_publication_date: "2021-04-09T12:22:13+0000",
              uid: "circular-materials",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Product services",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwbNgBQAACUAmrEQ",
              type: "entry",
              tags: ["circular-page"],
              slug: "circular--services",
              lang: "en-gb",
              first_publication_date: "2020-07-09T07:57:41+0000",
              last_publication_date: "2020-11-25T09:17:56+0000",
              uid: "circular-services",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
        ],
        column_3_title: [
          {
            type: "heading2",
            text: "Actions",
            spans: [],
          },
        ],
        column_3: [
          {
            label: [
              {
                type: "heading6",
                text: "Glacier Friday 2020",
                spans: [],
              },
            ],
            prismic_link: {
              id: "X66SPBIAACYAOpgM",
              type: "entry",
              tags: ["nordur-journal", "Announcement"],
              slug: "glacier-friday-2020",
              lang: "en-gb",
              first_publication_date: "2020-11-25T13:20:10+0000",
              last_publication_date: "2021-06-02T16:30:43+0000",
              uid: "glacier-friday-2020",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Building our community",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwbPYRQAACMAmrlu",
              type: "entry",
              tags: ["circular-page"],
              slug: "circular--community",
              lang: "en-gb",
              first_publication_date: "2020-07-09T08:05:54+0000",
              last_publication_date: "2021-09-13T10:20:20+0000",
              uid: "circular-community",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "People & places",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwbOXxQAACUAmrT4",
              type: "entry",
              tags: ["circular-page"],
              slug: "circular--people--places",
              lang: "en-gb",
              first_publication_date: "2020-07-09T08:03:28+0000",
              last_publication_date: "2021-07-19T10:40:54+0000",
              uid: "circular-people-places",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
        ],
        image: {
          dimensions: {
            width: 4000,
            height: 4000,
          },
          alt: null,
          copyright: null,
          url: "https://images.prismic.io/sixty-six-north-dev/0f535326-3910-4a99-8515-aeb9320613d6_BH-_Highlands.jpg?auto=compress,format&rect=0,299,2394,2394&w=4000&h=4000",
        },
        internal_advert_title: [
          {
            type: "heading6",
            text: "Made for life",
            spans: [],
          },
        ],
        internal_advert_text: [
          {
            type: "paragraph",
            text: "We want the world to experience the power and beauty of the North.",
            spans: [],
          },
        ],
        link: {
          id: "XuyJbRIAACAAtHis",
          type: "entry",
          tags: ["circular-page"],
          slug: "circular",
          lang: "en-gb",
          first_publication_date: "2020-06-19T09:46:24+0000",
          last_publication_date: "2021-07-16T09:37:11+0000",
          uid: "circular",
          link_type: "Document",
          isBroken: false,
        },
        link_label: [
          {
            type: "heading6",
            text: "Read more",
            spans: [],
          },
        ],
      },
    },
  },
  {
    label: [
      {
        type: "heading4",
        text: "Service",
        spans: [],
      },
    ],
    link: {
      id: "XyA25xMAACMAe9Xk",
      type: "navigation_tray",
      tags: ["navigation"],
      slug: "navigation---service",
      lang: "en-gb",
      first_publication_date: "2020-07-28T14:33:10+0000",
      last_publication_date: "2021-06-04T14:38:11+0000",
      uid: "service",
      link_type: "Document",
      isBroken: false,
    },
    main_url: {
      id: "XwbNgBQAACUAmrEQ",
      type: "entry",
      tags: ["circular-page"],
      slug: "circular--services",
      lang: "en-gb",
      first_publication_date: "2020-07-09T07:57:41+0000",
      last_publication_date: "2020-11-25T09:17:56+0000",
      uid: "circular-services",
      link_type: "Document",
      isBroken: false,
    },
    title: "Service",
    document: {
      id: "XyA25xMAACMAe9Xk",
      uid: "service",
      url: null,
      type: "navigation_tray",
      href: "https://sixty-six-north-dev.cdn.prismic.io/api/v2/documents/search?ref=YUrsGhEAACAAi86I&integrationFieldsRef=sixty-six-north-dev%7E2bca0098-4adf-4abd-a430-b957f4538feb&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22XyA25xMAACMAe9Xk%22%29+%5D%5D",
      tags: ["navigation"],
      first_publication_date: "2020-07-28T14:33:10+0000",
      last_publication_date: "2021-06-04T14:38:11+0000",
      slugs: ["navigation---service", "service"],
      linked_documents: [],
      lang: "en-gb",
      alternate_languages: [
        {
          id: "Xyma2xEAACQAFWR7",
          uid: "service",
          type: "navigation_tray",
          lang: "is",
        },
      ],
      data: {
        title: [
          {
            type: "heading1",
            text: "Navigation  | Service",
            spans: [],
          },
        ],
        region: "uk",
        column_1_title: [
          {
            type: "heading2",
            text: "Information",
            spans: [],
          },
        ],
        column_1: [
          {
            label: [
              {
                type: "heading6",
                text: "Circular & Sustainability",
                spans: [],
              },
            ],
            prismic_link: {
              id: "Xwa9jRQAACQAmmvM",
              type: "entry",
              tags: ["circular-page"],
              slug: "circular--environment",
              lang: "en-gb",
              first_publication_date: "2020-07-09T06:47:52+0000",
              last_publication_date: "2021-09-13T14:23:37+0000",
              uid: "circular-environment",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Shipping & Delivery",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XweOUhQAACMAngkQ",
              type: "entry",
              tags: ["information-page"],
              slug: "shipping-and-delivery",
              lang: "en-gb",
              first_publication_date: "2020-07-09T21:39:41+0000",
              last_publication_date: "2020-07-30T20:18:02+0000",
              uid: "shipping-and-delivery",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Returns",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XweULRQAACQAniLx",
              type: "entry",
              tags: ["information-page"],
              slug: "returns",
              lang: "en-gb",
              first_publication_date: "2020-07-09T22:04:35+0000",
              last_publication_date: "2021-08-10T15:14:17+0000",
              uid: "returns",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Warranty & Payment",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XweRvxQAACQAnhhE",
              type: "entry",
              tags: ["information-page"],
              slug: "warranty-and-payment",
              lang: "en-gb",
              first_publication_date: "2020-07-09T21:54:35+0000",
              last_publication_date: "2021-07-14T14:25:18+0000",
              uid: "warranty-and-payment",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Privacy policy",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XweMLBQAACMAnf94",
              type: "entry",
              tags: ["information-page"],
              slug: "privacy-policy",
              lang: "en-gb",
              first_publication_date: "2020-07-09T21:30:57+0000",
              last_publication_date: "2021-07-23T10:19:50+0000",
              uid: "privacy-policy",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Size guide",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XweU8RQAACQAniZg",
              type: "entry",
              tags: ["information-page"],
              slug: "size-guide",
              lang: "en-gb",
              first_publication_date: "2020-07-09T22:10:20+0000",
              last_publication_date: "2020-08-05T10:45:37+0000",
              uid: "size-guide",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Product Care",
                spans: [],
              },
            ],
            prismic_link: {
              id: "Xwy8khQAACMAtMZ2",
              type: "entry",
              tags: ["circular-page"],
              slug: "circular--product-care",
              lang: "en-gb",
              first_publication_date: "2020-07-13T19:58:55+0000",
              last_publication_date: "2020-11-25T09:17:56+0000",
              uid: "circular-caring-for-your-products",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
        ],
        column_2_title: [
          {
            type: "heading2",
            text: "Services",
            spans: [],
          },
        ],
        column_2: [
          {
            label: [
              {
                type: "heading6",
                text: "Repairs",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwzG8RQAACMAtPSZ",
              type: "entry",
              tags: ["circular-page"],
              slug: "circular--product-repair",
              lang: "en-gb",
              first_publication_date: "2020-07-13T20:45:29+0000",
              last_publication_date: "2021-03-11T16:33:15+0000",
              uid: "circular-product-repair",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Custom embroidery and print",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwzLThQAACUAtQf-",
              type: "entry",
              tags: ["information-page", "services-page"],
              slug: "custom-embroidery-and-print",
              lang: "en-gb",
              first_publication_date: "2020-07-13T21:00:21+0000",
              last_publication_date: "2020-08-13T09:25:28+0000",
              uid: "custom-embroidery-and-print",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Custom design",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XwzKXRQAACQAtQPP",
              type: "entry",
              tags: ["information-page", "services-page"],
              slug: "custom-product-design",
              lang: "en-gb",
              first_publication_date: "2020-07-13T20:59:42+0000",
              last_publication_date: "2020-08-13T09:03:27+0000",
              uid: "custom-product-design",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
        ],
        column_3_title: [
          {
            type: "heading2",
            text: "Getting in touch",
            spans: [],
          },
        ],
        column_3: [
          {
            label: [
              {
                type: "heading6",
                text: "Contact Us",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XweJlxQAACYAnfPn",
              type: "entry",
              tags: ["information-page"],
              slug: "contact-us",
              lang: "en-gb",
              first_publication_date: "2020-07-09T21:18:18+0000",
              last_publication_date: "2020-08-14T08:46:17+0000",
              uid: "contact-details",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Store locator",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XvxA3xAAACYAfWLO",
              type: "entry",
              tags: ["store-page", "index"],
              slug: "stores",
              lang: "en-gb",
              first_publication_date: "2020-07-01T08:23:22+0000",
              last_publication_date: "2021-07-06T09:30:44+0000",
              uid: "find-a-store",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
          {
            label: [
              {
                type: "heading6",
                text: "Sponsorships & donations",
                spans: [],
              },
            ],
            prismic_link: {
              id: "XweKGhQAACYAnfY-",
              type: "entry",
              tags: ["information-page"],
              slug: "sponsorships-and-donations",
              lang: "en-gb",
              first_publication_date: "2020-07-09T21:24:45+0000",
              last_publication_date: "2020-07-30T20:19:50+0000",
              uid: "sponsorships-and-donations",
              link_type: "Document",
              isBroken: false,
            },
            internal_url: null,
            commerce_tools_category: null,
          },
        ],
        image: {
          dimensions: {
            width: 4000,
            height: 4000,
          },
          alt: null,
          copyright: null,
          url: "https://images.prismic.io/sixty-six-north-dev/67c12f5b-71f2-4d2b-992f-ab8cc236f13d_faxafen0store-image.png?auto=compress,format&rect=76,0,1209,1209&w=4000&h=4000",
        },
        internal_advert_title: [
          {
            type: "heading6",
            text: "Store Locator",
            spans: [],
          },
        ],
        internal_advert_text: [
          {
            type: "paragraph",
            text: "Visiting Iceland? Come say hello.",
            spans: [],
          },
        ],
        link: {
          id: "XvxA3xAAACYAfWLO",
          type: "entry",
          tags: ["store-page", "index"],
          slug: "stores",
          lang: "en-gb",
          first_publication_date: "2020-07-01T08:23:22+0000",
          last_publication_date: "2021-07-06T09:30:44+0000",
          uid: "find-a-store",
          link_type: "Document",
          isBroken: false,
        },
        link_label: [
          {
            type: "heading6",
            text: "Find a store",
            spans: [],
          },
        ],
      },
    },
  },
];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<{ data: NavigationProps[] }>
) {
  res.status(200).json({ data: navData });
}
