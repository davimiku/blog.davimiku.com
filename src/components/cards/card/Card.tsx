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

export type CardHeaderProps = Record<string, unknown>

Card.Header = function ({ children }: PropsWithChildren<CardHeaderProps>) {
  return <header className={styles['card-header']}>{children}</header>
}

export type CardTitleProps = {
  title: string
  href?: string
}

Card.Title = function ({ title, href }: CardTitleProps) {
  const className = styles['card-title']
  const inner = href ? (
    <Link href={href}>
      <a className={className}>{title}</a>
    </Link>
  ) : (
    <span className={className}>{title}</span>
  )
  return <h2>{inner}</h2>
}

export type CardBodyProps = Record<string, unknown>

Card.Body = function ({ children }: PropsWithChildren<CardBodyProps>) {
  return <section className={styles['card-body']}>{children}</section>
}

export type CardFooterProps = Record<string, unknown>

Card.Footer = function ({ children }: PropsWithChildren<CardFooterProps>) {
  const className = useColorSchemeClass(styles, 'card-footer')
  return <footer className={className}>{children}</footer>
}
