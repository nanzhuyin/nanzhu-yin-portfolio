import type { LocalizedList, LocalizedText } from "./types";

export type ResearchFocus = {
  title: LocalizedText;
  description: LocalizedText;
  tags: string[];
};

export const researchFocus: ResearchFocus[] = [
  {
    title: {
      zh: "AI-assisted Smart Contract Auditing",
      en: "AI-assisted Smart Contract Auditing",
      zhHant: "AI-assisted Smart Contract Auditing"
    },
    description: {
      zh: "围绕 Solidity 项目级扫描、工具融合、漏洞发现、去重、误报过滤、二次验证与审计报告生成构建可复现流程。",
      en: "Builds reproducible workflows for Solidity project scanning, tool fusion, vulnerability findings, deduplication, false-positive filtering, second-pass validation, and audit report generation.",
      zhHant: "圍繞 Solidity 專案級掃描、工具融合、漏洞發現、去重、誤報過濾、二次驗證與審計報告生成構建可復現流程。"
    },
    tags: ["Solidity", "Slither", "Mythril", "GPTScan", "JSON"]
  },
  {
    title: {
      zh: "Multi-Agent Audit Workflows",
      en: "Multi-Agent Audit Workflows",
      zhHant: "Multi-Agent Audit Workflows"
    },
    description: {
      zh: "将一次性 LLM 问答拆解为 Project Scanner、Context Builder、Evidence Validator、False-positive Filter 与 Report Generator 等多阶段工作流。",
      en: "Breaks one-shot LLM Q&A into staged workflows such as Project Scanner, Context Builder, Evidence Validator, False-positive Filter, and Report Generator.",
      zhHant: "將一次性 LLM 問答拆解為 Project Scanner、Context Builder、Evidence Validator、False-positive Filter 與 Report Generator 等多階段工作流。"
    },
    tags: ["LLM Agent", "OpenClaw", "n8n", "Workflow", "Validation"]
  },
  {
    title: {
      zh: "Graph-based RAG and Knowledge Systems",
      en: "Graph-based RAG and Knowledge Systems",
      zhHant: "Graph-based RAG and Knowledge Systems"
    },
    description: {
      zh: "围绕 LightRAG、MinerU、LlamaIndex、知识图谱、实体关系抽取、向量检索、Wiki 生成与术语映射构建领域知识系统。",
      en: "Builds domain knowledge systems around LightRAG, MinerU, LlamaIndex, knowledge graphs, entity-relation extraction, vector retrieval, Wiki generation, and terminology mapping.",
      zhHant: "圍繞 LightRAG、MinerU、LlamaIndex、知識圖譜、實體關係抽取、向量檢索、Wiki 生成與術語映射構建領域知識系統。"
    },
    tags: ["LightRAG", "MinerU", "LlamaIndex", "Neo4j", "Milvus"]
  },
  {
    title: {
      zh: "Blockchain Traceability and Data Trust",
      en: "Blockchain Traceability and Data Trust",
      zhHant: "Blockchain Traceability and Data Trust"
    },
    description: {
      zh: "关注链下加密、IPFS 内容寻址、NFT 生命周期记录、链上溯源、数据确权与访问控制。",
      en: "Focuses on off-chain encryption, IPFS content addressing, NFT lifecycle records, on-chain traceability, data ownership, and access control.",
      zhHant: "關注鏈下加密、IPFS 內容尋址、NFT 生命週期記錄、鏈上溯源、資料確權與訪問控制。"
    },
    tags: ["IPFS", "NFT", "AES-GCM-256", "Foundry", "Traceability"]
  }
];
