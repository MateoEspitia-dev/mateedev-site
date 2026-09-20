export interface ProposalItem {
  id: string;
  title: string;
  category: 'all' | 'erp' | 'ai' | 'cloud' | 'custom' | 'ecommerce' | string;
  categoryLabel: string;
  badgeLeft?: string;
  badgeRight?: string;
  logoType: 'odoo' | 'ai' | 'cloud' | 'custom' | 'minestock' | 'tallerflow' | 'shopify' | 'wordpress' | 'landing' | string;
  image?: string;
  demoUrl?: string;
  demoPassword?: string;
  demoNote?: string;
  description: string;
  features: string[];
  price: string;
  billingPeriod: string;
  license: string;
  details: {
    overview: string;
    whyNeeded: string;
    includedItems: string[];
    technicalHighlights: string[];
    contractTerms: string;
  };
}