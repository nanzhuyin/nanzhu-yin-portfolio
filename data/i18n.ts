import type { Locale } from "./types";

export const locales: { code: Locale; label: string; shortLabel: string; htmlLang: string }[] = [
  { code: "zh", label: "简体中文", shortLabel: "简体", htmlLang: "zh-CN" },
  { code: "en", label: "English", shortLabel: "EN", htmlLang: "en" },
  { code: "zhHant", label: "繁體中文", shortLabel: "繁體", htmlLang: "zh-Hant" }
];

export const defaultLocale: Locale = "zh";

export const i18n = {
  nav: {
    home: { zh: "首页", en: "Home", zhHant: "首頁" },
    about: { zh: "简介", en: "About", zhHant: "簡介" },
    affiliations: { zh: "履历", en: "Affiliations", zhHant: "履歷" },
    focus: { zh: "方向", en: "Focus", zhHant: "方向" },
    projects: { zh: "项目", en: "Projects", zhHant: "項目" },
    experience: { zh: "经历", en: "Experience", zhHant: "經歷" },
    education: { zh: "教育", en: "Education", zhHant: "教育" },
    stack: { zh: "技术栈", en: "Stack", zhHant: "技術棧" },
    contact: { zh: "联系", en: "Contact", zhHant: "聯絡" }
  },
  actions: {
    downloadCv: { zh: "下载简历", en: "Download CV", zhHant: "下載履歷" },
    viewProjects: { zh: "查看项目", en: "View Projects", zhHant: "查看項目" },
    contactMe: { zh: "联系我", en: "Contact", zhHant: "聯絡我" },
    expand: { zh: "展开详情", en: "Expand details", zhHant: "展開詳情" },
    collapse: { zh: "收起详情", en: "Collapse details", zhHant: "收起詳情" },
    openGithub: { zh: "打开 GitHub", en: "Open GitHub", zhHant: "開啟 GitHub" },
    toggleTheme: { zh: "切换主题", en: "Toggle theme", zhHant: "切換主題" },
    openMenu: { zh: "打开菜单", en: "Open menu", zhHant: "開啟選單" },
    closeMenu: { zh: "关闭菜单", en: "Close menu", zhHant: "關閉選單" }
  },
  sections: {
    about: {
      eyebrow: { zh: "Profile", en: "Profile", zhHant: "Profile" },
      title: { zh: "研究型工程个人主页", en: "Research-engineering profile", zhHant: "研究型工程個人主頁" }
    },
    affiliations: {
      eyebrow: { zh: "Affiliations", en: "Affiliations", zhHant: "Affiliations" },
      title: { zh: "教育与实践节点", en: "Education and practice nodes", zhHant: "教育與實踐節點" },
      description: {
        zh: "从人工智能研究训练到企业级系统部署实践，串联当前学习与工程经历。",
        en: "A path from AI research training to enterprise system deployment practice.",
        zhHant: "從人工智慧研究訓練到企業級系統部署實踐，串聯目前學習與工程經歷。"
      }
    },
    focus: {
      eyebrow: { zh: "Research Focus", en: "Research Focus", zhHant: "Research Focus" },
      title: { zh: "四个长期方向", en: "Four long-term directions", zhHant: "四個長期方向" }
    },
    projects: {
      eyebrow: { zh: "Selected Projects", en: "Selected Projects", zhHant: "Selected Projects" },
      title: { zh: "精选项目", en: "Selected projects", zhHant: "精選項目" },
      filterAll: { zh: "全部", en: "All", zhHant: "全部" }
    },
    experience: {
      eyebrow: { zh: "Internship Experience", en: "Internship Experience", zhHant: "Internship Experience" },
      title: { zh: "实习经历", en: "Internship experience", zhHant: "實習經歷" }
    },
    education: {
      eyebrow: { zh: "Education", en: "Education", zhHant: "Education" },
      title: { zh: "教育背景", en: "Education", zhHant: "教育背景" }
    },
    stack: {
      eyebrow: { zh: "Tech Stack", en: "Tech Stack", zhHant: "Tech Stack" },
      title: { zh: "技术矩阵", en: "Technology matrix", zhHant: "技術矩陣" }
    },
    contact: {
      eyebrow: { zh: "Contact", en: "Contact", zhHant: "Contact" },
      title: { zh: "联系与资料", en: "Contact and materials", zhHant: "聯絡與資料" }
    }
  },
  labels: {
    status: { zh: "状态", en: "Status", zhHant: "狀態" },
    stack: { zh: "技术栈", en: "Stack", zhHant: "技術棧" },
    highlights: { zh: "展示重点", en: "Highlights", zhHant: "展示重點" },
    keywords: { zh: "关键词", en: "Keywords", zhHant: "關鍵詞" },
    sourceNote: {
      zh: "内容来源：最新 resume.docx",
      en: "Content source: latest resume.docx",
      zhHant: "內容來源：最新 resume.docx"
    }
  }
};

export const navItems = [
  ["home", "home"],
  ["about", "about"],
  ["affiliations", "affiliations"],
  ["focus", "focus"],
  ["projects", "projects"],
  ["experience", "experience"],
  ["education", "education"],
  ["stack", "stack"],
  ["contact", "contact"]
] as const;
