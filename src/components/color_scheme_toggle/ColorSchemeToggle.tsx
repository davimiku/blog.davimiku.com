import Toggle from 'react-toggle'

import styles from './ColorSchemeToggle.module.scss'
import React from 'react'

type ColorScheme = 'light' | 'dark'

function useColorScheme() {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('light')

  function toggleColorScheme(newColorScheme?: ColorScheme) {
    if (!newColorScheme) {
      newColorScheme = colorScheme === 'light' ? 'dark' : 'light'
    }

    const root = document.querySelector(':root') as HTMLElement
    root.classList.remove(colorScheme)

    setColorScheme(newColorScheme)
    window.localStorage.setItem('color-scheme', newColorScheme)
    root.classList.add(newColorScheme)
  }

  React.useEffect(() => {
    // 'color-scheme.js' guarantees this value is set
    const colorScheme = window.localStorage.getItem('color-scheme') as ColorScheme
    toggleColorScheme(colorScheme)
  }, [])

  return { colorScheme, toggleColorScheme }
}

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  return (
    <div className={styles['toggle-container']}>
      <div className={`${styles['sun']} ${styles['icon']}`} />

      <label className={styles['toggle-label']}>
        <Toggle
          checked={colorScheme === 'dark'}
          onChange={() => toggleColorScheme()}
          icons={false}
        />
      </label>

      <div className={`${styles['moon']} ${styles['icon']}`} />
    </div>
  )
}
