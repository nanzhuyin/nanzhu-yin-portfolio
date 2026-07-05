import type { LocalizedText } from "./types";

export type ProfileHighlight = {
  label: LocalizedText;
  value: LocalizedText;
  detail: LocalizedText;
};

export const profileHighlights: ProfileHighlight[] = [
  {
    label: { zh: "Academic", en: "Academic", zhHant: "Academic" },
    value: { zh: "AI 博士已录取", en: "AI PhD admitted", zhHant: "AI 博士已錄取" },
    detail: {
      zh: "岭南大学人工智能方向，预计 2026 - 2029",
      en: "Lingnan University, Artificial Intelligence, expected 2026 - 2029",
      zhHant: "嶺南大學人工智慧方向，預計 2026 - 2029"
    }
  },
  {
    label: { zh: "Master", en: "Master", zhHant: "Master" },
    value: { zh: "Distinction 毕业", en: "Distinction graduate", zhHant: "Distinction 畢業" },
    detail: {
      zh: "人工智能与商业分析硕士，GPA 3.53/4.0",
      en: "MSc Artificial Intelligence and Business Analytics, GPA 3.53/4.0",
      zhHant: "人工智慧與商業分析碩士，GPA 3.53/4.0"
    }
  },
  {
    label: { zh: "Research", en: "Research", zhHant: "Research" },
    value: { zh: "智能合约安全", en: "Smart contract security", zhHant: "智慧合約安全" },
    detail: {
      zh: "两项智能合约安全相关论文已被会议录用",
      en: "Two smart-contract-security papers accepted by conferences",
      zhHant: "兩項智慧合約安全相關論文已被會議錄用"
    }
  },
  {
    label: { zh: "Engineering", en: "Engineering", zhHant: "Engineering" },
    value: { zh: "Agent / RAG 部署", en: "Agent / RAG deployment", zhHant: "Agent / RAG 部署" },
    detail: {
      zh: "内网 AI Agent、LightRAG、知识图谱与公文排版 Worker 实践",
      en: "Intranet AI Agent, LightRAG, knowledge graph, and document-formatting Worker practice",
      zhHant: "內網 AI Agent、LightRAG、知識圖譜與公文排版 Worker 實踐"
    }
  }
];
