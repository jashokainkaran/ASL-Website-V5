/** Only publication-approved work with documented provenance belongs in this registry. */
export type ProjectMedia = {src: string; alt: string; width: number; height: number; video?: string};
export type Project = {
  slug: string;
  title: string;
  type: 'Client project' | 'ASL Concept';
  status?: 'Live' | 'In development';
  category?: 'Hospitality' | 'Automotive' | 'Beauty' | 'Food & Beverage';
  shortDescription: string;
  disciplines: readonly string[];
  year?: number;
  cover: ProjectMedia;
  gallery?: readonly ProjectMedia[];
  externalUrl?: string;
  caseStudyPath?: string;
  featured?: boolean;
  publicationApproved: boolean;
  provenance: string;
};
/** User supplied live showcases; names verified against their primary visible branding. */
const concept = (slug: string, title: string, category: Project['category'], shortDescription: string, externalUrl: string, alt: string, featured = false): Project => ({
  slug, title, category, shortDescription, externalUrl, featured,
  type: 'ASL Concept', status: 'Live', disciplines: ['Design', 'Development', 'Deployment'],
  cover: {src: `/project-media/${slug}.webp`, alt, width: 1250, height: 700},
  publicationApproved: true, provenance: 'ASL showcase explicitly supplied for publication in Task08; primary brand, title and landing page inspected on 2026-10-06. No commissioned-client claim.',
});
export const projects: readonly Project[] = [
  concept('ember', 'ÉMBER', 'Hospitality', 'Specialty café website', 'https://ember-cafe-zeta.vercel.app/', 'ÉMBER café landing page with a latte photograph and Crafted Differently headline', true),
  concept('nova', 'Nova Motor House', 'Automotive', 'Automotive showroom website', 'https://nova-motor-house-showroom.vercel.app/', 'Nova Motor House landing page with vehicles in a dark architectural showroom'),
  concept('salon', 'Salon', 'Beauty', 'Salon website', 'https://salon-omega-ashy.vercel.app/', 'Salon landing page with red Bold Beauty typography and salon photography on a light surface'),
  concept('cafe-02', 'Demo 2', 'Hospitality', 'Café website', 'https://cafe-demo-2.netlify.app', 'Demo 2 café landing page with a dark coffee backdrop and Where Every Sip Tells a Story headline'),
  concept('atelier-noir', 'Atelier Noir', 'Beauty', "Men’s grooming website", 'https://atelier-noir-salon.vercel.app/', 'Atelier Noir landing page with Precision in Motion typography over a dark grooming studio'),
  concept('burger-join', 'Burger Join', 'Food & Beverage', 'Food & beverage website', 'https://burger-join.vercel.app/#menu', 'Burger Join landing page with a large burger photograph and orange Burn typography'),
  concept('cafe-01', 'Demo 1', 'Hospitality', 'Café website', 'https://cafe-demo-1.netlify.app', 'Demo 1 café landing page with a cream surface, dark serif headline and coffee imagery'),
];
export const publishedProjects = projects.filter(project => project.publicationApproved && project.provenance.trim());
export const projectsCopy = {
  eyebrow: 'Selected work',
  heading: 'Projects shaped from idea to experience.',
  introduction: 'A selection of websites and digital experiences shaped through design, development and technology.',
  emptyHeading: 'Selected work is being prepared for publication.',
  emptyBody: "We are documenting current projects properly rather than publishing work without the context behind it. In the meantime, explore what we do or tell us what you're looking to build.",
  conceptsHeading: 'ASL Concepts',
  conceptsBody: 'Experiments and self-initiated work used to explore new interactions, interfaces and digital ideas.',
  ctaHeading: 'Have something in mind?',
  ctaBody: "Tell us what you're building, where you are in the process and what you need help with.",
} as const;
