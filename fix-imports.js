import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';

const files = globSync('src/**/*.tsx');
files.forEach(file => {
    let content = readFileSync(file, 'utf8');
    content = content.replace(/from "motion\/react"/g, 'from "framer-motion"');
    writeFileSync(file, content);
});
