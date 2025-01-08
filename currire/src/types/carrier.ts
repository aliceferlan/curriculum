// 職歴データの型定義
export interface WorkData {
    period: string;
    title: string;
    description: string[];
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