export const projects = [1,2,3].map(id => ({ id, slug: `project-${id}`, name: 'Project Name', sector: 'Sector', outcome: 'Outcome', isPlaceholder: true as const }));
