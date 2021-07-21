import { Project } from 'types/projects'

// NOTE: Typescript aliases for path imports do not work on the paths below
// because these are not Typescript imports! Relative path directly to the file
// is needed.
import { frontMatter as jsonParserRust } from '../pages/blog/json-parser-rust.mdx'

export const projects: Project[] = [
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
    technologies: ['Typescript', 'SCSS'],
    topics: ['static site generation', 'blog'],
    repo: {
      name: 'davimiku.github.io',
      path: 'davimiku/davimiku.github.io',
      url: 'https://github.com/davimiku/davimiku.github.io',
      description: 'My personal website',
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

export const blogs = [jsonParserRust]
