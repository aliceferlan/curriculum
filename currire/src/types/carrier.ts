// 職歴データの型定義
export interface WorkData {
    title: string;
    serviceType: string;
    priod: string;
    teamContent: string;
    role: string;
    techStack: string[];
    challenges: string[];
    solvedApproach: string;
    results: string[];
    overall: string;
}

interface Work {
    title: string;
    content: string;
}

export interface CarrierEntry {
    company: string;
    companyID: string;
    period: string;
    position: string;
    description: string[];
    technologies: string[];
    works: Work[];
}

// スキルセットコンポーネントのPropsの型定義
export interface CarrierSkillsProps {
    technologies: {
        whatSkill: string;
        howLong: string;
    }[];
}