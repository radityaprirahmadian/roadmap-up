export type CareerName = 'Dokter' | 'Pengusaha/CEO' | 'Arsitek' | 'Ilmuwan';

export interface CareerDetails {
  hard: string[];
  soft: string[];
  coding: {
    skill: string;
    desc: string;
  }[];
}
