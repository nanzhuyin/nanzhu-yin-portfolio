import type { LocalizedText } from "./types";

export type Publication = {
  id: string;
  title: LocalizedText;
  venue: string;
  status: LocalizedText;
  note?: LocalizedText;
};

export const publications: Publication[] = [
  {
    id: "sse-2026",
    title: {
      zh: "From Findings to Reports: Multi-Agent Smart Contract Repair-as-a-Service with Tool Fusion, Deduplication, and Second-Pass Validation",
      en: "From Findings to Reports: Multi-Agent Smart Contract Repair-as-a-Service with Tool Fusion, Deduplication, and Second-Pass Validation",
      zhHant: "From Findings to Reports: Multi-Agent Smart Contract Repair-as-a-Service with Tool Fusion, Deduplication, and Second-Pass Validation"
    },
    venue: "SSE 2026 / CCF C",
    status: { zh: "已录用", en: "Accepted", zhHant: "已錄用" }
  },
  {
    id: "ccsb-2026",
    title: {
      zh: "Evaluating an OpenClaw-Based Workflow for Smart Contract Audit Report Generation",
      en: "Evaluating an OpenClaw-Based Workflow for Smart Contract Audit Report Generation",
      zhHant: "Evaluating an OpenClaw-Based Workflow for Smart Contract Audit Report Generation"
    },
    venue: "CCSB 2026 / EI",
    status: { zh: "已录用", en: "Accepted", zhHant: "已錄用" }
  },
  {
    id: "wi-iat-2026",
    title: {
      zh: "Evidence-Grounded Review Intelligence for Inspectable E-Commerce Knowledge Discovery",
      en: "Evidence-Grounded Review Intelligence for Inspectable E-Commerce Knowledge Discovery",
      zhHant: "Evidence-Grounded Review Intelligence for Inspectable E-Commerce Knowledge Discovery"
    },
    venue: "WI-IAT 2026 / CCF C",
    status: { zh: "已录用", en: "Accepted", zhHant: "已錄用" }
  },
  {
    id: "adma-2026",
    title: {
      zh: "eVTOken: A Privacy-Preserving and Traceable Data Infrastructure for Trustworthy Low-Altitude Economy Application",
      en: "eVTOken: A Privacy-Preserving and Traceable Data Infrastructure for Trustworthy Low-Altitude Economy Application",
      zhHant: "eVTOken: A Privacy-Preserving and Traceable Data Infrastructure for Trustworthy Low-Altitude Economy Application"
    },
    venue: "ADMA 2026 / CCF C",
    status: { zh: "已录用", en: "Accepted", zhHant: "已錄用" }
  },
  {
    id: "cross-chain-survey",
    title: {
      zh: "A Survey of AI-Integrated Smart Contract Analysis on Cross-Chain Bridge",
      en: "A Survey of AI-Integrated Smart Contract Analysis on Cross-Chain Bridge",
      zhHant: "A Survey of AI-Integrated Smart Contract Analysis on Cross-Chain Bridge"
    },
    venue: "Survey",
    status: { zh: "在研", en: "In progress", zhHant: "在研" }
  }
];
