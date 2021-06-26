import { Project } from 'types/projects'

export const projects: Project[] = [
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
    name: 'davimiku.github.io',
    tagline: 'This website! Static site generator powered by Next.js',
    technologies: ['Typescript', 'Next.js', 'MDX'],
    topics: ['static site generation', 'blog'],
    repo: {
      name: 'davimiku.github.io',
      path: 'davimiku/davimiku.github.io',
      url: 'https://github.com/davimiku/davimiku.github.io',
      description: 'My personal website',
    },
  },
  {
    name: 'YouReport',
    tagline: 'Mobile app for citizens to report issues to local government',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    topics: [
      'mobile app',
      'cloud storage',
      'cloud analytics',
      'material design',
    ],
    repo: {
      name: 'you_report',
      path: 'davimiku/you_report',
      url: 'https://github.com/davimiku/you_report',
      description:
        'Mobile app for citizens to report issues to local government',
    },
  },
]
