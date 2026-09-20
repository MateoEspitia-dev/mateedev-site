import React, { useState, useEffect } from 'react';
import { X, Minimize2, Maximize2 } from 'lucide-react';

export const UpdateBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const STORAGE_KEY = 'mateedev_spidey_banner_dismissed';

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
    sessionStorage.setItem(STORAGE_KEY, 'true');
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized((prev) => !prev);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* ========================================================
          MODO MINIMIZADO (Pill elegante abajo a la derecha)
      ======================================================== */}
      {isMinimized ? (
        <div
          onClick={() => setIsMinimized(false)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2.5 bg-slate-950/90 border border-cyan-500/40 backdrop-blur-xl px-4 py-2 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] cursor-pointer hover:scale-105 transition-all text-xs select-none"
          title="Clic para ver el recuadro completo"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="gamer-font text-cyan-300 text-[10px] tracking-wider uppercase">
            [VIDEO EN DESARROLLO]
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMinimized(false);
            }}
            className="text-slate-400 hover:text-white p-0.5 rounded"
            title="Expandir"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        /* ========================================================
            MODO EXPANDIDO: RECUADRO ABAJO A LA DERECHA
        ======================================================== */
        <aside
          aria-label="Aviso de actualización en video"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[90vw] sm:w-[380px] md:w-[420px] select-none"
        >
          <div className="relative bg-slate-950/95 backdrop-blur-2xl border-2 border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 rounded-2xl p-2.5 shadow-[0_15px_45px_rgba(0,0,0,0.85)]">
            
            {/* CONTENEDOR DEL VIDEO */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-lg">
              <video
                src="/SpideyDev.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Botones discretos sobre el video en la esquina superior derecha */}
              <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5">
                <button
                  onClick={toggleMinimize}
                  className="bg-black/60 hover:bg-black/90 text-white/80 hover:text-white p-1.5 rounded-full backdrop-blur-md border border-white/15 transition-all shadow-md hover:scale-110"
                  title="Minimizar recuadro"
                  aria-label="Minimizar recuadro"
                >
                  <Minimize2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleDismiss}
                  className="bg-black/60 hover:bg-red-950/80 text-white/80 hover:text-red-400 p-1.5 rounded-full backdrop-blur-md border border-white/15 hover:border-red-500/40 transition-all shadow-md hover:scale-110"
                  title="Cerrar aviso"
                  aria-label="Cerrar aviso"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* LETRERO MINIMALISTA CON FUENTE GAMER */}
            <div className="mt-2.5 px-3 py-2 bg-black/70 border border-cyan-400/30 rounded-xl backdrop-blur-md flex items-center justify-center gap-2.5 text-center shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
              <p className="gamer-font gamer-glow text-cyan-300 text-[10px] sm:text-[11px] leading-relaxed tracking-wider uppercase">
                esta página está desarrollándose en estos momentos, ya pronto estará un poco mejor
                <span className="gamer-cursor inline-block w-1.5 h-3 bg-cyan-400 ml-1 align-middle" />
              </p>
            </div>

          </div>
        </aside>
      )}
    </>
  );
};

export default UpdateBanner;
