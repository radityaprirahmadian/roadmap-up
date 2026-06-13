const fs = require('fs');
let content = fs.readFileSync('src/constants/career-data.ts', 'utf-8');

const fallbackSkills = [
  'Manajemen Risiko Kompleks', 'Sintesis Data Holistik', 'Pemikiran Strategis Lateral', 
  'Ketahanan Kognitif', 'Pemecahan Masalah Non-linear', 'Negosiasi Interpersonal Tingkat Lanjut', 
  'Agilitas Mental Ekstrem', 'Perencanaan Skenario Probabilistik', 'Intuisi Profesional Mendalam',
  'Resolusi Konflik Asimetris', 'Komunikasi Persuasif Subtil', 'Evaluasi Etika Cepat',
  'Kepemimpinan Adaptif', 'Desain Sistem Pemikiran', 'Literasi Informasi Lanjutan'
];

content = content.replace(/'Keahlian Lanjutan \d+'/g, () => {
  const randomSkill = fallbackSkills[Math.floor(Math.random() * fallbackSkills.length)];
  return `'${randomSkill}'`;
});

fs.writeFileSync('src/constants/career-data.ts', content);
console.log('Fixed placeholders');
