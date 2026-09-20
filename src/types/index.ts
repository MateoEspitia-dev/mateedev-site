export interface ProposalItem {
  id: string;
  title: string;
  category: 'all' | 'erp' | 'ai' | 'cloud' | 'custom';
  categoryLabel: string;
  badgeLeft?: string;
  badgeRight?: string;
  logoType: 'odoo' | 'ai' | 'cloud' | 'custom';
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
