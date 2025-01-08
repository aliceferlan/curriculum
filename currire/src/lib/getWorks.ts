import fs from 'fs';
import path from 'path';

export interface Work {
    title: string;
    content: string;
}

export function getWorksByCompanyId(companyId: string): Work[] {
    const worksDir = path.join(process.cwd(), 'public', 'works', companyId);

    if (!fs.existsSync(worksDir)) {
        return [];
    }

    const mdFiles = fs.readdirSync(worksDir).filter(file => file.endsWith('.md'));

    return mdFiles.map(file => {
        const filePath = path.join(worksDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        return {
            title: file.replace('.md', ''),
            content: content
        };
    });
}