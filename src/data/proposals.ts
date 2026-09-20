import { ProposalItem } from '../types';

export const PROPOSALS_DATA: ProposalItem[] = [
  {
    id: 'odoo-erp',
    title: 'Odoo ERP',
    category: 'erp',
    categoryLabel: 'Software Libre / ERP',
    badgeLeft: 'SOFTWARE LIBRE',
    badgeRight: 'POPULAR',
    logoType: 'odoo',
    description:
      'Implementamos Odoo Community (licencia libre) con un modelo de membresía mensual o anual que incluye hosting, soporte 24/7 del servidor y backups según el plan. La licencia es gratis: usted paga por el plan, no por usuario.',
    features: [
      'CRM, ventas, inventario y contabilidad',
      'Módulos activables según su plan',
      'Hosting/VPS gestionado en la nube',
      'Backups incluidos según el plan',
    ],
    price: 'Desde 50.000 COP',
    billingPeriod: '/ mes',
    license: 'LGPL v3 (Community, licencia libre)',
    details: {
      overview:
        'Odoo Community es el ERP de código abierto más robusto del mundo. Elimina los costos por usuario de licencias privativas y permite a las empresas centralizar inventarios, facturación, compras y relación con clientes en un solo lugar.',
      whyNeeded:
        'Ideal para empresas que quieren dejar las hojas de cálculo manuales o salir de suscripciones costosas por usuario (como SAP o Salesforce) sin perder potencia corporativa.',
      includedItems: [
        'Despliegue en servidor VPS dedicado en la nube con IP propia',
        'Configuración de dominio corporativo con certificado SSL automático',
        'Capacitación inicial y asesoría para puesta en marcha',
        'Mantenimiento preventivo, actualizaciones del sistema y copias de seguridad automáticas',
        'Soporte túcnico 24/7 para estabilidad del servidor',
      ],
      technicalHighlights: [
        'Versión: Odoo 17/18 Community Edition',
        'Stack: Python, PostgreSQL, Nginx Reverse Proxy',
        'Infraestructura: VPS Cloud SSD de alto rendimiento',
      ],
      contractTerms: 'Planes mensuales o anuales sin permanencia forzosa. Tu base de datos te pertenece 100%.',
    },
  },
  {
    id: 'whatsapp-ai',
    title: 'Agentes IA & WhatsApp CRM',
    category: 'ai',
    categoryLabel: 'Inteligencia Artificial',
    badgeLeft: 'AUTOMATIZACIÓN',
    badgeRight: 'ALTA DEMANDA',
    logoType: 'ai',
    description:
      'Automatizamos la atención, agendamiento y ventas de tu negocio conectando Inteligencia Artificial con tu línea de WhatsApp. Respuestas inmediatas, humanizadas y disponibles 24/7 sin contratar más personal.',
    features: [
      'Atención 24/7 con respuestas contextuales humanizadas',
      'Calificación automática de prospectos y captura de leads',
      'Integración con CRM, Odoo o Google Sheets',
      'Panel de métricas y supervisión de conversaciones en vivo',
    ],
    price: 'Desde 80.000 COP',
    billingPeriod: '/ mes',
    license: 'Integración Oficial & LLMs Privados',
    details: {
      overview:
        'Un asistente virtual inteligente entrenado específicamente con los datos, catálogo y preguntas frecuentes de tu empresa. Atiende consultas instantáneamente y transfiere a humanos cuando sea necesario.',
      whyNeeded:
        'Evita perder clientes potenciales que escriben fuera de horario laboral o que abandonan por demoras en la respuesta.',
      includedItems: [
        'Diseño del flujo conversacional y entrenamiento del modelo con tus manuales y catálogos',
        'Conexión segura con API de WhatsApp Cloud',
        'Derivación inteligente a asesores humanos ante casos complejos',
        'Monitoreo semanal del rendimiento y refinamiento de respuestas',
      ],
      technicalHighlights: [
        'Modelos: Claude / GPT-4o / Llama 3 optimizados',
        'Respuestas en menos de 2 segundos',
        'Cifrado de datos y privacidad de conversaciones garantizada',
      ],
      contractTerms: 'Suscripción mensual con ajustes continuos y soporte túcnico incluido.',
    },
  },
  {
    id: 'cloud-shield',
    title: 'Cloud Shield & Mantenimiento',
    category: 'cloud',
    categoryLabel: 'Infraestructura Cloud',
    badgeLeft: 'INFRAESTRUCTURA',
    badgeRight: 'ESENCIAL',
    logoType: 'cloud',
    description:
      'Garantiza que tu sitio web, tienda online o software empresarial está siempre en línea, seguro y cargando a máxima velocidad. Incluye monitoreo continuo, parches de seguridad y respaldos diarios.',
    features: [
      'Monitoreo 24/7 de caídas con alertas automáticas inmediatas',
      'Copias de seguridad diarias cifradas en almacenamiento externo',
      'Optimización de velocidad, base de datos y caché',
      'Soporte túcnico prioritario y restauración garantizada',
    ],
    price: 'Desde 45.000 COP',
    billingPeriod: '/ mes',
    license: 'SLA Garantizado 99.9%',
    details: {
      overview:
        'El seguro digital que todo negocio en internet necesita. Nos encargamos de la salud túcnica de tus servidores para que tú solo te concentres en vender y atender a tus clientes.',
      whyNeeded:
        'Un sitio caído o infectado genera pérdidas inmediatas de ventas y daña la reputación de tu marca. Con Cloud Shield prevenimos problemas antes de que ocurran.',
      includedItems: [
        'Monitoreo minuto a minuto de disponibilidad y tiempos de respuesta',
        'Backups automáticos con política de retención de 30 días',
        'Auditorías de seguridad periódicas y bloqueo de ataques DDoS',
        'Actualización de certificados SSL y librerías de servidor',
      ],
      technicalHighlights: [
        'Multi-región en AWS / DigitalOcean / Hetzner',
        'Alertas instantáneas vía Telegram / WhatsApp al equipo',
        'Restauración de desastres en menos de 1 hora',
      ],
      contractTerms: 'Pago mensual sin cláusulas de permanencia. Informes mensuales de rendimiento.',
    },
  },
  {
    id: 'custom-software',
    title: 'Plataformas Web & Software a Medida',
    category: 'custom',
    categoryLabel: 'Desarrollo a Medida',
    badgeLeft: 'PERSONALIZADO',
    badgeRight: 'EXCLUSIVO',
    logoType: 'custom',
    description:
      'Construimos aplicaciones web, portales de clientes y paneles administrativos diseñados a la medida de tus procesos. Código limpio, escalable y con arquitectura moderna preparada para el futuro.',
    features: [
      'Arquitectura moderna con React, TypeScript y Tailwind',
      'APIs REST / GraphQL rápidas y seguras',
      'Diseño responsivo optimizado para móviles y escritorio',
      'Propiedad 100% del código fuente entregado',
    ],
    price: 'Cotización a Medida',
    billingPeriod: '',
    license: 'Propiedad Total del Cliente',
    details: {
      overview:
        'Software diseñado exclusivamente para resolver los cuellos de botella de tu operación. Desde portales de cotizaciones hasta sistemas de gestión logística específicos.',
      whyNeeded:
        'Cuando las herramientas comerciales genéricas no se adaptan a la lógica de tu empresa y necesitas una ventaja competitiva única.',
      includedItems: [
        'Levantamiento de requerimientos y prototipado UI/UX interactivo',
        'Desarrollo modular frontend y backend con pruebas de calidad',
        'Despliegue en producción con CI/CD automatizado',
        'Garantía de soporte pos-entrega y documentación túcnica completa',
      ],
      technicalHighlights: [
        'Frontend: React 18, Next.js / Vite, Tailwind CSS',
        'Backend: Node.js, Python / Django, PostgreSQL',
        'Arquitectura en microservicios o monolito modular según escala',
      ],
      contractTerms: 'Hitos de pago por entregables aprobados y contrato con cesión total de propiedad intelectual.',
    },
  },
];
