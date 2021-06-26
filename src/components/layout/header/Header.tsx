import Link from 'next/link'
import { useRouter } from 'next/router'
import Headroom from 'react-headroom'
import { ThemeToggle } from '../../toggle/Toggle'
import styles from './Header.module.scss'

export function Header() {
  return (
    <Headroom>
      <nav className={styles['nav']}>
        <Link href='/'>
          <a>
            <h1>davimiku</h1>
          </a>
        </Link>
        <ul className={styles['nav-links']}>
          <HeaderNavLink href='/' linkText='home' />
          <HeaderNavLink href='/projects' linkText='projects' />
          <HeaderNavLink href='/blog' linkText='blog' />
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
  const router = useRouter()

  const className = router.pathname === href ? styles['nav-link-active'] : ''
  return (
    <li>
      <Link href={href}>
        <a className={className}>{linkText}</a>
      </Link>
    </li>
  )
}
