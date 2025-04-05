import { PropsWithChildren } from 'react'
import styles from './Spoiler.module.css'

export type SpoilerProps = {
  summary: string
}

export function Spoiler({ summary, children }: PropsWithChildren<SpoilerProps>) {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>{summary}</summary>
      <div className={styles.detailsContent}>{children}</div>
    </details>
  )
}
