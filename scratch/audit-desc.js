const fs = require('fs');
const content = fs.readFileSync('./src/constants/career-data.ts', 'utf8');

// Find all career start indices
const regex = /^\s*['"]([^'"]+)['"]\s*:\s*\{/gm;
let match;
const careerIndices = [];
while ((match = regex.exec(content)) !== null) {
    careerIndices.push({
        name: match[1],
        index: match.index
    });
}

const codingSkills = [];

for (let i = 0; i < careerIndices.length; i++) {
    const start = careerIndices[i].index;
    const end = (i + 1 < careerIndices.length) ? careerIndices[i + 1].index : content.length;
    const chunk = content.slice(start, end);
    const careerName = careerIndices[i].name;
    
    const codingMatch = chunk.match(/coding\s*:\s*\[([\s\S]*?)\]/);
    if (codingMatch) {
        const codingBody = codingMatch[1];
        const skillObjectRegex = /\{\s*skill\s*:\s*['"]([^'"]+)['"]\s*,\s*desc\s*:\s*['"]([\s\S]*?)['"]\s*\}/g;
        let skillMatch;
        while ((skillMatch = skillObjectRegex.exec(codingBody)) !== null) {
            codingSkills.push({
                career: careerName,
                skill: skillMatch[1],
                desc: skillMatch[2]
            });
        }
    }
}

// Print skills that do not mention coding terms
const codingTerms = ['coding', 'koding', 'pemrograman', 'program', 'debugger', 'debugging', 'sintaks', 'algoritma', 'variabel', 'loop', 'database', 'kondisional', 'if-else', 'try-catch', 'refactoring', 'fungsi', 'komputasi', 'sistem', 'data', 'api', 'state machine'];
const genericSkills = codingSkills.filter(s => {
    const descLower = s.desc.toLowerCase();
    return !codingTerms.some(term => descLower.includes(term));
});

console.log(`Found ${genericSkills.length} skills that might need coding context:`);
genericSkills.forEach(s => {
    console.log(`- [${s.career}] ${s.skill}: ${s.desc}`);
});
