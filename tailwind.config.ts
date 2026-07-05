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
        ink: {
          950: "#03070b",
          900: "#061018",
          850: "#081522",
          800: "#0b1c2a"
        },
        signal: {
          cyan: "#22d3ee",
          blue: "#38bdf8",
          green: "#8cff74"
        }
      },
      fontFamily: {
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
      },
      boxShadow: {
        glow: "0 0 42px rgba(34, 211, 238, 0.18)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.36)"
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
