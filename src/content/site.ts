export const bookingUrl = '/contact';
export const site = {
 skipLabel:'Skip to introduction', specialism:'Design / Development / Deployment', headlineFirst:'Digital matter,', headlineLast:'given form.', openingLine:'ONE MATERIAL. INFINITE POSSIBILITY.', scrollLabel:'SCROLL TO SHAPE',
 capabilityLabel:'01 — Capabilities', capabilityLink:'Explore capability', materialLabel:'Mutable matter /', beats:['Shaped','Built','Released','Alive'],
 statementLabel:'02 — A considered approach', proofLabel:'Selected work / Placeholder entries for layout review', finalLabel:'03 — Your next chapter',
 emailLabel:'Contact email — placeholder', footerLine:'Considered. Built. Released.', provisionalLabel:'ASL / Technology, considered',
 name: 'ASL', label: 'ASL / DIGITAL STUDIO', isPlaceholder: true,
 headline: 'Digital matter, given form.',
 description: 'ASL designs, builds and deploys websites and digital products for founders and teams who value clear thinking and lasting craft.',
 primary: 'Book a Call', secondary: 'Explore Our Work',
 statement: 'Most websites are assembled. Ours are shaped.',
 closing: "Let’s build something that holds its shape.",
 email: 'hello@example.com', emailIsPlaceholder: true,
 provisionalLogo: false,
} as const;
export const pages: Record<string, { title: string; description: string; isPlaceholder: true }> = {
 home: {title: 'Digital matter, given form.', description: 'A new expression of ASL is taking shape.', isPlaceholder: true},
 work: {title: 'Selected work.', description: 'Project stories are being prepared. This space will feature the thinking, craft and detail behind our work.', isPlaceholder: true},
 capabilities: {title: 'From idea to experience.', description: 'Design. Development. Deployment. Digital products. One considered approach.', isPlaceholder: true},
 about: {title: 'Built on intention.', description: 'ASL is a technology company for founders and teams who care about how things are made.', isPlaceholder: true},
 contact: {title: 'Let’s give it form.', description: 'Booking is not connected yet. Contact details will be published here when confirmed.', isPlaceholder: true},
 lab: {title: 'Mutable Matter.', description: 'The ASL particle laboratory.', isPlaceholder: true},
 project: {title: 'Project Name.', description: 'Placeholder project. Case study content will be added after approval.', isPlaceholder: true},
};
