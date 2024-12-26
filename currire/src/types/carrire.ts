// 職歴データの型定義
interface CareerEntry {
    company: string;
    period: string;
    position: string;
    description: string[];
    technologies: string[];
}

// スキルセットコンポーネントのPropsの型定義
interface CareerSkillsProps {
    technologies: {
        whatSkill: string;
        howLong: string;
    }[];

}