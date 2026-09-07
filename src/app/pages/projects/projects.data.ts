import { Project } from '../../elements/project/project.model';

// Display order: recent research, capstone, then the older web projects.
export const PROJECTS: Project[] = [
  {
    name: "Master's Thesis: Microscopy Modality Translation",
    period: 'Feb 2026 – Aug 2026 · University of Groningen',
    description: `Investigated microscopy modality translation using conditional
      generative adversarial networks and related image-to-image methods. Adapted
      PyTorch pix2pix for high-bit-depth scientific imagery, adding 8-, 16-, and
      32-bit data pipelines, TIFF output, tiled inference, optional foreground-aware
      reconstruction loss, and distributed training.`,
    note: 'Most research materials remain private to support publication efforts. The pix2pix-uint16 implementation is publicly available.',
    tags: ['Python', 'PyTorch', 'Computer Vision', 'Deep Learning', 'HPC'],
    repository: 'https://github.com/stef-timmermans/pix2pix-uint16'
  },
  {
    name: 'Dependency Management Bot Adoption in Open-Source Projects',
    period: 'December 2025 – February 2026 · University of Groningen',
    description: `Built a reproducible empirical software engineering pipeline to
      study dependency-management bot adoption in open-source projects. Developed
      Python tooling to collect GitHub issues and comments, transform JSON into
      analysis-ready CSVs, and run statistical analyses. Added DVC dataset versioning
      and HPC support for long-running jobs.`,
    note: 'The resulting dataset was published separately on Zenodo.',
    tags: ['Python', 'Data Analysis', 'DVC', 'Slurm', 'Empirical Research'],
    repository: 'https://github.com/didupopa/ebse-assignment-2'
  },
  {
    name: "Bachelor's Capstone: Cuttlefish",
    period: 'September 2023 – June 2024 · Oregon State University',
    description: `Collaborated on the design and development of open-source,
      full-stack task management software supporting projects, sprints, tasks,
      and team workflows. Built with Angular and TypeScript on the frontend,
      an ASP.NET Core backend, and a SQL database.`,
    tags: ['Angular', 'TypeScript', 'C#', 'ASP.NET Core', 'SQL'],
    repository: 'https://github.com/NathanJesudason/Cuttlefish',
    image: 'assets/cuttlefish.png'
  },
  {
    name: 'Database Banking Project',
    description: `A banking database application with create, read, update, and delete
      operations for sample banking data. SQL triggers update balances as transactions
      are recorded, while joined views and cascading behavior keep related records connected.`,
    tags: ['JavaScript', 'Handlebars', 'SQL'],
    repository: 'https://github.com/OvercastSolutions/banking-database-project',
    image: 'assets/banking-database-project.png'
  },
  {
    name: 'Portfolio Website',
    description: `My personal portfolio, built with Angular and TypeScript and hosted
      on GitHub Pages. It includes responsive navigation, reusable project cards, and
      a light/dark theme preference that persists between visits.`,
    note: 'The preview shows an earlier version of the site.',
    tags: ['Angular', 'TypeScript', 'GitHub Pages'],
    repository: 'https://github.com/stef-timmermans/stef-timmermans.github.io',
    image: 'assets/home-page.png'
  }
];
