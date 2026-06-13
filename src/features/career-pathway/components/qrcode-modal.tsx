'use client';

import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { QRCodeSVG } from 'qrcode.react';

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrCodeModal: React.FC<QrCodeModalProps> = ({ isOpen, onClose }) => {
  const [projectUrl, setProjectUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProjectUrl(window.location.href);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className="bg-surface w-full lg:max-w-6/12 rounded-3xl p-xl shadow-2xl border border-outline-variant/10 flex flex-col items-center justify-center text-center"
        showCloseButton={false}
      >
        <div className="flex justify-between items-center w-full mb-md">
          <div className="w-10 h-10 bg-on-secondary-container/10 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary">qr_code_2</span>
          </div>
          <button className="text-on-surface-variant cursor-pointer hover:opacity-85 transition-opacity" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <DialogHeader className="items-center">
          <DialogTitle className="text-headline-md mb-xs text-on-background">
            Scan QR Code
          </DialogTitle>
          <DialogDescription className="text-body-sm text-on-surface-variant max-w-[280px]">
            Scan this QR code to open the Future Skills Roadmap project on your mobile device.
          </DialogDescription>
        </DialogHeader>

        <div className="bg-white p-lg rounded-2xl border border-outline-variant/20 shadow-md my-md flex items-center justify-center">
          {projectUrl ? (
            <QRCodeSVG 
              value={projectUrl} 
              size={200}
              level="H"
              includeMargin={true}
            />
          ) : (
            <div className="w-[200px] h-[200px] bg-outline-variant/10 rounded animate-pulse" />
          )}
        </div>

        <div className="text-label-sm text-on-surface-variant font-mono bg-on-secondary-container/5 px-sm py-xs rounded-lg break-all max-w-full">
          {projectUrl}
        </div>
      </DialogContent>
    </Dialog>
  );
};
