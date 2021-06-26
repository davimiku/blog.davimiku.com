export type Project = {
  /** Name of the project */
  name: string

  /** Short, catchy description of the project */
  tagline: string

  /** URL to an image for the project */
  imageUrl?: string

  /** Technologies / languages / frameworks / tools used in this project */
  technologies: string[]

  /** Topics utilized or learned in this project */
  topics: string[]

  /** Repository for the project source code */
  repo: ProjectRepo
}

export type ProjectRepo = {
  /** Repository name */
  name: string

  /** URL path of the repository including the individual/group owner */
  path: string

  /** Full HTTPS URL of the repository */
  url: string

  /** Description of the repository */
  description: string
}
