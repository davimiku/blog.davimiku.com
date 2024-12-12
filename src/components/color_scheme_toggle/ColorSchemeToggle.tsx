import { ChangeEvent, useEffect, useRef } from 'react'
import styles from './ColorSchemeToggle.module.scss'

const CSS_VAR_COLOR_SCHEME = '--color-scheme'

export function ColorSchemeToggle() {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newScheme = event.target.checked ? 'dark' : 'light'
    setColorScheme(newScheme, inputRef.current!)
  }

  useEffect(() => {
    const input = inputRef.current!
    let colorScheme = getSavedColorScheme()
    if (!colorScheme) {
      colorScheme = prefersDarkMode() ? 'dark' : 'light'
    }
    setColorScheme(colorScheme, input)
  }, [])

  return (
    <div className={styles['container']}>
      <div className={`${styles['sun']} ${styles['icon']}`} />
      <label className={styles['toggle']}>
        <input
          ref={inputRef}
          type='checkbox'
          name='scheme-toggle'
          id='scheme-toggle'
          aria-label='Toggle light and dark mode'
          onChange={handleChange}
        />
        <span className={styles['display']} hidden></span>
      </label>
      <div className={`${styles['moon']} ${styles['icon']}`} />
    </div>
  )
}

function getSavedColorScheme(): 'light' | 'dark' | null {
  const savedColorScheme = window.localStorage.getItem('color-scheme')
  if (savedColorScheme && (savedColorScheme === 'light' || savedColorScheme === 'dark')) {
    return savedColorScheme
  }
  // if somehow this got set to anything but 'light' or 'dark'
  if (savedColorScheme) {
    window.localStorage.removeItem('color-scheme')
  }

  return null
}

function prefersDarkMode(): boolean {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  return mediaQuery.matches
}

function setColorScheme(colorScheme: 'light' | 'dark', input: HTMLInputElement) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- root will exist
  const root: HTMLElement = document.querySelector(':root')!
  window.localStorage.setItem('color-scheme', colorScheme)
  if (colorScheme === 'light') {
    input.checked = false
    root.style.setProperty(CSS_VAR_COLOR_SCHEME, 'light')
  } else {
    input.checked = true
    root.style.setProperty(CSS_VAR_COLOR_SCHEME, 'dark')
  }
}
