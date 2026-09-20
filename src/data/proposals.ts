import { ProposalItem } from '../types';

export const PROPOSALS_DATA: ProposalItem[] = [
  // 1. Shopify E-Commerce (Primero)
  {
    id: 'shopify-ecommerce',
    title: 'Shopify E-Commerce',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Retail',
    badgeLeft: 'TIENDA ONLINE',
    badgeRight: 'DEMO ACTIVA',
    logoType: 'shopify',
    image: '/ShopifyStore.png',
    demoUrl: 'https://tienda.mateedev.com',
    demoPassword: 'mateedev',
    demoNote: 'Cuenta de desarrollo activa. Ingresa con la clave: mateedev',
    description:
      'Diseño, configuración y lanzamiento de tiendas virtuales de alto rendimiento en Shopify. Integración con pasarelas de pago colombianas (Wompi, Bold, PayU), checkout optimizado y sincronización de inventario.',
    features: [
      'Pasarelas de pago colombianas (Wompi, Bold, PayU, PSE, Tarjetas)',
      'Checkout ultrarrápido y diseño móvil enfocado en conversión (CRO)',
      'Sincronización de catálogo, colecciones y variaciones de stock',
      'Integración con transportadoras y cálculo de envíos en Colombia',
    ],
    price: 'Desde 80.000 COP',
    billingPeriod: '/ mes soporte',
    license: 'Shopify Partner / Propiedad Total del Cliente',
    details: {
      overview:
        'Creamos y optimizamos tiendas virtuales profesionales sobre Shopify, el líder mundial en comercio electrónico. Nos encargamos de toda la parte técnica: desde la arquitectura del catálogo y la configuración de pasarelas de pago colombianas, hasta la automatización de pedidos y cálculo de envíos.',
      whyNeeded:
        'Vender por redes sociales sin una tienda automatizada satura tus canales de atención y hace perder ventas nocturnas. Con Shopify tu negocio cobra y despacha las 24 horas del día sin caídas en temporadas de alta demanda.',
      includedItems: [
        'Configuración completa de la tienda en cuenta de desarrollo Shopify',
        'Integración de pasarelas de pago colombianas (Wompi, Bold, Mercado Pago, PayU)',
        'Carga inicial del catálogo de productos, descripciones comerciales y fotografías',
        'Configuración de tarifas de flete y transportadoras nacionales',
        'Acceso directo a tienda demo de prueba con clave antes del lanzamiento público',
      ],
      technicalHighlights: [
        'Plataforma: Shopify Online Store 2.0 / Liquid',
        'Pasarelas: Wompi, Bold, PayU, PSE, Tarjetas de Crédito',
        'Seguridad: Certificado SSL bancario Nivel 1 PCI DSS incluido',
      ],
      contractTerms:
        'Desarrollo llave en mano con entrega de propiedad total al cliente o planes mensuales de mantenimiento, soporte y optimización de conversiones.',
    },
  },

  // 2. TallerFlow (Segundo)
  {
    id: 'tallerflow',
    title: 'TallerFlow',
    category: 'custom',
    categoryLabel: 'Textil & Confección B2B',
    badgeLeft: 'INDUSTRIA TEXTIL',
    badgeRight: 'PRODUCCIÓN INTELIGENTE',
    logoType: 'tallerflow',
    image: '/TallerFlow.png',
    demoUrl: 'https://tallerflow.mateedev.com',
    description:
      'Plataforma integral de costeo, fichas técnicas y control de producción para talleres de confección y marcas de moda. Centraliza curvas de tallas, explosión de insumos (BOM) y seguimiento por lotes.',
    features: [
      'Costeo de prendas en tiempo real y comparador financiero',
      'Explosión de insumos (BOM), curva de tallas y maniquí digital',
      'Seguimiento de lotes por paquete (Bundle Tracking) y Gantt',
      'Paneles con cambio de rol: diseñador, patronista y costureras',
    ],
    price: 'Propuesta a Medida',
    billingPeriod: '',
    license: 'SaaS / Desarrollo Llave en Mano',
    details: {
      overview:
        'TallerFlow transforma la gestión de talleres y fábricas de confección textil. Reemplaza las hojas de cálculo dispersas con un sistema unificado que calcula el costo exacto por minuto, insumo y prenda, garantizando la rentabilidad de cada pedido antes y durante la producción.',
      whyNeeded:
        'En confección, un error en el cálculo de tela o en los minutos de ensamble destruye el margen de utilidad. TallerFlow da visibilidad exacta de costos, tiempos y avance de cada paquete de prendas.',
      includedItems: [
        'Editor de curva de tallas y matriz de explosión de insumos (BOM)',
        'Visualizador con maniquí digital y vestier para especificaciones de diseño',
        'Comparador de cotizaciones para clientes con cálculo de margen bruto y neto',
        'Módulo de seguimiento de lotes (Bundle Tracking) para piso de confección',
        'Cronograma de entregas Gantt y reportes ejecutivos de producción',
      ],
      technicalHighlights: [
        'Stack: React 18, Vite, Tailwind CSS, State Management optimizado',
        'Módulos exportables a PDF / Excel para clientes y proveedores de insumos',
        'Diseño responsivo para tablets en taller y computadores en oficina',
      ],
      contractTerms: 'Modelo de membresía mensual o desarrollo a medida con adaptación a los procesos particulares del taller.',
    },
  },

  // 3. MinaStock (Tercero)
  {
    id: 'minestock',
    title: 'MinaStock',
    category: 'custom',
    categoryLabel: 'Minería & Maquinaria Pesada',
    badgeLeft: 'OPERACIÓN MINERA',
    badgeRight: 'ALTO IMPACTO',
    logoType: 'minestock',
    image: '/MinaStock.png',
    demoUrl: 'https://minestock.mateedev.com',
    description:
      'Control de repuestos críticos y combustible (ACPM) en tiempo real para maquinaria pesada. Diseñado para que mecánicos y operadores en campo reporten salidas por voz o con un toque, sin papeles ni pérdidas.',
    features: [
      'Registro por voz para mecánicos (manos con grasa y guantes)',
      'Monitoreo central de galones de ACPM y consumo por máquina',
      'Botón de cotización automática a proveedores vía WhatsApp',
      'Alertas de reposición antes de que una máquina quede botada',
    ],
    price: 'Propuesta a Medida',
    billingPeriod: '',
    license: 'Desarrollo Llave en Mano / Licencia Exclusiva',
    details: {
      overview:
        'MinaStock resuelve los dos problemas más costosos en la operación minera: máquinas pesadas (excavadoras, tractores CAT, Iveco) paradas por falta de repuestos que nadie avisó a tiempo y las pérdidas o mermas nocturnas de combustible (ACPM). Permite a la gerencia auditar inventarios desde la oficina mientras el personal de campo registra salidas en 2 segundos por voz.',
      whyNeeded:
        'En minería, una máquina parada cuesta millones por hora y los fletes de repuestos tardan entre 24 y 48 horas desde las capitales. MinaStock anticipa la reposición automática y asegura que cada galón de combustible quede registrado.',
      includedItems: [
        'Módulo móvil para campo con reconocimiento de voz ("Salida de 1 medidor para D7H")',
        'Tablero de control en tiempo real para gerencia y almacén central',
        'Módulo de control de tanque central de combustible y galones por máquina',
        'Directorio logístico de repuesteros habituales con cotización por WhatsApp',
        'Modo offline garantizado para zonas remotas o sin cobertura en cerro',
      ],
      technicalHighlights: [
        'Arquitectura PWA ligera optimizada para conectividad intermitente',
        'Base de datos sincronizada y panel web centralizado',
        'Integración directa con WhatsApp Web / API de mensajería',
      ],
      contractTerms: 'Implementación adaptada a la flota de maquinaria de la mina, capacitación al personal y soporte técnico continuo.',
    },
  },

  // 4. Landing Pages de Alta Conversión (Cuarto - Reemplaza WordPress)
  {
    id: 'landing-pages',
    title: 'Landing Pages de Alta Conversión',
    category: 'custom',
    categoryLabel: 'Diseño Web & Conversión (CRO)',
    badgeLeft: 'ALTA CONVERSIÓN',
    badgeRight: 'VENTAS & LEADS',
    logoType: 'landing',
    description:
      'Páginas de aterrizaje ultrarrápidas y persuasivas orientadas a captar clientes potenciales, validar ofertas y maximizar el retorno de inversión en tus campañas de Meta, Google y TikTok Ads.',
    features: [
      'Velocidad de carga instantánea (<1 segundo en móviles) con React y Tailwind',
      'Estructura persuasiva de ventas basada en copywriting y psicología de compra',
      'Integración directa con WhatsApp, formularios y CRM (Google Sheets, Notion)',
      'Configuración de píxeles y eventos de conversión (Meta Pixel, TikTok, GA4)',
    ],
    price: 'Desde 350.000 COP',
    billingPeriod: 'pago único',
    license: 'Propiedad 100% del Cliente',
    details: {
      overview:
        'Una landing page es la herramienta digital más efectiva para transformar visitantes en compradores. A diferencia de un sitio web corporativo tradicional lleno de menús distractores, una landing page enfoca la atención en un único objetivo: que el cliente compre o te contacte de inmediato.',
      whyNeeded:
        'Llevar tráfico pagado a un sitio web lento o confuso desperdicia tu presupuesto publicitario. Con una landing page optimizada reduces drásticamente el costo por adquisición (CAC) y multiplicas tus consultas.',
      includedItems: [
        'Diseño UX/UI exclusivo adaptado a la identidad y colores de tu marca',
        'Redacción persuasiva (copywriting enfocado en beneficios y llamados a la acción)',
        'Despliegue en servidor cloud de alta velocidad con dominio propio y certificado SSL',
        'Configuración de medición de eventos (Pixel de Meta, Google Analytics 4)',
        'Garantía de rendimiento mobile-first con puntuación superior a 95 en Google PageSpeed',
      ],
      technicalHighlights: [
        'Stack: React 18 / Vite / Astro, Tailwind CSS ultraligero',
        'Puntuación Lighthouse: 95+ en móviles y escritorio',
        'Cero dependencias pesadas para garantizar apertura instantánea',
      ],
      contractTerms: 'Entrega rápida en 3 a 5 días hábiles, soporte pos-lanzamiento y cesión total del código fuente.',
    },
  },

  // 5. Odoo ERP
  {
    id: 'odoo-erp',
    title: 'Odoo ERP',
    category: 'erp',
    categoryLabel: 'Software Libre',
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
        'Soporte técnico 24/7 para estabilidad del servidor',
      ],
      technicalHighlights: [
        'Versión: Odoo 17/18 Community Edition',
        'Stack: Python, PostgreSQL, Nginx Reverse Proxy',
        'Infraestructura: VPS Cloud SSD de alto rendimiento',
      ],
      contractTerms: 'Planes mensuales o anuales sin permanencia forzosa. Tu base de datos te pertenece 100%.',
    },
  },

  // 6. Agentes IA & WhatsApp CRM
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
      contractTerms: 'Suscripción mensual con ajustes continuos y soporte técnico incluido.',
    },
  },

  // 7. Cloud Shield & Mantenimiento
  {
    id: 'cloud-shield',
    title: 'Cloud Shield & Mantenimiento',
    category: 'cloud',
    categoryLabel: 'Infraestructura Cloud',
    badgeLeft: 'INFRAESTRUCTURA',
    badgeRight: 'ESENCIAL',
    logoType: 'cloud',
    description:
      'Garantiza que tu sitio web, tienda online o software empresarial esté siempre en línea, seguro y cargando a máxima velocidad. Incluye monitoreo continuo, parches de seguridad y respaldos diarios.',
    features: [
      'Monitoreo 24/7 de caídas con alertas automáticas inmediatas',
      'Copias de seguridad diarias cifradas en almacenamiento externo',
      'Optimización de velocidad, base de datos y caché',
      'Soporte técnico prioritario y restauración garantizada',
    ],
    price: 'Desde 45.000 COP',
    billingPeriod: '/ mes',
    license: 'SLA Garantizado 99.9%',
    details: {
      overview:
        'El seguro digital que todo negocio en internet necesita. Nos encargamos de la salud técnica de tus servidores para que tú solo te concentres en vender y atender a tus clientes.',
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

  // 8. Plataformas Web & Software a Medida
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
        'Garantía de soporte pos-entrega y documentación técnica completa',
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