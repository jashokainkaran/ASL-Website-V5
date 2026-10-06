/** Only publication-approved work with documented provenance belongs in this registry. */
export type ProjectMedia = {src: string; alt: string; width: number; height: number; video?: string};
export type Project = {
  slug: string;
  title: string;
  type: 'Client project' | 'ASL Concept';
  status?: 'Live' | 'In development';
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
// Previous three records were fictional layout placeholders. No verified work was supplied.
export const projects: readonly Project[] = [];
export const publishedProjects = projects.filter(project => project.publicationApproved && project.provenance.trim());
export const projectsCopy = {
  eyebrow: 'Selected work',
  heading: 'Projects shaped from idea to experience.',
  introduction: 'A selection of websites, digital experiences and product work created through design, engineering and technology.',
  emptyHeading: 'Selected work is being prepared for publication.',
  emptyBody: "We are documenting current projects properly rather than publishing work without the context behind it. In the meantime, explore what we do or tell us what you're looking to build.",
  conceptsHeading: 'ASL Concepts',
  conceptsBody: 'Experiments and self-initiated work used to explore new interactions, interfaces and digital ideas.',
  ctaHeading: 'Have something in mind?',
  ctaBody: "Tell us what you're building, where you are in the process and what you need help with.",
} as const;
