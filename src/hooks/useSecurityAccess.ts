import { useState, useEffect, useCallback } from 'react';
import { sendOtpEmail, isEmailJsConfigured } from '../services/emailService';

export interface SecuritySession {
  name: string;
  email: string;
  authenticatedAt: number;
  expiresAt: number;
}

const STORAGE_KEY = 'mateedev_proposals_auth';
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000; // 24 horas exactas
const OTP_VALIDITY_MS = 15 * 60 * 1000; // 15 minutos para ingresar el código

export function useSecurityAccess() {
  const [session, setSession] = useState<SecuritySession | null>(null);
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [isRealDelivery, setIsRealDelivery] = useState<boolean>(isEmailJsConfigured);

  // Calcula el tiempo restante legible (ej: "23h 59m")
  const calculateRemainingTime = useCallback((expiresAt: number): string => {
    const diff = expiresAt - Date.now();
    if (diff <= 0) return 'Expirada';
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  }, []);

  // Verificar validez de la sesión almacenada
  const verifyCurrentSession = useCallback(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setSession(null);
        setIsUnlocked(false);
        setTimeRemaining('');
        return;
      }
      const data: SecuritySession = JSON.parse(raw);
      if (Date.now() < data.expiresAt) {
        setSession(data);
        setIsUnlocked(true);
        setTimeRemaining(calculateRemainingTime(data.expiresAt));
      } else {
        // Sesión expirada después de 24 horas
        localStorage.removeItem(STORAGE_KEY);
        setSession(null);
        setIsUnlocked(false);
        setTimeRemaining('');
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      setSession(null);
      setIsUnlocked(false);
    }
  }, [calculateRemainingTime]);

  // Al montar y periódicamente cada 30 segundos verificar expiración
  useEffect(() => {
    verifyCurrentSession();
    const interval = setInterval(verifyCurrentSession, 30000);
    return () => clearInterval(interval);
  }, [verifyCurrentSession]);

  // Solicitar nueva clave de acceso y despachar correo
  const requestAccessCode = async (
    name: string,
    email: string
  ): Promise<{ success: boolean; code: string; isRealDelivery: boolean; error?: string }> => {
    // Generar clave de 6 dígitos
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    const otpData = {
      code: randomCode,
      name: cleanName,
      email: cleanEmail,
      expiresAt: Date.now() + OTP_VALIDITY_MS,
    };

    sessionStorage.setItem('mateedev_pending_otp', JSON.stringify(otpData));
    setGeneratedCode(randomCode);

    // Enviar correo real o simular
    const emailResult = await sendOtpEmail({
      name: cleanName,
      email: cleanEmail,
      code: randomCode,
    });

    setIsRealDelivery(emailResult.isRealDelivery);

    if (!emailResult.success && emailResult.error) {
      return {
        success: false,
        code: randomCode,
        isRealDelivery: emailResult.isRealDelivery,
        error: emailResult.error,
      };
    }

    return {
      success: true,
      code: randomCode,
      isRealDelivery: emailResult.isRealDelivery,
    };
  };

  // Validar clave de acceso ingresada
  const verifyAccessCode = (inputCode: string): { success: boolean; error?: string } => {
    try {
      const rawOtp = sessionStorage.getItem('mateedev_pending_otp');
      if (!rawOtp) {
        return { success: false, error: 'No hay una solicitud activa. Por favor genera una nueva clave.' };
      }

      const otpData = JSON.parse(rawOtp);
      if (Date.now() > otpData.expiresAt) {
        sessionStorage.removeItem('mateedev_pending_otp');
        return { success: false, error: 'La clave de acceso ha caducado (15 min). Solicita una nueva.' };
      }

      if (otpData.code !== inputCode.trim()) {
        return { success: false, error: 'La clave ingresada es incorrecta. Verifica tu correo e intenta de nuevo.' };
      }

      // Clave válida: Crear sesión de 24 horas
      const newSession: SecuritySession = {
        name: otpData.name,
        email: otpData.email,
        authenticatedAt: Date.now(),
        expiresAt: Date.now() + SESSION_DURATION_MS,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(newSession));
      sessionStorage.removeItem('mateedev_pending_otp');
      setSession(newSession);
      setIsUnlocked(true);
      setTimeRemaining(calculateRemainingTime(newSession.expiresAt));
      setGeneratedCode(null);

      return { success: true };
    } catch {
      return { success: false, error: 'Ocurrió un error al verificar la clave.' };
    }
  };

  // Cerrar sesión / volver a bloquear
  const revokeAccess = () => {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem('mateedev_pending_otp');
    setSession(null);
    setIsUnlocked(false);
    setTimeRemaining('');
    setGeneratedCode(null);
  };

  return {
    isUnlocked,
    session,
    timeRemaining,
    generatedCode,
    isRealDelivery,
    isEmailJsConfigured,
    requestAccessCode,
    verifyAccessCode,
    revokeAccess,
  };
}

export default useSecurityAccess;