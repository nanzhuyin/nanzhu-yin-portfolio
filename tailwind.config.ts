import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        content: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)"
      },
      fontFamily: {
        display: [
          "Iowan Old Style",
          "Baskerville",
          "Songti SC",
          "STSong",
          "Noto Serif CJK SC",
          "Georgia",
          "serif"
        ],
        sans: [
          "Avenir Next",
          "PingFang SC",
          "Noto Sans CJK SC",
          "Microsoft YaHei",
          "system-ui",
          "sans-serif"
        ],
        mono: [
          "SFMono-Regular",
          "Cascadia Code",
          "JetBrains Mono",
          "Menlo",
          "monospace"
        ]
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("light", ".light &");
    })
  ]
};

export default config;
