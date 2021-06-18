import Link from 'next/link'
import Headroom from 'react-headroom'
import { ThemeToggle } from '../../toggle/Toggle'
import styles from './Header.module.scss'

export function Header() {
  return (
    <Headroom>
      <nav className={styles.nav}>
        <Link href='/'>
          <a>
            <h1>davimiku</h1>
          </a>
        </Link>
        <ul className={styles['nav-links']}>
          <HeaderNavLink href='/blog' linkText='blog' />
          <HeaderNavLink href='/projects' linkText='projects' />
        </ul>
        <div className={styles['theme-container']}>
          <ThemeToggle />
        </div>
      </nav>
    </Headroom>
  )
}

export type HeaderNavLinkProps = {
  href: string
  linkText: string
}

export function HeaderNavLink({ href, linkText }: HeaderNavLinkProps) {
  return (
    <li>
      <Link href={href}>
        <a>{linkText}</a>
      </Link>
    </li>
  )
}
