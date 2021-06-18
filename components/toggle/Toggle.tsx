import { useColorScheme } from 'hooks/useColorScheme'
import Toggle from 'react-toggle'

import MoonIcon from './moon.svg'
import SunIcon from './sun.svg'

import styles from './Toggle.module.scss'

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  return (
    <>
      <SunIcon />

      <label className={styles.toggleLabel}>
        <Toggle
          checked={colorScheme === 'dark'}
          onChange={() => toggleColorScheme()}
          icons={false}
        />
      </label>

      <MoonIcon />
    </>
  )
}
