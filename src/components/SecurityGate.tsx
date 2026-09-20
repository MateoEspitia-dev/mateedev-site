import React, { useState } from 'react';
import { Lock, Mail, User, KeyRound, Sparkles, ArrowRight, ShieldCheck, RefreshCw, AlertCircle, MessageSquare, Check, Inbox } from 'lucide-react';

interface SecurityGateProps {
  onRequestCode: (name: string, email: string) => Promise<{ success: boolean; code: string; isRealDelivery: boolean; error?: string }>;
  onVerifyCode: (code: string) => { success: boolean; error?: string };
  generatedCode: string | null;
  isRealDelivery: boolean;
}

export const SecurityGate: React.FC<SecurityGateProps> = ({
  onRequestCode,
  onVerifyCode,
  generatedCode,
  isRealDelivery,
}) => {
  const [step, setStep] = useState<'request' | 'verify'>('request');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  // Paso 1: Enviar solicitud de clave al correo
  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Por favor ingresa tu nombre o el de tu empresa.');
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError('Por favor ingresa un correo electrónico válido.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await onRequestCode(name, email);
      setIsSubmitting(false);

      if (!res.success && res.error) {
        setError(res.error);
        return;
      }

      setStep('verify');
    } catch {
      setIsSubmitting(false);
      setError('Hubo un error al procesar la solicitud. Intenta nuevamente.');
    }
  };

  // Paso 2: Verificar clave de 6 dígitos
  const handleVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (code.trim().length !== 6) {
      setError('Por favor ingresa los 6 dígitos completos de tu clave de acceso.');
      return;
    }

    const result = onVerifyCode(code.trim());
    if (!result.success && result.error) {
      setError(result.error);
    }
  };

  // Autocompletar clave para pruebas
  const handleAutofillCode = () => {
    if (generatedCode) {
      setCode(generatedCode);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  const whatsappHelpUrl = `https://wa.me/573016417721?text=${encodeURIComponent(
    `Hola Mateo, estoy solicitando acceso a las propuestas en mateedev.com para ${name || 'mi empresa'} (${email || ''}) y me gustaría recibir asistencia directa.`
  )}`;

  return (
    <div className="relative z-30 w-full max-w-lg mx-auto px-4 py-4">
      <div className="relative bg-[#090f1d]/95 backdrop-blur-2xl border-2 border-cyan-500/40 hover:border-cyan-400/60 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(6,182,212,0.22)] text-slate-100 transition-all duration-300">
        
        {/* Glows decorativos */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-44 h-44 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Encabezado */}
        <div className="text-center space-y-3 mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/40 shadow-inner shadow-cyan-500/20 mb-1">
            <Lock className="w-7 h-7 text-cyan-400 animate-pulse" />
          </div>

          <div className="inline-flex items-center gap-1.5 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-cyan-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Acceso Privado &bull; Proyectos & Tarifas</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {step === 'request'
              ? 'Desbloquea las Propuestas Comerciales'
              : 'Verifica tu Clave de Acceso'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
            {step === 'request'
              ? 'Ingresa tu nombre y correo para recibir tu clave de acceso. Una vez validada, el catálogo permanecerá desbloqueado durante 24 horas continuas.'
              : isRealDelivery
              ? `Revisa tu correo ${email}. Te hemos enviado una clave de 6 dígitos.`
              : `Ingresa el código de 6 dígitos generado para ${email}.`}
          </p>
        </div>

        {/* Mensaje de Error */}
        {error && (
          <div className="mb-5 p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* ========================================================
            PASO 1: SOLICITUD DE NOMBRE Y CORREO
        ======================================================== */}
        {step === 'request' ? (
          <form onSubmit={handleRequestSubmit} className="space-y-4">
            <div>
              <label htmlFor="gate-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Nombre completo o Empresa <span className="text-cyan-400">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  id="gate-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Mateo Espitia / Mi Empresa SAS"
                  className="w-full bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="gate-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                Correo Electrónico <span className="text-cyan-400">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  id="gate-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 transition-all outline-none"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl shadow-lg shadow-cyan-950/50 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 cursor-pointer"
              >
                <span>{isSubmitting ? 'Enviando Clave al Correo...' : 'Enviar Clave a mi Correo (24h)'}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="pt-1 text-center">
              <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>La clave se renueva cada 24 horas &bull; Sin permanencia</span>
              </p>
            </div>
          </form>
        ) : (
          /* ========================================================
              PASO 2: INGRESO DEL CÓDIGO
          ======================================================== */
          <form onSubmit={handleVerifySubmit} className="space-y-4">
            
            {/* Aviso de correo enviado en tiempo real si EmailJS está activo */}
            {isRealDelivery ? (
              <div className="p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-200 flex items-start gap-3 shadow-inner">
                <Inbox className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-emerald-300 font-semibold mb-0.5">
                    ¡Correo enviado a tu bandeja!
                  </strong>
                  <p className="text-slate-300 text-[11px]">
                    Revisa tu correo <strong>{email}</strong> (incluyendo la carpeta de <em>spam</em> o promociones). Ingresa el código de 6 dígitos a continuación:
                  </p>
                </div>
              </div>
            ) : (
              /* Banner de modo local si aún no se han configurado credenciales */
              generatedCode && (
                <div className="p-3.5 rounded-2xl bg-cyan-950/50 border border-cyan-500/40 text-xs text-cyan-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
                  <div className="flex items-center gap-2.5 text-left">
                    <KeyRound className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <span className="block text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                        Clave de prueba (Modo Local):
                      </span>
                      <strong className="code-font text-lg text-emerald-300 tracking-widest font-extrabold">
                        {generatedCode}
                      </strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleAutofillCode}
                    className="w-full sm:w-auto px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  >
                    {copiedNotification ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>¡Código Aplicado!</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Autocompletar</span>
                      </>
                    )}
                  </button>
                </div>
              )
            )}

            <div>
              <label htmlFor="gate-otp" className="block text-xs font-semibold text-slate-300 mb-1.5 text-center">
                Ingresa la Clave de 6 Dígitos
              </label>
              <div className="relative max-w-[220px] mx-auto">
                <input
                  id="gate-otp"
                  type="text"
                  maxLength={6}
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="000000"
                  autoFocus
                  className="w-full bg-slate-900 border-2 border-cyan-500/50 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 rounded-2xl py-3 text-center text-2xl font-bold tracking-[0.35em] code-font text-white placeholder-slate-600 outline-none shadow-inner"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-950/50 transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Desbloquear Propuestas por 24 Horas</span>
              </button>
            </div>

            {/* Reintentar o cambiar correo */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/80">
              <button
                type="button"
                onClick={() => {
                  setStep('request');
                  setError('');
                }}
                className="hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
              >
                &larr; Cambiar correo
              </button>

              <button
                type="button"
                disabled={isSubmitting}
                onClick={async () => {
                  setIsSubmitting(true);
                  setError('');
                  setCode('');
                  await onRequestCode(name, email);
                  setIsSubmitting(false);
                }}
                className="hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSubmitting ? 'animate-spin' : ''}`} />
                <span>Reenviar correo</span>
              </button>
            </div>

            {/* Asistencia directa por WhatsApp */}
            <div className="text-center pt-1">
              <a
                href={whatsappHelpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
              >
                <MessageSquare className="w-3 h-3 text-emerald-400" />
                <span>¿No te llega el correo? Contactar a Mateo por WhatsApp</span>
              </a>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

export default SecurityGate;