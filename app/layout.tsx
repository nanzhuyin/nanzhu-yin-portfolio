import type { Metadata } from "next";
import "./globals.css";
import { SiteProvider } from "@/components/site-provider";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const localizedHome = publicBasePath ? `${publicBasePath}/` : "/";

export const metadata: Metadata = {
  title: "阴南竹 | AI + Web3 Security Researcher",
  description: "AI + Web3 Security / LLM Agent / RAG Systems research-engineering portfolio for YIN Nanzhu.",
  keywords: ["YIN Nanzhu", "AI Security", "Smart Contract Auditing", "LLM Agent", "RAG Systems", "Web3 Research"],
  openGraph: {
    title: "阴南竹 | AI + Web3 Security Researcher",
    description: "Research-engineering portfolio spanning smart contract security, LLM agents, RAG systems, and Web3.",
    type: "profile"
  },
  robots: { index: true, follow: true },
  alternates: {
    languages: {
      "zh-CN": localizedHome,
      en: localizedHome,
      "zh-Hant": localizedHome
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="antialiased">
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
