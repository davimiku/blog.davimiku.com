import Head from 'next/head'
import { CardGrid } from 'components/cards/card_grid'
import { ProjectCard } from 'components/cards/project/ProjectCard'
import { sampleData } from './sample_data'

/**
 * Portfolio site - Typescript
 * JSONata        - Rust
 * json_parser    - Rust
 *
 * AudNauseum     - Python
 * Wasteagram     - Dart
 *
 */

/**
 * Component for the "home" page server at path '/'
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>David's Portfolio Site</title>
        <link rel='icon' href='/favicon.ico' />
        <script
          src='https://kit.fontawesome.com/bb2856d2ce.js'
          crossOrigin='anonymous'
        ></script>
      </Head>
      <h1>David's Portfolio</h1>

      <h2>Projects</h2>
      <CardGrid
        cards={sampleData.map(({ repo, projectInfo }) => (
          <ProjectCard key={repo.id} repo={repo} projectInfo={projectInfo} />
        ))}
      />

      <h2>Blog posts</h2>
      <CardGrid cards={[]} />
    </>
  )
}
