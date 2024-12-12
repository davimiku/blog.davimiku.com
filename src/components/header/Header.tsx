import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FaGithub, FaRss } from 'react-icons/fa'
import styles from './Header.module.scss'

const ColorSchemeToggle = dynamic(
  () => import('../color_scheme_toggle/ColorSchemeToggle').then(module => module.ColorSchemeToggle),
  { ssr: false }
)

export function Header() {
  return (
    <nav className={styles['nav']}>
      <div className={styles['title-links-container']}>
        <span>davimiku -- David's Blog</span>
        <ul className={styles['links']}>
          <HeaderNavLink href='/'>home</HeaderNavLink>
          <HeaderNavLink href='/articles'>articles</HeaderNavLink>
          <HeaderNavLink href='/projects'>projects</HeaderNavLink>
          <HeaderNavLink href='/rss.xml'>
            rss <FaRss />
          </HeaderNavLink>
          <HeaderNavLink href='https://github.com/davimiku'>
            github <FaGithub />
          </HeaderNavLink>
        </ul>
      </div>
      <ColorSchemeToggle />
    </nav>
  )
}

export type HeaderNavLinkProps = React.PropsWithChildren<{
  href: string
}>

export function HeaderNavLink({ href, children }: HeaderNavLinkProps) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  )
}
