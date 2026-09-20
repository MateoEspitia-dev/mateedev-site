import React from 'react';
import { Layers, Home } from 'lucide-react';

interface NavbarProps {
  activeView: 'home' | 'proposals';
  setActiveView: (view: 'home' | 'proposals') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView }) => {
  return (
    <header className="sticky top-0 w-full z-40 bg-[#030712]/80 backdrop-blur-xl border-b border-slate-800/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Logo de Marca */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <button
            onClick={() => setActiveView('home')}
            className="code-font text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity flex items-center gap-1.5"
          >
            <span>&lt;mateedev<span className="text-emerald-400">.com</span>/&gt;</span>
          </button>

          {/* Badge móvil de disponibilidad */}
          <div className="flex sm:hidden items-center space-x-1.5 bg-slate-900/60 border border-slate-800/80 px-2.5 py-1 rounded-full text-[10px] text-slate-400">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>Activo</span>
          </div>
        </div>

        {/* Selector de Vistas / Pestañas de Navegación */}
        <nav className="flex items-center gap-1 sm:gap-2 bg-slate-900/80 border border-slate-800 p-1 rounded-2xl shadow-inner shadow-black/40">
          <button
            onClick={() => setActiveView('home')}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeView === 'home'
                ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-950/50'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </button>

          <button
            onClick={() => setActiveView('proposals')}
            className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all relative ${
              activeView === 'proposals'
                ? 'bg-gradient-to-r from-cyan-600 to-emerald-600 text-white shadow-md shadow-cyan-950/50'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Propuestas & Soluciones</span>
            <span className="bg-emerald-400 text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase tracking-tighter">
              NUEVO
            </span>
          </button>
        </nav>

        {/* Indicador de Disponibilidad en Desktop */}
        <div className="hidden sm:flex items-center space-x-2 bg-slate-900/60 backdrop-blur-md border border-slate-800/80 px-4 py-1.5 rounded-full text-xs text-slate-400 shadow-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Disponible para nuevos proyectos</span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
