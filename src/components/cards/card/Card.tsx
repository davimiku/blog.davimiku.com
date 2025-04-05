import Link from 'next/link'
import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import styles from './Card.module.css'

export function Card({ children, ...rest }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={styles['card']} {...rest}>
      {children}
    </div>
  )
}

export type CardHeaderProps = {
  children: ReactNode
}

Card.Header = function ({ children }: CardHeaderProps) {
  return <header className={styles['card-header']}>{children}</header>
}

export type CardTitleProps = {
  title: string
  href?: string
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

Card.Title = function ({ title, href, headingLevel = 'h3' }: CardTitleProps) {
  const className = styles['card-title']
  const inner = href ? (
    <Link href={href} className={className}>
      {title}
    </Link>
  ) : (
    <span className={className}>{title}</span>
  )
  const Heading = headingLevel
  return <Heading>{inner}</Heading>
}

export type CardBodyProps = {
  children: ReactNode
}

Card.Body = function ({ children }: CardBodyProps) {
  return <div className={styles['card-body']}>{children}</div>
}

export type CardFooterProps = {
  children: ReactNode
}

Card.Footer = function ({ children }: CardFooterProps) {
  return <footer className={styles['card-footer']}>{children}</footer>
}
