import React, { useState } from 'react';
import { X, Check, MessageSquare, Shield, Clock, HelpCircle, ArrowUpRight, ExternalLink, Key, Copy } from 'lucide-react';
import { ProposalItem } from '../types';
import { SecuritySession } from '../hooks/useSecurityAccess';
import { buildDemoUrl } from '../utils/token';

interface ProductModalProps {
  item: ProposalItem | null;
  session?: SecuritySession | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ item, session = null, onClose }) => {
  const [copiedPassword, setCopiedPassword] = useState(false);

  if (!item) return null;

  const handleCopyPassword = (pwd: string) => {
    navigator.clipboard.writeText(pwd);
    setCopiedPassword(true);
    setTimeout(() => setCopiedPassword(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Mateo, estuve viendo la propuesta de "${item.title}" en mateedev.com y me gustaría cotizar e implementar este servicio para mi negocio.`
  );
  const whatsappUrl = `https://wa.me/573016417721?text=${whatsappMessage}`;

  const emailSubject = encodeURIComponent(`Propuesta: ${item.title} - Consulta Comercial`);
  const emailBody = encodeURIComponent(
    `Hola Mateo,\n\nVi la propuesta de ${item.title} (${item.price} ${item.billingPeriod}) en mateedev.com y estoy interesado en conocer los pasos de implementación para mi empresa.\n\nSaludos!`
  );
  const emailUrl = `mailto:mateoespit@mateedev.com?subject=${emailSubject}&body=${emailBody}`;

  const liveDemoUrl = item.demoUrl ? buildDemoUrl(item.demoUrl, session) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#090f1d] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 text-slate-200 my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow de fondo decorativo */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors z-20 cursor-pointer"
          title="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Encabezado del modal */}
        <div className="pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-0.5 rounded-full uppercase tracking-wider">
              {item.categoryLabel}
            </span>
            {item.badgeRight && (
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-0.5 rounded-full uppercase tracking-wider">
                {item.badgeRight}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {item.title}
          </h2>
          <p className="text-emerald-400 font-bold text-lg mt-1">
            {item.price} <span className="text-slate-400 text-sm font-normal">{item.billingPeriod}</span>
          </p>
        </div>

        {/* Captura de pantalla del sistema si existe */}
        {item.image && (
          <div className="mt-5 rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-black/60 aspect-video relative group">
            <img
              src={item.image}
              alt={`Captura de pantalla de ${item.title}`}
              className="w-full h-full object-cover object-top"
            />
            {liveDemoUrl && (
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a
                  href={liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transform hover:scale-105 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Probar Demo en Vivo</span>
                </a>
              </div>
            )}
          </div>
        )}

        {/* Banner de Tienda Demo Activa con Clave */}
        {item.demoPassword && (
          <div className="mt-5 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <Key className="w-5 h-5" />
              </div>
              <div>
                <p className="text-white text-xs font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Tienda de Demostración Activa</span>
                </p>
                <p className="text-slate-300 text-xs mt-0.5">
                  Ingresa con la clave: <code className="px-2 py-0.5 rounded bg-slate-900 border border-emerald-500/40 text-emerald-300 font-mono font-bold">{item.demoPassword}</code>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleCopyPassword(item.demoPassword!)}
                className="flex-1 sm:flex-initial px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/50 text-xs text-slate-200 hover:text-white flex items-center justify-center gap-1.5 transition cursor-pointer font-medium"
              >
                <Copy className="w-3.5 h-3.5 text-emerald-400" />
                <span>{copiedPassword ? '¡Copiada!' : 'Copiar Clave'}</span>
              </button>
              {item.demoUrl && (
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-md cursor-pointer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Ir a Tienda</span>
                </a>
              )}
            </div>
          </div>
        )}

        {/* Resumen */}
        <div className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
          <p>{item.details.overview}</p>
        </div>

        {/* ¿Por qué tu empresa lo necesita? */}
        <div className="mt-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
          <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2 mb-1.5">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            ¿Por qué implementar esta solución?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300">
            {item.details.whyNeeded}
          </p>
        </div>

        {/* Qué incluye este plan */}
        <div className="mt-6">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Qué incluye la membresía / servicio:
          </h4>
          <ul className="space-y-2">
            {item.details.includedItems.map((inc, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0 stroke-[2.5]" />
                <span>{inc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ficha técnica y SLA */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <span className="text-slate-400 flex items-center gap-1.5 font-mono mb-1">
              <Shield className="w-3.5 h-3.5 text-cyan-400" /> Licencia & Propiedad
            </span>
            <span className="text-white font-medium">{item.license}</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <span className="text-slate-400 flex items-center gap-1.5 font-mono mb-1">
              <Clock className="w-3.5 h-3.5 text-emerald-400" /> Contratación
            </span>
            <span className="text-white font-medium">{item.details.contractTerms}</span>
          </div>
        </div>

        {/* Botones de acción directa */}
        <div className="mt-7 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
          {liveDemoUrl && (
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold py-3 px-5 rounded-xl shadow-lg shadow-cyan-950/40 transition-all hover:scale-[1.02]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Abrir Demo en Vivo</span>
            </a>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-3 px-5 rounded-xl shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02]"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Hablar por WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={emailUrl}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold py-3 px-5 rounded-xl border border-slate-700 transition-colors"
          >
            <span>Enviar Email</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProductModal;