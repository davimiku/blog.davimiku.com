import { PropsWithChildren } from 'react'
import { useColorSchemeClass } from 'hooks/useColorScheme'
import styles from './Card.module.scss'

export function Card({ children }: PropsWithChildren<{}>) {
  const cardClass = useColorSchemeClass(styles, 'card')
  return <article className={cardClass}>{children}</article>
}

export type CardTitleProps = {
  title: string
}

Card.Header = function ({ children }: PropsWithChildren<{}>) {
  return <header className={styles['card-header']}>{children}</header>
}

Card.Title = function ({ title }: CardTitleProps) {
  return <h2>{title}</h2>
}

Card.Body = function ({ children }: PropsWithChildren<{}>) {
  return <section className={styles['card-body']}>{children}</section>
}

Card.Footer = function ({ children }: PropsWithChildren<{}>) {
  const className = useColorSchemeClass(styles, 'card-footer')
  return <footer className={className}>{children}</footer>
}
