import type { LocalizedList, LocalizedText, ProjectCategory } from "./types";

export type Project = {
  id: string;
  category: ProjectCategory;
  title: LocalizedText;
  status: LocalizedText;
  paper?: string;
  link?: string;
  stack: string[];
  summary: LocalizedText;
  highlights: LocalizedList;
};

export const projectCategories: Record<ProjectCategory, LocalizedText> = {
  security: {
    zh: "智能合约安全",
    en: "Smart Contract Security",
    zhHant: "智慧合約安全"
  },
  rag: {
    zh: "RAG / Agent",
    en: "RAG / Agent",
    zhHant: "RAG / Agent"
  },
  data: {
    zh: "数据智能",
    en: "Data Intelligence",
    zhHant: "資料智能"
  },
  blockchain: {
    zh: "链上机制",
    en: "On-chain Systems",
    zhHant: "鏈上機制"
  }
};

export const projects: Project[] = [
  {
    id: "ai-web3-education",
    category: "security",
    title: {
      zh: "AI + Web3 安全教育助手项目",
      en: "AI + Web3 Security Education Assistant",
      zhHant: "AI + Web3 安全教育助手專案"
    },
    status: {
      zh: "AIREA 2026 入围项目",
      en: "AIREA 2026 finalist project",
      zhHant: "AIREA 2026 入圍專案"
    },
    link: "https://github.com/YAXUANZ3008/airea2026-ai-teaching-tool-web3-safety",
    stack: ["Python", "JavaScript", "Shell", "GPTScan-based Pipeline", "Solidity", "solc-select", "Node.js"],
    summary: {
      zh: "面向 AI + Education 场景的 Web3 安全教育助手，围绕智能合约扫描、失败重跑、扫描元数据导出与双语安全解释内容构建可运行原型。",
      en: "A Web3 security education assistant for AI + Education, built around smart contract scanning, failed-project reruns, metadata export, and bilingual security explanation content.",
      zhHant: "面向 AI + Education 場景的 Web3 安全教育助手，圍繞智慧合約掃描、失敗重跑、掃描元資料匯出與雙語安全解釋內容構建可運行原型。"
    },
    highlights: {
      zh: [
        "参与 AI + Education 场景下的 Web3 安全教育助手开发，完成可运行原型、演示视频流程与项目材料。",
        "基于 GPTScan 相关逻辑搭建智能合约扫描流程，支持单项目扫描、数据集批量扫描、失败项目重跑、扫描元数据导出与结果汇总。",
        "处理 Solidity 项目编译与依赖准备问题，包括 pragma 版本检测、solc-select 编译器版本匹配、Node.js 依赖 bootstrap 与常见编译失败场景排查。"
      ],
      en: [
        "Contributed to a Web3 security education assistant for AI + Education, including a runnable prototype, demo video flow, and project materials.",
        "Built a GPTScan-based smart contract scanning workflow supporting single-project scans, dataset batch scans, failed-project reruns, metadata export, and result aggregation.",
        "Handled Solidity compilation and dependency preparation, including pragma version detection, solc-select compiler matching, Node.js dependency bootstrap, and common compile-failure troubleshooting."
      ],
      zhHant: [
        "參與 AI + Education 場景下的 Web3 安全教育助手開發，完成可運行原型、演示影片流程與專案材料。",
        "基於 GPTScan 相關邏輯搭建智慧合約掃描流程，支援單專案掃描、資料集批量掃描、失敗專案重跑、掃描元資料匯出與結果彙總。",
        "處理 Solidity 專案編譯與依賴準備問題，包括 pragma 版本檢測、solc-select 編譯器版本匹配、Node.js 依賴 bootstrap 與常見編譯失敗場景排查。"
      ]
    }
  },
  {
    id: "multi-agent-repair",
    category: "security",
    title: {
      zh: "Multi-Agent 智能合约修复与审计报告生成框架",
      en: "Multi-Agent Smart Contract Repair and Audit Report Framework",
      zhHant: "Multi-Agent 智慧合約修復與審計報告生成框架"
    },
    status: {
      zh: "SSE 2026 已录用，CCF C",
      en: "SSE 2026 accepted, CCF C",
      zhHant: "SSE 2026 已錄用，CCF C"
    },
    paper: "From Findings to Reports: Multi-Agent Smart Contract Repair-as-a-Service with Tool Fusion, Deduplication, and Second-Pass Validation",
    stack: ["LLM Agent", "Solidity", "Slither", "Mythril", "SmartBugs", "GPTScan", "ChainGPT", "n8n", "JSON"],
    summary: {
      zh: "面向 Solidity 智能合约的 Multi-Agent Repair-as-a-Service 框架，将检测、工具融合、去重、误报过滤、二次验证、修复建议与报告生成整合为端到端流程。",
      en: "A Multi-Agent Repair-as-a-Service framework for Solidity contracts that integrates detection, tool fusion, deduplication, false-positive filtering, second-pass validation, repair suggestions, and report generation.",
      zhHant: "面向 Solidity 智慧合約的 Multi-Agent Repair-as-a-Service 框架，將檢測、工具融合、去重、誤報過濾、二次驗證、修復建議與報告生成整合為端到端流程。"
    },
    highlights: {
      zh: [
        "参与设计面向 Solidity 智能合约的 Multi-Agent Repair-as-a-Service 框架，将漏洞检测、工具融合、结果去重、误报过滤、二次验证、修复建议与报告生成整合为端到端流程。",
        "围绕 Tool Fusion 模块整合 Slither、Mythril、SmartBugs、GPTScan 与 ChainGPT 等异构分析结果，将不同工具输出归一化为统一 JSON 表示。",
        "在 33 个 Web3Bugs 智能合约样本上进行实验分析，将 498 条原始 findings 缩减为 386 条 retained findings，平均减少率约 22.49%。"
      ],
      en: [
        "Helped design a Multi-Agent Repair-as-a-Service framework for Solidity contracts, integrating vulnerability detection, tool fusion, deduplication, false-positive filtering, second-pass validation, repair suggestions, and report generation.",
        "Integrated heterogeneous outputs from Slither, Mythril, SmartBugs, GPTScan, and ChainGPT in the Tool Fusion module and normalized them into a unified JSON representation.",
        "Analyzed 33 Web3Bugs smart contract samples, reducing 498 raw findings to 386 retained findings, with an average reduction rate of about 22.49%."
      ],
      zhHant: [
        "參與設計面向 Solidity 智慧合約的 Multi-Agent Repair-as-a-Service 框架，將漏洞檢測、工具融合、結果去重、誤報過濾、二次驗證、修復建議與報告生成整合為端到端流程。",
        "圍繞 Tool Fusion 模組整合 Slither、Mythril、SmartBugs、GPTScan 與 ChainGPT 等異構分析結果，將不同工具輸出歸一化為統一 JSON 表示。",
        "在 33 個 Web3Bugs 智慧合約樣本上進行實驗分析，將 498 條原始 findings 縮減為 386 條 retained findings，平均減少率約 22.49%。"
      ]
    }
  },
  {
    id: "openclaw-audit",
    category: "security",
    title: {
      zh: "OpenClaw-Based 智能合约审计报告生成工作流",
      en: "OpenClaw-Based Smart Contract Audit Report Workflow",
      zhHant: "OpenClaw-Based 智慧合約審計報告生成工作流"
    },
    status: {
      zh: "CCSB 2026 已录用，EI",
      en: "CCSB 2026 accepted, EI",
      zhHant: "CCSB 2026 已錄用，EI"
    },
    paper: "Evaluating an OpenClaw-Based Workflow for Smart Contract Audit Report Generation",
    stack: ["OpenClaw", "LLM Agent", "Multi-Agent Workflow", "Solidity", "Web3Bugs", "JSON Schema"],
    summary: {
      zh: "将一次性 LLM 问答改造为可检查、可复现的多阶段 Solidity 审计工作流，并基于 Web3Bugs 完成项目级实验。",
      en: "Transforms one-shot LLM Q&A into an inspectable and reproducible multi-stage Solidity audit workflow, validated through project-level experiments on Web3Bugs.",
      zhHant: "將一次性 LLM 問答改造為可檢查、可復現的多階段 Solidity 審計工作流，並基於 Web3Bugs 完成專案級實驗。"
    },
    highlights: {
      zh: [
        "参与设计基于 OpenClaw 的项目级 Solidity 审计报告生成流程，将一次性 LLM 问答改造为可检查、可复现的多阶段审计工作流。",
        "构建八阶段审计流程，覆盖 Project Scanner、Context Builder、Vulnerability Analyst、Finding Deduplicator、Evidence Validator、Exploitability Validator、False-positive Filter 与 Report Generator。",
        "基于 Web3Bugs 数据集完成项目级实验，处理 102 个项目报告，生成 96 个有效 JSON 审计报告，提取 245 条最终 findings，并按照 21 类漏洞类型进行统计分析。"
      ],
      en: [
        "Contributed to an OpenClaw-based project-level Solidity audit report generation workflow that turns one-shot LLM Q&A into an inspectable and reproducible multi-stage audit process.",
        "Built an eight-stage audit flow covering Project Scanner, Context Builder, Vulnerability Analyst, Finding Deduplicator, Evidence Validator, Exploitability Validator, False-positive Filter, and Report Generator.",
        "Completed project-level experiments on Web3Bugs, processing 102 project reports, generating 96 valid JSON audit reports, extracting 245 final findings, and analyzing them across 21 vulnerability types."
      ],
      zhHant: [
        "參與設計基於 OpenClaw 的專案級 Solidity 審計報告生成流程，將一次性 LLM 問答改造為可檢查、可復現的多階段審計工作流。",
        "構建八階段審計流程，覆蓋 Project Scanner、Context Builder、Vulnerability Analyst、Finding Deduplicator、Evidence Validator、Exploitability Validator、False-positive Filter 與 Report Generator。",
        "基於 Web3Bugs 資料集完成專案級實驗，處理 102 個專案報告，生成 96 個有效 JSON 審計報告，提取 245 條最終 findings，並按照 21 類漏洞類型進行統計分析。"
      ]
    }
  },
  {
    id: "cross-chain-survey",
    category: "security",
    title: {
      zh: "跨链桥智能合约安全与 AI 辅助分析综述",
      en: "Survey on Cross-Chain Bridge Smart Contract Security and AI-assisted Analysis",
      zhHant: "跨鏈橋智慧合約安全與 AI 輔助分析綜述"
    },
    status: {
      zh: "在研 / Survey",
      en: "In progress / Survey",
      zhHant: "在研 / Survey"
    },
    paper: "A Survey of AI-Integrated Smart Contract Analysis on Cross-Chain Bridge",
    stack: ["Cross-chain Bridge", "Smart Contract Security", "LLM-assisted Auditing", "Static Analysis", "Fuzzing", "Formal Verification"],
    summary: {
      zh: "围绕跨链桥架构、交互阶段、攻击面、漏洞类型与智能合约分析方法之间的对应关系进行综述。",
      en: "A survey mapping cross-chain bridge architecture, interaction phases, attack surfaces, vulnerability types, and smart contract analysis methods.",
      zhHant: "圍繞跨鏈橋架構、互動階段、攻擊面、漏洞類型與智慧合約分析方法之間的對應關係進行綜述。"
    },
    highlights: {
      zh: [
        "参与撰写面向跨链桥安全的 AI-integrated smart contract analysis 综述，梳理跨链桥架构、交互阶段、攻击面、漏洞类型与智能合约分析方法之间的对应关系。",
        "对静态分析、符号执行、模糊测试、形式化验证、深度学习与 LLM/Agent 辅助审计方法进行横向比较。"
      ],
      en: [
        "Contributed to a survey on AI-integrated smart contract analysis for cross-chain bridge security, mapping bridge architecture, interaction phases, attack surfaces, vulnerability types, and analysis methods.",
        "Compared static analysis, symbolic execution, fuzzing, formal verification, deep learning, and LLM/Agent-assisted auditing methods."
      ],
      zhHant: [
        "參與撰寫面向跨鏈橋安全的 AI-integrated smart contract analysis 綜述，梳理跨鏈橋架構、互動階段、攻擊面、漏洞類型與智慧合約分析方法之間的對應關係。",
        "對靜態分析、符號執行、模糊測試、形式化驗證、深度學習與 LLM/Agent 輔助審計方法進行橫向比較。"
      ]
    }
  },
  {
    id: "review-intelligence",
    category: "data",
    title: {
      zh: "电商评论可信知识发现与多智能体分析项目",
      en: "Evidence-Grounded Review Intelligence and Multi-Agent Analysis",
      zhHant: "電商評論可信知識發現與多智能體分析專案"
    },
    status: {
      zh: "已投 WI-IAT 2026，审稿中，CCF C",
      en: "Submitted to WI-IAT 2026, under review, CCF C",
      zhHant: "已投 WI-IAT 2026，審稿中，CCF C"
    },
    paper: "Evidence-Grounded Review Intelligence for Adaptive and Trustworthy Knowledge Discovery in E-Commerce Data",
    stack: ["Python", "BERT", "BERTopic", "TF-IDF", "Logistic Regression", "Random Forest", "n8n", "DeepSeek", "LLM Agent", "JSON"],
    summary: {
      zh: "将情感分类、主题发现、证据抽取与业务洞察生成整合为可检查的多阶段电商评论知识发现框架。",
      en: "An inspectable multi-stage e-commerce review intelligence framework integrating sentiment classification, topic discovery, evidence extraction, and business insight generation.",
      zhHant: "將情感分類、主題發現、證據抽取與業務洞察生成整合為可檢查的多階段電商評論知識發現框架。"
    },
    highlights: {
      zh: [
        "构建面向电商评论的 evidence-grounded review intelligence 流程，将情感分类、主题发现、证据抽取与业务洞察生成整合为可检查的多阶段分析框架。",
        "基于 Amazon Reviews 2023 Health and Personal Care 数据构建 30,000 条均衡评论 benchmark，并完成训练集、验证集与测试集划分。",
        "BERT 在测试集上取得 0.7684 accuracy 与 0.7699 macro-F1；n8n 四阶段 LLM Agent 在 1,200 条 held-out subset 上 JSON validity 达到 0.9983。"
      ],
      en: [
        "Built an evidence-grounded review intelligence workflow for e-commerce reviews, integrating sentiment classification, topic discovery, evidence extraction, and business insight generation into an inspectable multi-stage framework.",
        "Constructed a balanced 30,000-review benchmark from Amazon Reviews 2023 Health and Personal Care, including train, validation, and test splits.",
        "BERT achieved 0.7684 accuracy and 0.7699 macro-F1 on the test set; a four-stage n8n LLM Agent reached 0.9983 JSON validity on a 1,200-item held-out subset."
      ],
      zhHant: [
        "構建面向電商評論的 evidence-grounded review intelligence 流程，將情感分類、主題發現、證據抽取與業務洞察生成整合為可檢查的多階段分析框架。",
        "基於 Amazon Reviews 2023 Health and Personal Care 資料構建 30,000 條均衡評論 benchmark，並完成訓練集、驗證集與測試集劃分。",
        "BERT 在測試集上取得 0.7684 accuracy 與 0.7699 macro-F1；n8n 四階段 LLM Agent 在 1,200 條 held-out subset 上 JSON validity 達到 0.9983。"
      ]
    }
  },
  {
    id: "evtoken",
    category: "blockchain",
    title: {
      zh: "eVTOL 飞行数据隐私保护与区块链溯源项目",
      en: "Privacy-Preserving eVTOL Flight Data and Blockchain Traceability",
      zhHant: "eVTOL 飛行資料隱私保護與區塊鏈溯源專案"
    },
    status: {
      zh: "在研，待投 ADMA 2026，CCF C",
      en: "In progress, planned for ADMA 2026, CCF C",
      zhHant: "在研，待投 ADMA 2026，CCF C"
    },
    paper: "Privacy-Preserving Tokenization and Blockchain-Based Traceability for Secure eVTOL Data Ecosystems",
    stack: ["Blockchain", "Tokenization", "NFT", "IPFS", "AES-GCM-256", "Solidity", "Foundry", "eVTOL Flight Data"],
    summary: {
      zh: "eVTOken 框架结合链下加密、IPFS 内容寻址与链上 NFT 生命周期操作，用于飞行数据确权、监管审计和数据共享。",
      en: "The eVTOken framework combines off-chain encryption, IPFS content addressing, and on-chain NFT lifecycle operations for flight-data ownership, regulatory audit, and data sharing.",
      zhHant: "eVTOken 框架結合鏈下加密、IPFS 內容尋址與鏈上 NFT 生命週期操作，用於飛行資料確權、監管審計和資料共享。"
    },
    highlights: {
      zh: [
        "参与设计 eVTOken 框架，将 eVTOL 飞行数据的隐私保护、链上可追溯与数据资产化结合，面向低空经济中的飞行数据确权、监管审计与数据共享场景。",
        "采用链下 AES-GCM-256 加密与 IPFS 内容寻址存储，将敏感飞行数据密文存放在链下，仅将 CID/URI 与 NFT 生命周期操作写入链上。"
      ],
      en: [
        "Helped design the eVTOken framework, combining privacy protection, on-chain traceability, and data assetization for eVTOL flight-data ownership, regulatory audit, and data sharing scenarios.",
        "Uses off-chain AES-GCM-256 encryption and IPFS content-addressed storage, keeping sensitive encrypted flight data off-chain while writing only CID/URI and NFT lifecycle operations on-chain."
      ],
      zhHant: [
        "參與設計 eVTOken 框架，將 eVTOL 飛行資料的隱私保護、鏈上可追溯與資料資產化結合，面向低空經濟中的飛行資料確權、監管審計與資料共享場景。",
        "採用鏈下 AES-GCM-256 加密與 IPFS 內容尋址儲存，將敏感飛行資料密文存放在鏈下，僅將 CID/URI 與 NFT 生命週期操作寫入鏈上。"
      ]
    }
  },
  {
    id: "erc-practice",
    category: "blockchain",
    title: {
      zh: "以太坊测试网 ERC-20 / ERC-721 部署实践",
      en: "Ethereum Testnet ERC-20 / ERC-721 Deployment Practice",
      zhHant: "以太坊測試網 ERC-20 / ERC-721 部署實踐"
    },
    status: {
      zh: "课程与个人实践",
      en: "Course and personal practice",
      zhHant: "課程與個人實踐"
    },
    link: "https://github.com/Chaosrussell/Lingnan-CrownCred",
    stack: ["Solidity", "Ethereum Testnet", "ERC-20", "ERC-721", "Remix", "MetaMask"],
    summary: {
      zh: "在以太坊测试网完成 ERC-20 代币与 ERC-721 NFT 的部署、交互与基础功能验证，覆盖钱包交互和教育激励场景。",
      en: "Deployment and interaction practice for ERC-20 tokens and ERC-721 NFTs on an Ethereum testnet, covering wallet interaction and education-incentive scenarios.",
      zhHant: "在以太坊測試網完成 ERC-20 代幣與 ERC-721 NFT 的部署、互動與基礎功能驗證，覆蓋錢包互動和教育激勵場景。"
    },
    highlights: {
      zh: [
        "在以太坊测试网完成 ERC-20 代币与 ERC-721 NFT 的部署、交互与基础功能验证，熟悉 Solidity 合约从编写、部署到钱包交互的基本流程。"
      ],
      en: [
        "Deployed, interacted with, and validated ERC-20 tokens and ERC-721 NFTs on an Ethereum testnet, building familiarity with the full Solidity contract flow from authoring and deployment to wallet interaction."
      ],
      zhHant: [
        "在以太坊測試網完成 ERC-20 代幣與 ERC-721 NFT 的部署、互動與基礎功能驗證，熟悉 Solidity 合約從編寫、部署到錢包互動的基本流程。"
      ]
    }
  }
];
