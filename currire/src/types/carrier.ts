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

export interface CarrierEntry {
    company: string;
    companyID: string;
    period: string;
    position: string;
    description: string[];
    technologies: string[];
}

// スキルセットコンポーネントのPropsの型定義
export interface CarrierSkillsProps {
    technologies: {
        whatSkill: string;
        howLong: string;
    }[];
}