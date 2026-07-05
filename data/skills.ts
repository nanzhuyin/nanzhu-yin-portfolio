import type { LocalizedText } from "./types";

export type SkillGroup = {
  title: LocalizedText;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: { zh: "AI / Agent", en: "AI / Agent", zhHant: "AI / Agent" },
    items: ["LLM Agent", "Multi-Agent Workflow", "OpenClaw", "LightRAG", "HiClaw/CoPaw", "n8n", "Prompt Engineering", "结构化输出", "AI 风险解释", "Codex/Copilot 辅助开发"]
  },
  {
    title: { zh: "智能合约安全", en: "Smart Contract Security", zhHant: "智慧合約安全" },
    items: ["Solidity", "GPTScan-based Pipeline", "Slither", "Mythril", "SmartBugs", "漏洞去重", "误报过滤", "二次验证", "审计报告生成"]
  },
  {
    title: { zh: "RAG / 知识图谱", en: "RAG / Knowledge Graph", zhHant: "RAG / 知識圖譜" },
    items: ["LightRAG", "MinerU", "LlamaIndex", "知识图谱", "实体关系抽取", "向量检索", "references 追溯", "Wiki 生成", "术语映射", "PostgreSQL", "Neo4j", "Milvus"]
  },
  {
    title: { zh: "区块链 / Web3", en: "Blockchain / Web3", zhHant: "區塊鏈 / Web3" },
    items: ["Ethereum Testnet", "ERC-20", "ERC-721", "Remix", "MetaMask", "NFT", "IPFS", "链上溯源", "跨链桥安全", "数据确权与访问控制"]
  },
  {
    title: { zh: "AI / NLP 实验", en: "AI / NLP Experiments", zhHant: "AI / NLP 實驗" },
    items: ["BERT", "BERTopic", "TF-IDF", "Logistic Regression", "Random Forest", "情感分类", "主题建模", "证据抽取", "人工验证"]
  },
  {
    title: { zh: "工程与工具", en: "Engineering Tools", zhHant: "工程與工具" },
    items: ["Python", "Linux", "Ubuntu", "Docker", "Shell", "GPUStack", "Ollama", "FastAPI", "RESTful API", "虚拟机部署", "SDK 编译", "Node.js", "solc-select", "GitHub"]
  },
  {
    title: { zh: "研究能力", en: "Research", zhHant: "研究能力" },
    items: ["论文阅读", "文献综述", "实验设计", "Benchmark 分析", "结构化报告生成", "结果复核", "技术写作", "快速学习与项目推进"]
  }
];
