'use client';

import React, { useEffect, useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function BumperPage() {
  const [projectUrl, setProjectUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Use origin so they get directed to the main site instead of the bumper page itself
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setProjectUrl(window.location.origin);
    }
  }, []);

  return (
    <div className="min-h-[calc(90vh)] mt-12 w-full bg-background flex items-center justify-center overflow-hidden">
      {/* Background decoration to make it look premium */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-16 z-10">
        
        {/* Left Side: QR Code and Text */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="bg-white p-6 rounded-3xl shadow-2xl border border-outline-variant/20 animate-fade-in transition-transform hover:scale-105 duration-500">
            {projectUrl ? (
              <QRCodeCanvas 
                id="bumper-qr-code"
                value={projectUrl} 
                size={600}
                level="H"
                includeMargin={true}
                className="rounded-xl"
              />
            ) : (
              <div className="w-[600px] h-[600px] bg-outline-variant/10 rounded-xl animate-pulse" />
            )}
          </div>
          
          <h1 className="mt-12 text-5xl md:text-6xl font-black text-on-background leading-tight tracking-tight drop-shadow-sm">
            Scan for <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Coding Class
            </span><br/>
            Information<br/>
            and Promo Claim
          </h1>
        </div>

        {/* Right Side: Video */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/20 relative aspect-9/16 bg-surface-variant transform transition-transform duration-500">
            <video 
              src="/WhatsApp%20Video%202026-06-14%20at%209.42.23%20AM.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-left">
              <p className="text-white font-medium flex items-center gap-2 text-xl">
                <span className="material-symbols-outlined">play_circle</span>
                Last Year Class
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
