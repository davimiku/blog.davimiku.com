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
        <div className={styles.centerVertically}>
          <Link href='/blog'>
            <a>blog</a>
          </Link>
          <Link href='/projects'>
            <a>projects</a>
          </Link>
        </div>
        <div className={styles.themeContainer}>
          <ThemeToggle />
        </div>
      </nav>
    </Headroom>
  )
}
