import { Project } from 'types/projects'

export const projects: Project[] = [
  {
    name: 'davimiku.github.io',
    tagline: 'Static site generated with Next.js and React',
    description:
      'Responsive design implemented without "breakpoints" (width-based media queries) as a personal challenge.',
    technologies: ['TypeScript', 'Next.js', 'React', 'SCSS'],
    topics: ['static site generation', 'fluid design', 'blog'],
    repo: {
      name: 'davimiku.github.io',
      path: 'davimiku/davimiku.github.io',
      url: 'https://github.com/davimiku/davimiku.github.io',
      description: 'My personal website',
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
    technologies: ['Rust'],
    topics: ['interpreters', 'JSON', 'parser', 'functional programming'],
    repo: {
      name: 'jsonata-rs',
      path: 'davimiku/jsonata-rs',
      url: 'https://github.com/davimiku/jsonata-rs',
      description: 'Implementation of JSONata query language in Rust ',
    },
  },
  {
    name: 'JSON Parser',
    tagline: 'Parser for JSON using iterative and combinator strategies',
    technologies: ['Rust'],
    topics: ['parsers', 'combinator parsers', 'json'],
    repo: {
      name: 'json_parser',
      path: 'davimiku/json_parser',
      url: 'https://github.com/davimiku/json_parser',
      description: 'Implementation of a parser for JSON data',
    },
  },
]
