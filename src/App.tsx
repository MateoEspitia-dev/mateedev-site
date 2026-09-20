import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProposalsCatalog } from './components/ProposalsCatalog';
import { Footer } from './components/Footer';
import { UpdateBanner } from './components/UpdateBanner';

export const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'home' | 'proposals'>('home');

  // Soporte para navegar directamente por hash URL (ej: mateedev.com/#propuestas)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('propuestas') || hash.includes('odoo') || hash.includes('soluciones')) {
        setActiveView('proposals');
      } else if (hash === '#inicio' || hash === '' || hash === '#home') {
        setActiveView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleViewChange = (view: 'home' | 'proposals') => {
    setActiveView(view);
    window.location.hash = view === 'proposals' ? 'propuestas' : 'inicio';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="text-slate-100 min-h-screen flex flex-col justify-between overflow-x-hidden relative bg-[#030712]">
      {/* Barra de Navegación */}
      <Navbar activeView={activeView} setActiveView={handleViewChange} />

      {/* Contenido Principal según la vista seleccionada */}
      <main className="flex-grow flex flex-col">
        {activeView === 'home' ? (
          <HeroSection onGoToProposals={() => handleViewChange('proposals')} />
        ) : (
          <ProposalsCatalog />
        )}
      </main>

      {/* Pie de Página */}
      <Footer />

      {/* Recuadro flotante abajo a la derecha con SpideyDev.mp4 */}
      <UpdateBanner />
    </div>
  );
};

export default App;
