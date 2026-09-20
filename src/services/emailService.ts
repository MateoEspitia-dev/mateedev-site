import emailjs from '@emailjs/browser';

export interface SendEmailParams {
  name: string;
  email: string;
  code: string;
}

export interface SendEmailResult {
  success: boolean;
  isRealDelivery: boolean;
  error?: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export const isEmailJsConfigured = Boolean(
  SERVICE_ID &&
  TEMPLATE_ID &&
  PUBLIC_KEY &&
  SERVICE_ID !== 'TU_SERVICE_ID'
);

export async function sendOtpEmail({ name, email, code }: SendEmailParams): Promise<SendEmailResult> {
  // Envío real con EmailJS
  if (isEmailJsConfigured) {
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: name,
          to_email: email,
          access_code: code,
          expires_in: '24 horas',
          requested_at: new Date().toLocaleString('es-CO'),
        },
        PUBLIC_KEY
      );

      return { success: true, isRealDelivery: true };
    } catch (err: unknown) {
      console.error('[EmailJS] Error al enviar correo:', err);
      return {
        success: false,
        isRealDelivery: false,
        error: 'No se pudo despachar el correo electrónico. Revisa tu conexión o credenciales de EmailJS.',
      };
    }
  }

  // Modo local / simulación si aún no se han configurado las variables de entorno
  console.info(`[EmailService] Modo Local: Clave para ${email} es ${code}`);
  return { success: true, isRealDelivery: false };
}