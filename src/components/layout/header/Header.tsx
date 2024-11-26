import Link from 'next/link'
import styles from './Header.module.scss'
import { ColorSchemeToggle } from 'components/color_scheme_toggle/ColorSchemeToggle'

export function Header() {
  return (
    <nav className={styles['nav']}>
      <span>davimiku -- David's Blog</span>
      <ul className={styles['links']}>
        <HeaderNavLink href='/' linkText='home' />
        <HeaderNavLink href='/projects' linkText='projects' />
        <HeaderNavLink href='/articles' linkText='articles' />
      </ul>
      <ColorSchemeToggle />
    </nav>
  )
}

export type HeaderNavLinkProps = {
  href: string
  linkText: string
}

export function HeaderNavLink({ href, linkText }: HeaderNavLinkProps) {
  return (
    <li>
      <Link href={href}>{linkText}</Link>
    </li>
  )
}
