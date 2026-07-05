import type { Metadata } from "next";
import "./globals.css";
import { SiteProvider } from "@/components/site-provider";

export const metadata: Metadata = {
  title: "阴南竹 | AI + Web3 Security Researcher",
  description: "AI + Web3 Security / LLM Agent / RAG Systems research-engineering portfolio for YIN Nanzhu.",
  alternates: {
    languages: {
      "zh-CN": "/",
      en: "/",
      "zh-Hant": "/"
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
