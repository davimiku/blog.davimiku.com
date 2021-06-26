import { HTMLAttributes, PropsWithChildren } from 'react'
import { useColorSchemeClass } from 'hooks/useColorScheme'
import styles from './Card.module.scss'
import Link from 'next/link'

export function Card({
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  const cardClass = useColorSchemeClass(styles, 'card')
  return (
    <article className={cardClass} {...rest}>
      {children}
    </article>
  )
}

Card.Header = function ({ children }: PropsWithChildren<{}>) {
  return <header className={styles['card-header']}>{children}</header>
}

export type CardTitleProps = {
  title: string
  href?: string
}

Card.Title = function ({ title, href }: CardTitleProps) {
  const inner = href ? (
    <Link href={href}>
      <a>{title}</a>
    </Link>
  ) : (
    title
  )
  return <h2>{inner}</h2>
}

Card.Body = function ({ children }: PropsWithChildren<{}>) {
  return <section className={styles['card-body']}>{children}</section>
}

Card.Footer = function ({ children }: PropsWithChildren<{}>) {
  const className = useColorSchemeClass(styles, 'card-footer')
  return <footer className={className}>{children}</footer>
}
