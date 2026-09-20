import React from 'react';
import { ArrowRight, Sparkles, Layers, Mail } from 'lucide-react';

interface HeroSectionProps {
  onGoToProposals: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGoToProposals }) => {
  return (
    <section className="relative flex-grow flex items-center justify-center px-4 sm:px-6 py-16 sm:py-24 z-10">
      
      {/* Orbes de Luz de fondo */}
      <div className="absolute top-0 md:top-[-10%] left-[-15%] md:left-[-10%] w-96 h-96 md:w-[45vw] md:h-[45vw] rounded-full bg-gradient-to-br from-violet-600 to-purple-800 blur-[80px] md:blur-[120px] opacity-40 md:opacity-25 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[5%] md:bottom-[-10%] right-[-15%] md:right-[-10%] w-96 h-96 md:w-[45vw] md:h-[45vw] rounded-full bg-gradient-to-br from-cyan-500 to-emerald-600 blur-[80px] md:blur-[120px] opacity-40 md:opacity-25 animate-pulse-slow pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="max-w-4xl w-full text-center space-y-6 sm:space-y-8 relative z-10">
        
        {/* Badge de innovación */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-emerald-500/10 border border-violet-500/30 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-violet-300 shadow-sm backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Innovación de Próxima Generación & Soluciones B2B</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.25] md:leading-[1.15]">
          Ideas más allá de los límites con la{' '}
          <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            arquitectura del futuro
          </span>.
        </h1>

        {/* Párrafo descriptivo */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Donde la lógica se encuentra con la innovación. Desarrollo de software avanzado, implementaciones de software libre corporativo y soluciones especializadas con Inteligencia Artificial.
        </p>

        {/* Botones de llamada a la acción */}
        <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="mailto:mateoespit@mateedev.com?subject=Propuesta%20de%20Proyecto%20-%20Innovaci%C3%B3n&body=Hola%20Mateo%2C%20vi%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20que%20habl%C3%A1ramos%20sobre%20una%20idea%20que%20tengo..."
            className="group w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-violet-900/30 hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Hablemos de tu idea</span>
            <Mail className="w-4 h-4 transform group-hover:scale-110 transition-transform" />
          </a>

          <button
            onClick={onGoToProposals}
            className="group w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-slate-700 hover:border-cyan-500/50 shadow-md backdrop-blur-md transition-all duration-300"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Ver Propuestas para Clientes</span>
            <ArrowRight className="w-4 h-4 text-emerald-400 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bloque de código interactivo */}
        <div className="pt-6 sm:pt-8 max-w-md mx-auto">
          <div className="bg-slate-900/60 md:bg-slate-900/40 backdrop-blur-md border border-slate-800/80 md:border-slate-800/60 rounded-xl p-4 text-left text-[11px] sm:text-xs code-font text-slate-400 flex items-center justify-between shadow-xl">
            <div>
              <span className="text-violet-400">const</span> stack = [
              <span className="text-emerald-400">'Odoo ERP'</span>,{' '}
              <span className="text-cyan-400">'IA & WhatsApp'</span>,{' '}
              <span className="text-violet-400">'Cloud'</span>];
            </div>
            <div className="text-[10px] bg-slate-800/80 md:bg-slate-800/50 px-2 py-0.5 rounded text-emerald-400 border border-emerald-500/30 font-mono">
              ● status: active
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
