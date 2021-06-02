import Link from 'next/link'
import Headroom from 'react-headroom'
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
        <div>
          <Link href='/blog'>
            <a>blog</a>
          </Link>
          <Link href='/projects'>
            <a>projects</a>
          </Link>
        </div>
      </nav>
    </Headroom>
  )
}
