/** Approved Task08 production copy, separate from Home's concise introduction. */
export const capabilitiesPage = {
  heading: 'From idea to working product.',
  introduction: 'ASL brings design, development and technology together to create websites and digital products from the first idea through to launch and beyond.',
  connectionHeading: 'One build, connected from end to end.',
  connection: 'Design decisions affect the build. Development decisions affect launch. Deployment affects how the product performs after it reaches people. Keeping those parts connected lets ASL carry an idea through without losing the thinking that shaped it.',
  bridgeHeading: 'See the thinking in practice.',
  bridge: 'Explore websites and digital experiences shaped across design, development and deployment.',
  ctaHeading: 'Have something to build?',
  cta: 'Tell us where you are, what you need and what you want the finished experience to do.',
} as const;
export const capabilityServices = [
  {name: 'Design', anchor: 'lattice', material: 'Folded membrane', statement: 'Shaping the experience before we build it.', description: 'We turn ideas into clear, distinctive digital experiences — defining structure, interaction, visual direction and the systems that hold everything together.', services: ['UX and information architecture', 'Interface design', 'Responsive web design', 'Interaction and motion design', 'Design systems', 'Prototyping', 'Creative direction', '3D and WebGL experiences where the project benefits from them']},
  {name: 'Development', anchor: 'strata', material: 'Interlocking curved layers', statement: 'Turning the experience into working software.', description: 'We build responsive, production-ready websites and digital experiences with an emphasis on performance, maintainability and the details users actually feel.', services: ['Frontend engineering', 'React and Next.js development', 'Component systems', 'CMS integration', 'API and third-party integrations', 'E-commerce implementation', 'Accessibility', 'Performance optimisation', 'Technical architecture']},
  {name: 'Deployment', anchor: 'stream', material: 'Broad flowing ribbons', statement: 'Taking the build into production properly.', description: 'We handle the technical path from finished build to live product — including hosting, domains, deployment configuration and the systems needed to keep it dependable.', services: ['Hosting and deployment', 'Vercel and cloud deployment', 'Domain and DNS configuration', 'SSL and production configuration', 'CI/CD', 'Analytics setup', 'Technical SEO foundations', 'Performance monitoring', 'Maintenance and support']},
  {name: 'Digital Products', anchor: 'cluster', material: 'Open sculptural shell', statement: 'When the idea needs more than a website.', description: 'We apply the same design-and-engineering approach to web applications, product interfaces, prototypes and tools that need to work as well as they look.', services: ['Product discovery', 'MVPs', 'Web applications', 'Dashboards and portals', 'Interactive prototypes', 'SaaS interfaces', 'Internal tools']},
] as const;
