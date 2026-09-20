import React, { useState } from 'react';
import { PROPOSALS_DATA } from '../data/proposals';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { SecurityGate } from './SecurityGate';
import { useSecurityAccess } from '../hooks/useSecurityAccess';
import { ProposalItem } from '../types';
import { Sparkles, CheckCircle2, ShieldCheck, HeartHandshake, Zap, Lock, Unlock, Clock } from 'lucide-react';

export const ProposalsCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<ProposalItem | null>(null);

  // Hook de seguridad y autorización 24h con despacho de correo
  const {
    isUnlocked,
    session,
    timeRemaining,
    generatedCode,
    isRealDelivery,
    requestAccessCode,
    verifyAccessCode,
    revokeAccess,
  } = useSecurityAccess();

  const categories = [
    { id: 'all', label: 'Todos los Productos' },
    { id: 'erp', label: 'Software Libre / Odoo' },
    { id: 'ai', label: 'Agentes IA & WhatsApp' },
    { id: 'cloud', label: 'Cloud & Mantenimiento' },
    { id: 'custom', label: 'Software a Medida' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? PROPOSALS_DATA
    : PROPOSALS_DATA.filter((item) => item.category === selectedCategory);

  return (
    <section className="relative px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto z-10">
      
      {/* Encabezado de la Vista */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-8 sm:mb-12">
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Soluciones & Propuestas de Alto Valor</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Productos y Planes para{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Impulsar y Fidelizar
          </span>{' '}
          a tu Negocio
        </h2>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Plataformas llave en mano, automatización inteligente y soporte continuo. Paga por el servicio y la infraestructura, no por licencias abusivas por usuario.
        </p>

        {/* Pestañas de Filtrado */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-sm shadow-cyan-950/40'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================
          BARRA DE ESTADO DE SESIÓN (CUANDO ESTÁ DESBLOQUEADO)
      ======================================================== */}
      {isUnlocked && (
        <div className="max-w-5xl mx-auto mb-8 p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/40 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-lg shadow-emerald-950/30 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold shrink-0">
              <Unlock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-white font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Acceso Autorizado: {session?.name}</span>
                <span className="text-slate-400 font-normal">({session?.email})</span>
              </p>
              <p className="text-slate-400 text-[11px] mt-0.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sesión activa por 24h &bull; Tiempo restante: <strong className="text-cyan-300">{timeRemaining}</strong></span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={revokeAccess}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-red-950/60 border border-slate-700 hover:border-red-500/40 text-slate-300 hover:text-red-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0 font-medium"
            title="Cerrar sesión y volver a bloquear"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Bloquear Acceso</span>
          </button>
        </div>
      )}

      {/* ========================================================
          ZONA DE PROPUESTAS CON DIFUMINADO Y COMPONENTE DE SEGURIDAD
      ======================================================== */}
      <div className="relative">
        
        {/* COMPONENTE DE SEGURIDAD SUPERPUESTO (GATEKEEPER) */}
        {!isUnlocked && (
          <div className="absolute inset-0 z-20 flex items-start justify-center pt-2 sm:pt-6 bg-slate-950/30 backdrop-blur-[2px] rounded-3xl">
            <SecurityGate
              onRequestCode={requestAccessCode}
              onVerifyCode={verifyAccessCode}
              generatedCode={generatedCode}
              isRealDelivery={isRealDelivery}
            />
          </div>
        )}

        {/* GRID DE PRODUCTOS (DIFUMINADO SI NO ESTÁ AUTENTICADO) */}
        <div
          className={`transition-all duration-700 ${
            !isUnlocked
              ? 'filter blur-md md:blur-lg opacity-30 pointer-events-none select-none'
              : 'filter-none opacity-100'
          }`}
          aria-hidden={!isUnlocked}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {filteredItems.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onSelect={(selected) => {
                  if (isUnlocked) {
                    setActiveModalItem(selected);
                  }
                }}
              />
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================
          BANNER DE GARANTÍAS DE FIDELIZACIÓN
      ======================================================== */}
      <div className="mt-14 sm:mt-20 p-6 sm:p-8 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-slate-900/80 border border-slate-800 rounded-3xl max-w-5xl mx-auto backdrop-blur-xl">
        <h3 className="text-center text-lg sm:text-xl font-bold text-white mb-6 flex items-center justify-center gap-2">
          <HeartHandshake className="w-5 h-5 text-cyan-400" />
          <span>El Compromiso de Valor mateedev.com</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left text-xs sm:text-sm">
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-white font-semibold">Tus Datos son Tuyos</strong>
              <p className="text-slate-400 text-xs mt-1">
                Nunca te retenemos con formatos cerrados. Tienes acceso completo a copias de seguridad de tu base de datos en todo momento.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-white font-semibold">Sin Costos por Usuario</strong>
              <p className="text-slate-400 text-xs mt-1">
                En software libre como Odoo Community o herramientas propias, tu equipo crece libremente sin que la mensualidad se dispare.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
            <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="block text-white font-semibold">Soporte Directo con Mateo</strong>
              <p className="text-slate-400 text-xs mt-1">
                Atención personalizada sin intermediarios ni bots confusos de soporte. Tratas directamente con el ingeniero responsable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de detalles interactivo (Solo si está desbloqueado) */}
      {isUnlocked && (
        <ProductModal
          item={activeModalItem}
          onClose={() => setActiveModalItem(null)}
        />
      )}

    </section>
  );
};

export default ProposalsCatalog;