import Toggle from 'react-toggle'

import MoonIcon from './moon.svg'
import SunIcon from './sun.svg'

import styles from './Toggle.module.scss'

export type ThemeToggleProps = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <>
      <SunIcon />

      <label className={styles.toggle}>
        <Toggle icons={false} />
      </label>

      <MoonIcon />
    </>
  )
}
