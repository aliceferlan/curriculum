// 職歴データの型定義
interface CarrierEntry {
    company: string;
    period: string;
    position: string;
    description: string[];
    technologies: string[];
}

// スキルセットコンポーネントのPropsの型定義
interface CarrierSkillsProps {
    technologies: {
        whatSkill: string;
        howLong: string;

    }[];

}