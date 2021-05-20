import Link from 'next/link'
import styles from './Header.module.scss'

export function Header() {
  return (
    <nav className={styles.nav}>
      <h1>Next Blog</h1>
      <div>
        <Link href='/'>
          <a>Blog</a>
        </Link>
        <Link href='/'>
          <a>About</a>
        </Link>
      </div>
    </nav>
  )
}
