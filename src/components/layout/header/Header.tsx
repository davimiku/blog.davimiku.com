import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Header.module.scss'

export function Header() {
  return (
    <nav className={styles['nav']}>
      <span>davimiku -- David's Blog</span>
      <ul className={styles['links']}>
        <HeaderNavLink href='/' linkText='home' />
        <HeaderNavLink href='/projects' linkText='projects' />
        <HeaderNavLink href='/articles' linkText='articles' />
      </ul>
    </nav>
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
