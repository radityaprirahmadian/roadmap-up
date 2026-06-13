import React, { useState } from 'react';
import { CareerDetails } from '../types/career';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

interface CodingModalProps {
  isOpen: boolean;
  onClose: () => void;
  codingData: { skill: string; desc: string } | null | undefined;
}

export const CodingModal: React.FC<CodingModalProps> = ({ isOpen, onClose, codingData }) => {
  const [namaSiswa, setNamaSiswa] = useState('');
  const [jenjangPendidikan, setJenjangPendidikan] = useState('SD');
  const [noHpOrangTua, setNoHpOrangTua] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!codingData) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!namaSiswa || !noHpOrangTua) {
      setError('Harap isi semua field.');
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const { error: insertError } = await supabase
        .from('coding_promo_registrations')
        .insert([
          {
            nama_siswa: namaSiswa,
            jenjang_pendidikan: jenjangPendidikan,
            no_hp_orang_tua: noHpOrangTua,
          },
        ]);

      if (insertError) {
        throw insertError;
      }

      setIsSuccess(true);
      setNamaSiswa('');
      setNoHpOrangTua('');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Terjadi kesalahan saat menyimpan data.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="bg-surface w-full lg:max-w-1/2 rounded-3xl p-xl shadow-2xl border border-outline-variant/10 max-h-[90vh] overflow-y-auto" 
        showCloseButton={false}
      >
        <div className="flex justify-between items-start mb-lg">
          <div className="w-12 h-12 bg-on-secondary-container/10 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary">code</span>
          </div>
          <button className="text-on-surface-variant cursor-pointer" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <DialogHeader>
          <DialogTitle className="text-headline-md mb-md text-on-background">
            {codingData.skill}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-body-md text-on-surface-variant leading-relaxed mb-xl flex flex-col gap-4">
          {codingData.desc}
        </DialogDescription>

        <div className="border-t border-outline-variant/20 pt-lg mt-4">
          <p className="text-label-md text-secondary mb-md font-semibold">
            Dapatkan promo spesial saat kelas coding perdana akan dimulai!
          </p>
          
          {isSuccess ? (
            <div className="bg-secondary-container/30 text-on-secondary-container p-md rounded-xl text-center border border-secondary/20 transition-all">
              <span className="material-symbols-outlined text-4xl mb-xs text-secondary">check_circle</span>
              <p className="text-body-md font-semibold">Data berhasil disimpan!</p>
              <p className="text-label-sm mt-xs text-on-secondary-container/80">
                Kami akan menghubungi Anda di nomor yang didaftarkan setelah kelas coding dimulai.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-md">
              <div className="flex flex-col gap-xs">
                <label className="text-label-sm text-on-surface-variant font-medium">Nama Siswa</label>
                <Input
                  type="text"
                  required
                  placeholder="Masukkan nama lengkap siswa"
                  value={namaSiswa}
                  onChange={(e) => setNamaSiswa(e.target.value)}
                  className="h-10 text-on-surface border-outline/50 focus:border-primary"
                  disabled={isLoading}
                />
              </div>

              <div className="flex flex-col gap-xs">
                <label className="text-label-sm text-on-surface-variant font-medium">Jenjang Pendidikan</label>
                <select
                  value={jenjangPendidikan}
                  onChange={(e) => setJenjangPendidikan(e.target.value)}
                  className="w-full h-10 rounded-lg border border-outline/50 bg-transparent px-2 py-1 text-on-surface focus:border-primary outline-none text-base md:text-sm cursor-pointer"
                  disabled={isLoading}
                >
                  <option value="SD" className="bg-surface text-on-surface">SD</option>
                  <option value="SMP" className="bg-surface text-on-surface">SMP</option>
                  <option value="SMA" className="bg-surface text-on-surface">SMA</option>
                </select>
              </div>

              <div className="flex flex-col gap-xs">
                <label className="text-label-sm text-on-surface-variant font-medium">No. HP Orang Tua</label>
                <Input
                  type="tel"
                  required
                  placeholder="Contoh: 081234567890"
                  value={noHpOrangTua}
                  onChange={(e) => setNoHpOrangTua(e.target.value)}
                  className="h-10 text-on-surface border-outline/50 focus:border-primary"
                  disabled={isLoading}
                />
              </div>

              {error && (
                <p className="text-error text-label-sm font-medium">{error}</p>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11 bg-secondary hover:bg-secondary/90 text-on-secondary font-semibold rounded-xl mt-2 cursor-pointer transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Menyimpan...
                  </>
                ) : (
                  'Klaim Promo Spesial'
                )}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

