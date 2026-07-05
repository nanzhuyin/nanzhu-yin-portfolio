import type { EntityBadge, LocalizedList, LocalizedText } from "./types";

export type Experience = {
  id: string;
  badge: EntityBadge;
  company: LocalizedText;
  period: string;
  role: LocalizedText;
  keywords: LocalizedText;
  stack: string[];
  highlights: LocalizedList;
};

export const experience: Experience[] = [
  {
    id: "kaidi-feiyan",
    badge: { label: "KD", tone: "lime" },
    company: {
      zh: "成都凯迪飞研科技有限责任公司",
      en: "Chengdu Kaidi Feiyan Technology Co., Ltd.",
      zhHant: "成都凱迪飛研科技有限責任公司"
    },
    period: "2026.06 - 2026.08",
    role: {
      zh: "AI Agent 与 LightRAG 系统部署实习",
      en: "AI Agent and LightRAG System Deployment Intern",
      zhHant: "AI Agent 與 LightRAG 系統部署實習"
    },
    keywords: {
      zh: "内网智能体部署 / RAG 知识库 / 公文排版 Worker",
      en: "Intranet agent deployment / RAG knowledge base / document-formatting Worker",
      zhHant: "內網智能體部署 / RAG 知識庫 / 公文排版 Worker"
    },
    stack: [
      "Ubuntu",
      "Docker",
      "GPUStack",
      "HiClaw/CoPaw",
      "Matrix/Element",
      "Higress",
      "MinIO",
      "LightRAG",
      "MinerU",
      "LlamaIndex",
      "PostgreSQL",
      "Neo4j",
      "Milvus",
      "Ollama",
      "Qwen",
      "FastAPI",
      "RESTful API"
    ],
    highlights: {
      zh: [
        "参与内网 AI 公文排版系统部署与联调，将 GPUStack 作为主用 AI 后端，通过 HiClaw/CoPaw、Matrix/Element 和部门 Worker 实现「上传 Word 文档 -> 自动识别 -> 自动排版 -> 返回 DOCX」的闭环。",
        "整理 10 个部门独立房间与专属 Worker 的部署方案，覆盖仿真、技术、综管、机载、市场、采购、党群、质量、产品、财务，形成一部门一房间、一 Worker、一目录的隔离方案。",
        "部署并记录 LightRAG Server + WebUI 知识库链路，接入 qwen3.6:27b 与 qwen3-embedding:4b，完成文档上传、知识图谱生成、/query API 查询、references 返回与 naive/local 检索测试。",
        "参与「基于大模型的领域自适应指令增强技术」总体方案整理，明确「领域文档解析 -> 知识图谱构建 -> Wiki 页面生成 -> 术语映射表发布 -> 运行时指令增强 -> 知识检索接口 -> 反馈闭环演进」的技术路线。",
        "整理 LightRAG 模块机制，覆盖 parser、chunker、embedding、实体关系抽取、图谱存储、query 模式、references、LLM cache 与 rerank 的作用边界。",
        "细化文档接入、解析与分块方案，梳理 MinerUReader、SimpleDirectoryReader、OCR、版面解析、Markdown 结构化输出、EntityFragmentizer 实体分片及 Qwen3-Embedding-4B 向量化流程。",
        "规划 PostgreSQL + Neo4j + Milvus 数据架构与检索链路，区分文档元数据、实体关系图谱、向量索引、Wiki 页面、术语映射表、查询日志和审核记录等核心数据对象。",
        "梳理 RESTful API 与模块设计，覆盖文档上传、解析任务查询、图谱构建、Wiki 生成、术语映射发布、指令规范化、知识检索、日志审计等接口与功能模块。",
        "参与地面完整版本与机载轻量版本部署思路整理，围绕 Qwen3.6-27B、Qwen3-Embedding-4B、Qwen3-Reranker-4B 等模型服务形成部署分层。"
      ],
      en: [
        "Participated in deployment and integration of an intranet AI document-formatting system, using GPUStack as the primary AI backend and connecting HiClaw/CoPaw, Matrix/Element, and department Workers to close the Word upload -> recognition -> formatting -> DOCX return loop.",
        "Organized deployment plans for 10 department-specific rooms and dedicated Workers, covering simulation, technology, administration, avionics, marketing, procurement, party affairs, quality, product, and finance, with one room, one Worker, and one directory per department.",
        "Deployed and documented the LightRAG Server + WebUI knowledge-base flow, connecting qwen3.6:27b and qwen3-embedding:4b, and completing document upload, knowledge graph generation, /query API calls, references return, and naive/local retrieval tests.",
        "Contributed to the overall plan for domain-adaptive instruction enhancement based on large models, defining the route from domain document parsing to knowledge graph construction, Wiki page generation, terminology mapping publication, runtime instruction enhancement, knowledge retrieval APIs, and feedback-loop evolution.",
        "Documented LightRAG module mechanisms, including parser, chunker, embedding, entity-relation extraction, graph storage, query modes, references, LLM cache, and rerank boundaries.",
        "Detailed document ingestion, parsing, and chunking plans, covering MinerUReader, SimpleDirectoryReader, OCR, layout parsing, Markdown structured output, EntityFragmentizer entity fragments, and Qwen3-Embedding-4B vectorization.",
        "Planned a PostgreSQL + Neo4j + Milvus data architecture and retrieval chain, separating document metadata, entity-relation graphs, vector indexes, Wiki pages, terminology mappings, query logs, and audit records.",
        "Outlined RESTful APIs and modules for document upload, parsing-task queries, graph construction, Wiki generation, terminology mapping publication, instruction normalization, knowledge retrieval, and log auditing.",
        "Participated in deployment planning for a full ground version and a lightweight onboard version, organizing service layers around Qwen3.6-27B, Qwen3-Embedding-4B, and Qwen3-Reranker-4B."
      ],
      zhHant: [
        "參與內網 AI 公文排版系統部署與聯調，將 GPUStack 作為主用 AI 後端，透過 HiClaw/CoPaw、Matrix/Element 和部門 Worker 實現「上傳 Word 文檔 -> 自動識別 -> 自動排版 -> 返回 DOCX」的閉環。",
        "整理 10 個部門獨立房間與專屬 Worker 的部署方案，覆蓋仿真、技術、綜管、機載、市場、採購、黨群、質量、產品、財務，形成一部門一房間、一 Worker、一目錄的隔離方案。",
        "部署並記錄 LightRAG Server + WebUI 知識庫鏈路，接入 qwen3.6:27b 與 qwen3-embedding:4b，完成文檔上傳、知識圖譜生成、/query API 查詢、references 返回與 naive/local 檢索測試。",
        "參與「基於大模型的領域自適應指令增強技術」總體方案整理，明確「領域文檔解析 -> 知識圖譜構建 -> Wiki 頁面生成 -> 術語映射表發布 -> 運行時指令增強 -> 知識檢索接口 -> 反饋閉環演進」的技術路線。",
        "整理 LightRAG 模組機制，覆蓋 parser、chunker、embedding、實體關係抽取、圖譜存儲、query 模式、references、LLM cache 與 rerank 的作用邊界。",
        "細化文檔接入、解析與分塊方案，梳理 MinerUReader、SimpleDirectoryReader、OCR、版面解析、Markdown 結構化輸出、EntityFragmentizer 實體分片及 Qwen3-Embedding-4B 向量化流程。",
        "規劃 PostgreSQL + Neo4j + Milvus 數據架構與檢索鏈路，區分文檔元資料、實體關係圖譜、向量索引、Wiki 頁面、術語映射表、查詢日誌和審核記錄等核心數據對象。",
        "梳理 RESTful API 與模組設計，覆蓋文檔上傳、解析任務查詢、圖譜構建、Wiki 生成、術語映射發布、指令規範化、知識檢索、日誌審計等接口與功能模組。",
        "參與地面完整版本與機載輕量版本部署思路整理，圍繞 Qwen3.6-27B、Qwen3-Embedding-4B、Qwen3-Reranker-4B 等模型服務形成部署分層。"
      ]
    }
  },
  {
    id: "xiechuang-data",
    badge: { label: "XC", tone: "emerald" },
    company: {
      zh: "协创数据技术股份有限公司",
      en: "Xiechuang Data Technology Co., Ltd.",
      zhHant: "協創數據技術股份有限公司"
    },
    period: "2025.07 - 2025.08",
    role: {
      zh: "软件工程师助理",
      en: "Assistant Software Engineer",
      zhHant: "軟體工程師助理"
    },
    keywords: {
      zh: "Linux / SDK 编译 / 环境配置",
      en: "Linux / SDK compilation / environment configuration",
      zhHant: "Linux / SDK 編譯 / 環境配置"
    },
    stack: ["Linux", "Ubuntu", "虚拟机部署", "SDK 编译", "Shell", "环境变量配置", "依赖管理"],
    highlights: {
      zh: [
        "参与企业 SDK 编译环境搭建与编译流程实践，从零完成 Ubuntu 虚拟机部署、Linux 开发环境配置、依赖组件安装及基础工具链准备。",
        "基于企业内部 SDK 编译流程，完成源码获取、依赖安装、环境变量配置、编译脚本执行、编译报错排查与构建结果验证。",
        "针对依赖缺失、路径配置、权限设置与版本适配等问题进行定位和处理，提升 Linux 环境下工程调试、技术文档阅读与问题排查能力。"
      ],
      en: [
        "Practiced enterprise SDK build environment setup and compilation flow, completing Ubuntu virtual machine deployment, Linux development environment configuration, dependency installation, and basic toolchain preparation from scratch.",
        "Completed source retrieval, dependency installation, environment variable configuration, build script execution, build error troubleshooting, and build-result verification based on the internal SDK compilation process.",
        "Diagnosed and handled dependency, path, permission, and version compatibility issues, improving Linux engineering debugging, technical-document reading, and troubleshooting skills."
      ],
      zhHant: [
        "參與企業 SDK 編譯環境搭建與編譯流程實踐，從零完成 Ubuntu 虛擬機部署、Linux 開發環境配置、依賴組件安裝及基礎工具鏈準備。",
        "基於企業內部 SDK 編譯流程，完成源碼獲取、依賴安裝、環境變數配置、編譯腳本執行、編譯報錯排查與構建結果驗證。",
        "針對依賴缺失、路徑配置、權限設置與版本適配等問題進行定位和處理，提升 Linux 環境下工程調試、技術文檔閱讀與問題排查能力。"
      ]
    }
  }
];
