import { PropsWithChildren } from 'react'
import styles from './EmphasisBox.module.css'

export function EmphasisBox({ children }: PropsWithChildren<Record<string, unknown>>) {
  return <div className={styles.box}>{children}</div>
}
