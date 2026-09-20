import React from 'react';
import { Check, Plus, ArrowRight, Bot, ShieldCheck, Code2, Truck, Scissors, ShoppingBag, Layout } from 'lucide-react';
import { ProposalItem } from '../types';

interface ProductCardProps {
  item: ProposalItem;
  onSelect: (item: ProposalItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ item, onSelect }) => {
  return (
    <article className="relative bg-[#060c16] border border-slate-800/90 rounded-[28px] overflow-hidden shadow-2xl flex flex-col hover:border-cyan-500/40 hover:shadow-cyan-950/20 transition-all duration-300 group">
      
      {/* ========================================================
          CABECERA SUPERIOR (IMAGEN DE CAPTURA / LOGO + BADGES)
      ======================================================== */}
      <div className={`relative ${item.image ? 'bg-slate-950' : 'bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]'} p-4 sm:p-5 rounded-t-[26px] flex flex-col justify-between h-48 sm:h-52 overflow-hidden select-none`}>
        
        {/* Preview de captura de pantalla si existe */}
        {item.image && (
          <>
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover object-top opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060c16] via-slate-950/35 to-black/65 pointer-events-none" />
            {item.demoUrl && (
              <div className="absolute bottom-2.5 right-3 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 bg-cyan-950/90 border border-cyan-400/50 text-cyan-300 text-[9px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-md shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  DEMO EN VIVO
                </span>
              </div>
            )}
          </>
        )}

        {/* Fila superior de Badges */}
        <div className="flex items-center justify-between z-10">
          {item.badgeLeft ? (
            <span className="bg-[#202738]/90 backdrop-blur-md text-slate-200 text-[10px] font-bold tracking-wider px-3.5 py-1 rounded-full uppercase shadow-md border border-white/10">
              {item.badgeLeft}
            </span>
          ) : <div />}

          {item.badgeRight && (
            <span className="bg-[#10b981] text-[#022c22] text-[10px] font-extrabold tracking-wider px-3.5 py-1 rounded-full uppercase shadow-md">
              {item.badgeRight}
            </span>
          )}
        </div>

        {/* Logo central (cuando no hay captura) */}
        {!item.image && (
          <div className="flex-1 flex items-center justify-center my-auto z-10">
            {item.logoType === 'odoo' ? (
              <div className="flex items-center scale-110 sm:scale-125 transition-transform group-hover:scale-130 duration-300">
                <svg viewBox="0 0 200 60" className="h-10 sm:h-12 w-auto fill-current" aria-label="Odoo logo">
                  <circle cx="35" cy="30" r="19" fill="none" stroke="#9d3485" strokeWidth="12" />
                  <path d="M 68 10 L 80 10 L 80 49 L 68 49 Z" fill="#474747" />
                  <path d="M 80 20 C 65 20, 65 48, 80 48 Z" fill="#474747" />
                  <circle cx="106" cy="34" r="15" fill="none" stroke="#474747" strokeWidth="9" />
                  <circle cx="145" cy="34" r="15" fill="none" stroke="#474747" strokeWidth="9" />
                </svg>
              </div>
            ) : item.logoType === 'shopify' ? (
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 p-0.5 shadow-lg shadow-emerald-500/30">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                    <ShoppingBag className="w-7 h-7 text-emerald-400" />
                  </div>
                </div>
                <div className="text-left font-mono">
                  <span className="block text-xs font-bold text-slate-900 uppercase tracking-wider">SHOPIFY</span>
                  <span className="block text-[10px] text-slate-600">E-Commerce</span>
                </div>
              </div>
            ) : item.logoType === 'landing' ? (
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 p-0.5 shadow-lg shadow-cyan-500/30">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                    <Layout className="w-7 h-7 text-cyan-400" />
                  </div>
                </div>
                <div className="text-left font-mono">
                  <span className="block text-xs font-bold text-slate-900 uppercase tracking-wider">LANDING PAGE</span>
                  <span className="block text-[10px] text-slate-600">CRO & Ventas</span>
                </div>
              </div>
            ) : item.logoType === 'ai' ? (
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 p-0.5 shadow-lg shadow-violet-500/30">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                    <Bot className="w-7 h-7 text-cyan-400" />
                  </div>
                </div>
                <div className="text-left font-mono">
                  <span className="block text-xs font-bold text-slate-900 uppercase tracking-wider">AI AGENTS</span>
                  <span className="block text-[10px] text-slate-600">WhatsApp & CRM</span>
                </div>
              </div>
            ) : item.logoType === 'cloud' ? (
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-0.5 shadow-lg shadow-cyan-500/30">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7 text-emerald-400" />
                  </div>
                </div>
                <div className="text-left font-mono">
                  <span className="block text-xs font-bold text-slate-900 uppercase tracking-wider">CLOUD 24/7</span>
                  <span className="block text-[10px] text-slate-600">Uptime & Security</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-0.5 shadow-lg shadow-purple-500/30">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                    <Code2 className="w-7 h-7 text-purple-300" />
                  </div>
                </div>
                <div className="text-left font-mono">
                  <span className="block text-xs font-bold text-slate-900 uppercase tracking-wider">CUSTOM SAAS</span>
                  <span className="block text-[10px] text-slate-600">Full Stack Code</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Icono distintivo inferior izquierdo en la cabecera */}
        <div className="absolute -bottom-2 left-4 z-20">
          <div className="w-11 h-11 rounded-2xl bg-[#064e3b] border-2 border-[#060c16] flex items-center justify-center shadow-md">
            {item.logoType === 'minestock' ? (
              <Truck className="w-5 h-5 text-amber-400" />
            ) : item.logoType === 'tallerflow' ? (
              <Scissors className="w-5 h-5 text-cyan-300" />
            ) : item.logoType === 'shopify' ? (
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
            ) : item.logoType === 'landing' ? (
              <Layout className="w-5 h-5 text-cyan-400" />
            ) : item.logoType === 'ai' ? (
              <Bot className="w-5 h-5 text-cyan-400" />
            ) : item.logoType === 'cloud' ? (
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            ) : item.logoType === 'custom' ? (
              <Code2 className="w-5 h-5 text-purple-300" />
            ) : (
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-400 fill-current">
                <circle cx="8" cy="8" r="4" opacity="0.8" />
                <circle cx="16" cy="8" r="4" opacity="0.8" />
                <circle cx="12" cy="16" r="4" opacity="0.9" />
              </svg>
            )}
          </div>
        </div>

      </div>

      {/* ========================================================
          CUERPO DE LA TARJETA (TÍTULO, DESCRIPCIÓN Y CHECKLIST)
      ======================================================== */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between pt-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
            {item.title}
          </h3>

          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2.5">
            {item.description}
          </p>

          {/* Lista de características con check verde */}
          <ul className="mt-5 space-y-2.5">
            {item.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0 stroke-[2.5]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ========================================================
            LÍNEA SEPARADORA Y PIE DE TARJETA (PRECIO + DETALLES)
        ======================================================== */}
        <div className="mt-6 pt-4 border-t border-slate-800/80">
          <div className="flex items-end justify-between gap-3">
            
            {/* Columna de Precios */}
            <div>
              <div className="text-white font-bold text-sm sm:text-base tracking-tight flex items-baseline gap-1">
                <span>{item.price}</span>
                {item.billingPeriod && (
                  <span className="text-slate-400 text-xs font-normal">{item.billingPeriod}</span>
                )}
              </div>
              <p className="text-slate-400 text-[11px] mt-0.5 truncate max-w-[180px] sm:max-w-[210px]">
                {item.license}
              </p>
            </div>

            {/* Acciones de la derecha: Botón '+' y 'Ver detalles ->' */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => onSelect(item)}
                className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 flex items-center justify-center transition-all hover:scale-105 cursor-pointer"
                title="Información detallada"
                aria-label={`Ver información de ${item.title}`}
              >
                <Plus className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onSelect(item)}
                className="group/btn flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold text-xs sm:text-sm underline underline-offset-4 transition-colors py-1 cursor-pointer"
              >
                <span>Ver detalles</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>

    </article>
  );
};

export default ProductCard;