import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 py-8 text-center text-xs text-slate-500 z-10 border-t border-slate-800/50 mt-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="code-font text-slate-400">
          &lt;mateedev<span className="text-emerald-400">.com</span>/&gt; &copy; {new Date().getFullYear()}
        </p>
        <p className="text-slate-500">
          Construyendo el futuro línea a línea &bull; Software Libre, IA & Cloud
        </p>
        <div className="flex items-center gap-4 text-slate-400 text-xs">
          <a href="mailto:mateoespit@mateedev.com" className="hover:text-cyan-400 transition-colors">
            mateoespit@mateedev.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
