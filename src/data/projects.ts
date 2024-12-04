import { Project } from 'types/projects'

export const projects: Project[] = [
  {
    name: 'blog.davimiku.com',
    tagline: 'A static website for writing blog articles and tutorials',
    technologies: ['TypeScript', 'Next.js', 'React', 'SCSS'],
    topics: ['static site generation', 'fluid design', 'blog'],
    repo: {
      name: 'blog.davimiku.com',
      path: 'davimiku/blog.davimiku.com',
      url: 'https://github.com/davimiku/blog.davimiku.com',
      description: 'My personal website',
    },
  },
  {
    name: 'Unnamed programming language',
    tagline:
      'My own programming language: a statically-typed, applications level language that JIT compiles to machine code.',
    description:
      'Status: Programs with simple values and functions work, currently working on adding tagged unions.',
    technologies: ['Rust'],
    topics: ['language design', 'compilers'],
    repo: {
      name: 'unknown-lang',
      path: 'davimiku/unknown-lang',
      url: 'https://github.com/davimiku/unknown-lang',
      description: 'A new programming language, compiler, and language server',
    },
  },
  {
    name: 'AudNauseum',
    tagline: 'Loop-based digital recorder & sampler (audio looper)',
    technologies: ['Python', 'PyQt', 'numpy'],
    topics: ['audio processing', 'gui', 'state machine'],
    imageUrl: '/images/projects/audnauseum.png',
    repo: {
      name: 'AudNauseum',
      path: 'AudNauseum/AudNauseum',
      url: 'https://github.com/AudNauseum/AudNauseum',
      description: 'Software emulated loop-based digital recorder/sampler',
    },
  },
  {
    name: 'JSONata',
    tagline: 'Implementation of JSON Query and Transformation language',
    description: 'Status: Project is on hold while on work on my own programming language',
    technologies: ['Rust'],
    topics: ['interpreters', 'JSON', 'parser', 'functional programming'],
    repo: {
      name: 'jsonata-rs',
      path: 'davimiku/jsonata-rs',
      url: 'https://github.com/davimiku/jsonata-rs',
      description: 'Implementation of JSONata query language in Rust ',
    },
  },
]
