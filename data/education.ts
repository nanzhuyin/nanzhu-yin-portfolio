import type { LocalizedText } from "./types";

export type Education = {
  school: LocalizedText;
  degree: LocalizedText;
  period: string;
  details?: LocalizedText;
};

export const education: Education[] = [
  {
    school: { zh: "岭南大学", en: "Lingnan University", zhHant: "嶺南大學" },
    degree: { zh: "博士，人工智能｜已录取", en: "PhD, Artificial Intelligence | Admitted", zhHant: "博士，人工智慧｜已錄取" },
    period: "2026 - 2029",
    details: { zh: "预计 2026 - 2029", en: "Expected 2026 - 2029", zhHant: "預計 2026 - 2029" }
  },
  {
    school: { zh: "岭南大学", en: "Lingnan University", zhHant: "嶺南大學" },
    degree: {
      zh: "硕士，人工智能与商业分析｜GPA：3.53/4.0｜Distinction 毕业",
      en: "Master, Artificial Intelligence and Business Analytics | GPA: 3.53/4.0 | Distinction",
      zhHant: "碩士，人工智慧與商業分析｜GPA：3.53/4.0｜Distinction 畢業"
    },
    period: "2025 - 2026",
    details: {
      zh: "主修：机器学习、深度学习、区块链、人工智能基础",
      en: "Major coursework: Machine Learning, Deep Learning, Blockchain, Fundamentals of Artificial Intelligence",
      zhHant: "主修：機器學習、深度學習、區塊鏈、人工智慧基礎"
    }
  },
  {
    school: { zh: "岭南大学", en: "Lingnan University", zhHant: "嶺南大學" },
    degree: { zh: "硕士，融合科技｜GPA：3.33/4.0", en: "Master, Integrated Technology | GPA: 3.33/4.0", zhHant: "碩士，融合科技｜GPA：3.33/4.0" },
    period: "2024 - 2025",
    details: {
      zh: "主修：计算机系统与编程基础、控制系统与人工智能应用、产品与流程设计",
      en: "Major coursework: Computer Systems and Programming Fundamentals, Control Systems and AI Applications, Product and Process Design",
      zhHant: "主修：計算機系統與編程基礎、控制系統與人工智慧應用、產品與流程設計"
    }
  },
  {
    school: { zh: "重庆科技大学", en: "Chongqing University of Science and Technology", zhHant: "重慶科技大學" },
    degree: { zh: "本科，能源化学工程", en: "Bachelor, Energy and Chemical Engineering", zhHant: "本科，能源化學工程" },
    period: "2020 - 2024",
    details: {
      zh: "主修：物理化学、有机化学、无机化学、分析化学",
      en: "Major coursework: Physical Chemistry, Organic Chemistry, Inorganic Chemistry, Analytical Chemistry",
      zhHant: "主修：物理化學、有機化學、無機化學、分析化學"
    }
  }
];

export const awards = {
  zh: ["大学英语四级", "重庆科技大学化学实验竞赛团体二等奖"],
  en: ["College English Test Band 4", "Second Prize, Team Award, Chemistry Experiment Competition, Chongqing University of Science and Technology"],
  zhHant: ["大學英語四級", "重慶科技大學化學實驗競賽團體二等獎"]
};
