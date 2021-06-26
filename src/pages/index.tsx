import Head from 'next/head'
import { CardGrid } from 'components/cards/card_grid'
import { ProjectSummaryCard } from 'components/cards/project/ProjectSummaryCard'
import { projects } from 'data'

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
        cards={projects.map((project) => (
          <ProjectSummaryCard key={project.repo.name} project={project} />
        ))}
      />

      <h2>Blog posts</h2>
      <CardGrid cards={[]} />
    </>
  )
}
