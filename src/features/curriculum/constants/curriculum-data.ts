export interface CurriculumItem {
  text: string;
  icon?: string;
  active?: boolean;
}

export interface CurriculumPhase {
  id: string;
  title: string;
  description: string;
  icon: string;
  theme: 'primary' | 'secondary' | 'primary-container' | 'secondary-container';
  items: CurriculumItem[];
}

export const CURRICULUM_DATA: CurriculumPhase[] = [
  {
    id: 'phase-1',
    title: 'Phase 1: Foundations',
    description: 'Mastering the language of logic and algorithmic thinking.',
    icon: 'smart_toy',
    theme: 'primary',
    items: [
      { text: 'Pengenalan Algoritma & Logika', active: true },
      { text: 'Logika Dasar', active: true },
      { text: 'Logika If-Else & Percabangan', active: true },
      { text: 'Pseudo Code', active: false },
      { text: 'Pemrograman Dasar', active: false },
    ],
  },
  {
    id: 'phase-2',
    title: 'Phase 2: Core Programming',
    description: 'Deep diving into industry-standard languages and paradigms.',
    icon: 'terminal',
    theme: 'secondary',
    items: [
      { text: 'Python Dasar (Variabel, I/O, Percabangan)', icon: 'stat_0' },
      { text: 'Java Programming Basics', icon: 'stat_0' },
      { text: 'Object-Oriented Programming', icon: 'stat_0' },
      { text: 'Algorithm Efficiency', icon: 'stat_0' },
    ],
  },
  {
    id: 'phase-3',
    title: 'Phase 3: Problem Solving',
    description: 'Refining your ability to break down complex challenges.',
    icon: 'lightbulb',
    theme: 'primary-container',
    items: [
      { text: 'Problem Solving & Computational Thinking', icon: 'extension' },
      { text: 'Debugging & Problem Solving', icon: 'bug_report' },
      { text: 'Computational Thinking', icon: 'psychology' },
    ],
  },
  {
    id: 'phase-4',
    title: 'Phase 4: Web & Game',
    description: 'Bringing your ideas to life on the screen.',
    icon: 'sports_esports',
    theme: 'secondary-container',
    items: [
      { text: 'Pengenalan HTML, CSS, JavaScript', icon: 'html' },
      { text: 'Pembuatan Game Sederhana', icon: 'rocket_launch' },
      { text: 'Web Development Basics', icon: 'web' },
      { text: 'Web Project', icon: 'dashboard_customize' },
    ],
  },
  {
    id: 'phase-5',
    title: 'Phase 5: Professional Journey',
    description: 'Transitioning from a coder to a professional collaborator.',
    icon: 'diversity_3',
    theme: 'secondary',
    items: [
      { text: 'Komunikasi Kolaborasi', icon: 'forum' },
      { text: 'Pair Programming', icon: 'handshake' },
      { text: 'Analytics & Insight', icon: 'insights' },
      { text: 'Data Introduction', icon: 'database' },
    ],
  },
];
