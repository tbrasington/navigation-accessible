import type { Theme } from "theme-ui";

export const theme: Theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
  },
  breakpoints: ["30em", "40em", "54em", "90em", "125em"],
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    p: {
      fontSize: [2, 3],
    },
    h1: {
      variant: "text.heading",
      fontSize: [5, 6, 7],
    },
    h2: {
      variant: "text.heading",
      fontSize: [4, 5],
    },
  },
};
