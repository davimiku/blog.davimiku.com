import React from 'react'
import { GitHubRepository } from 'components/cards/project/ProjectCard'

export type UseGitHubRepoArgs = {
  username?: string
  repoName: string
}

export function useGitHubRepo({
  username = 'davimiku',
  repoName,
}: UseGitHubRepoArgs) {
  const [repo, setRepo] = React.useState<GitHubRepository>(null)

  React.useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repoName}`)
      .then((response) => response.json())
      .then((data) => setRepo(data))
  })

  return repo
}
