import type { LocalizedText } from "./types";

export type Affiliation = {
  id: string;
  kind: LocalizedText;
  name: LocalizedText;
  role: LocalizedText;
  period: string;
  signal: LocalizedText;
  initials: string;
  logoSrc?: string;
  logoPlate: "light" | "dark" | "accent";
  accentRgb: string;
  sourceUrl?: string;
};

export const affiliations: Affiliation[] = [
  {
    id: "lingnan-university",
    kind: { zh: "教育", en: "Education", zhHant: "教育" },
    name: { zh: "岭南大学", en: "Lingnan University", zhHant: "嶺南大學" },
    role: {
      zh: "AI 博士已录取｜AI 与商业分析硕士",
      en: "AI PhD admitted | MSc in AI and Business Analytics",
      zhHant: "AI 博士已錄取｜AI 與商業分析碩士"
    },
    period: "2024 - 2029",
    signal: {
      zh: "研究方向：智能合约安全、LLM Agent 与 RAG 系统",
      en: "Focus: smart contract security, LLM Agent workflows, and RAG systems",
      zhHant: "研究方向：智慧合約安全、LLM Agent 與 RAG 系統"
    },
    initials: "LU",
    logoSrc: "/affiliations/lingnan-university.png",
    logoPlate: "light",
    accentRgb: "34 211 238",
    sourceUrl: "https://www.ln.edu.hk/en"
  },
  {
    id: "cqust",
    kind: { zh: "教育", en: "Education", zhHant: "教育" },
    name: { zh: "重庆科技大学", en: "Chongqing University of Science and Technology", zhHant: "重慶科技大學" },
    role: { zh: "能源化学工程本科", en: "Bachelor in Energy and Chemical Engineering", zhHant: "能源化學工程本科" },
    period: "2020 - 2024",
    signal: {
      zh: "化学工程背景，训练实验、分析与工程基础",
      en: "Chemical engineering background with experiment, analysis, and engineering fundamentals",
      zhHant: "化學工程背景，訓練實驗、分析與工程基礎"
    },
    initials: "CQ",
    logoSrc: "/affiliations/cqust.png",
    logoPlate: "dark",
    accentRgb: "125 211 252",
    sourceUrl: "https://www.cqust.edu.cn/"
  },
  {
    id: "kaidi-feiyan",
    kind: { zh: "实习", en: "Internship", zhHant: "實習" },
    name: {
      zh: "成都凯迪飞研科技有限责任公司",
      en: "Chengdu Kaidi Feiyan Technology Co., Ltd.",
      zhHant: "成都凱迪飛研科技有限責任公司"
    },
    role: {
      zh: "AI Agent 与 LightRAG 系统部署实习",
      en: "AI Agent and LightRAG System Deployment Intern",
      zhHant: "AI Agent 與 LightRAG 系統部署實習"
    },
    period: "2026.06 - 2026.08",
    signal: {
      zh: "内网智能体、LightRAG 知识库、公文排版 Worker",
      en: "Intranet agents, LightRAG knowledge base, and document-formatting Worker",
      zhHant: "內網智能體、LightRAG 知識庫、公文排版 Worker"
    },
    initials: "KD",
    logoPlate: "accent",
    accentRgb: "132 204 22"
  },
  {
    id: "sharetronic",
    kind: { zh: "实习", en: "Internship", zhHant: "實習" },
    name: { zh: "协创数据技术股份有限公司", en: "Xiechuang Data Technology Co., Ltd.", zhHant: "協創數據技術股份有限公司" },
    role: { zh: "软件工程师助理", en: "Assistant Software Engineer", zhHant: "軟體工程師助理" },
    period: "2025.07 - 2025.08",
    signal: {
      zh: "Linux、SDK 编译、环境配置与构建排错",
      en: "Linux, SDK compilation, environment setup, and build troubleshooting",
      zhHant: "Linux、SDK 編譯、環境配置與構建排錯"
    },
    initials: "XC",
    logoSrc: "/affiliations/sharetronic-icon.png",
    logoPlate: "dark",
    accentRgb: "16 185 129",
    sourceUrl: "https://www.sharetronic.com/"
  }
];
