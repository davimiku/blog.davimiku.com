import { PropsWithChildren } from 'react'
import { useColorSchemeClass } from 'hooks/useColorScheme'
import styles from './Card.module.scss'

export function Card({ children }: PropsWithChildren<{}>) {
  const cardClass = useColorSchemeClass(styles, 'card')
  return <div className={cardClass}>{children}</div>
}
