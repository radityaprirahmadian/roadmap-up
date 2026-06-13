import React from 'react';
import { CareerName, CareerDetails } from '../types/career';

interface CareerResultsViewProps {
  careerName: CareerName;
  careerData: CareerDetails;
  onBack: () => void;
  onOpenModal: (codingSkill: { skill: string; desc: string }) => void;
}

export const CareerResultsView: React.FC<CareerResultsViewProps> = ({
  careerName,
  careerData,
  onBack,
  onOpenModal,
}) => {
  const mixedSkills = React.useMemo(() => {
    const items = [
      ...careerData.soft.map(s => ({ type: 'soft', skill: s, desc: undefined })),
      ...careerData.coding.map(c => ({ type: 'coding', skill: c.skill, desc: c.desc }))
    ];
    for (let i = items.length - 1; i > 0; i--) {
      // eslint-disable-next-line react-hooks/purity
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }, [careerData]);
  return (
    <section className="space-y-xl py-md" id="screen-results">
      <button
        className="flex items-center gap-xs text-primary font-label-md hover:opacity-80"
        onClick={onBack}
      >
        <span className="material-symbols-outlined text-sm">arrow_back</span> Kembali ke list
      </button>

      <div className="space-y-sm">
        <h2 className="text-headline-lg text-on-background" id="result-profession-title">
          {careerName}
        </h2>
        <p className="text-body-md text-on-surface-variant">
          Keterampilan masa depan yang dibutuhkan untuk jalur ini.
        </p>
      </div>

      {/* Skills Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {/* Hard Skills */}
        <div className="p-lg bg-surface border border-outline-variant/40 rounded-2xl space-y-md">
          <h3 className="text-label-md text-outline uppercase tracking-wider">Hard Skills</h3>
          <ul className="space-y-sm" id="hard-skills-list">
            {careerData.hard.map((skill, i) => (
              <li key={i} className="flex items-center gap-sm text-body-md text-on-surface">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills & Coding Connection */}
        <div className="p-lg bg-surface border border-outline-variant/40 rounded-2xl space-y-md">
          <h3 className="text-label-md text-outline uppercase tracking-wider">Soft Skills</h3>
          <div className="space-y-sm" id="soft-skills-list">
            {mixedSkills.map((item, index) => {
              if (item.type === 'soft') {
                return (
                  <div key={index} className="flex items-center gap-sm text-body-md text-on-surface py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span> {item.skill}
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="my-sm flex items-center justify-between gap-sm text-body-md text-on-surface py-1 cursor-pointer transition-colors relative group"
                    onClick={() => onOpenModal({ skill: item.skill, desc: item.desc! })}
                  >

                    <div className='flex items-center gap-sm'>
                      <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span> 
                      <span className="text-lg font-semibold text-on-secondary-container block" id={`coding-skill-name-${index}`}>
                        {item.skill}
                      </span>
                    </div>

                    <span className="material-symbols-outlined text-secondary text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      {/* Lead Gen Card
      <div className="p-xl bg-surface-container-high rounded-3xl space-y-xl border border-outline-variant/10 shadow-sm">
        <div className="text-center space-y-sm">
          <div className="w-16 h-16 bg-primary-fixed-dim/30 rounded-full flex items-center justify-center mx-auto mb-md">
            <span className="material-symbols-outlined text-primary text-3xl">chat</span>
          </div>
          <h3 className="text-headline-md">Dapatkan Peta Jalan Pribadi</h3>
          <p className="text-body-md text-on-surface-variant">
            Kirimkan analisis ini ke WhatsApp Anda dan jadwalkan sesi konseling gratis.
          </p>
        </div>

        <div className="space-y-md">
          <div className="space-y-xs">
            <label className="text-label-sm px-1 text-on-surface-variant">Nama Orang Tua</label>
            <input
              className="w-full px-md py-md rounded-xl bg-surface border-none focus:ring-2 focus:ring-primary text-body-md"
              placeholder="cth. Sarah Jenkins"
              type="text"
            />
          </div>
          <div className="space-y-xs">
            <label className="text-label-sm px-1 text-on-surface-variant">Nomor WhatsApp</label>
            <input
              className="w-full px-md py-md rounded-xl bg-surface border-none focus:ring-2 focus:ring-primary text-body-md"
              placeholder="+62 812 0000 0000"
              type="tel"
            />
          </div>
        </div>

        <button className="w-full py-md bg-primary text-background font-semibold rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/10">
          Klaim Tiket Kelas Uji Coba Gratis
        </button>
      </div> */}
    </section>
  );
};
