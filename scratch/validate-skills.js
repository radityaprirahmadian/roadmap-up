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

let errors = 0;

for (let i = 0; i < careerIndices.length; i++) {
    const start = careerIndices[i].index;
    const end = (i + 1 < careerIndices.length) ? careerIndices[i + 1].index : content.length;
    const chunk = content.slice(start, end);
    const careerName = careerIndices[i].name;
    
    // Extract hard skills count
    const hardMatch = chunk.match(/hard\s*:\s*\[([\s\S]*?)\]/);
    let hardCount = 0;
    if (hardMatch) {
        const items = hardMatch[1].split(',').map(s => s.trim()).filter(s => s.length > 0);
        hardCount = items.length;
    }
    
    // Extract soft skills count
    const softMatch = chunk.match(/soft\s*:\s*\[([\s\S]*?)\]/);
    let softCount = 0;
    if (softMatch) {
        const items = softMatch[1].split(',').map(s => s.trim()).filter(s => s.length > 0);
        softCount = items.length;
    }
    
    // Extract coding skills count
    const codingMatch = chunk.match(/coding\s*:\s*\[([\s\S]*?)\]/);
    let codingCount = 0;
    if (codingMatch) {
        const codingBody = codingMatch[1];
        const skillRegex = /skill\s*:\s*['"]([^'"]+)['"]/g;
        let skillMatch;
        while ((skillMatch = skillRegex.exec(codingBody)) !== null) {
            codingCount++;
        }
    }
    
    const totalSoftCoding = softCount + codingCount;
    if (totalSoftCoding !== 10) {
        console.error(`ERROR: Career "${careerName}" has ${softCount} soft skills and ${codingCount} coding skills. Total is ${totalSoftCoding} (expected 10)`);
        errors++;
    }
}

if (errors === 0) {
    console.log('SUCCESS: All careers have exactly 10 soft + coding skills!');
} else {
    console.error(`FAILED: Found ${errors} errors.`);
    process.exit(1);
}
