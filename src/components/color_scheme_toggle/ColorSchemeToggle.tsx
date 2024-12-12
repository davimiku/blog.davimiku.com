'use client'

import { ChangeEvent, useLayoutEffect, useState } from 'react'
import styles from './ColorSchemeToggle.module.scss'

const CSS_VAR = '--color-scheme'
const LOCAL_STORAGE_KEY = 'color-scheme'

export function ColorSchemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(getSavedColorScheme() === 'dark')

  useLayoutEffect(() => {
    const colorScheme = getSavedColorScheme()
    setIsDarkMode(colorScheme === 'dark')
  }, [])

  function handleChange({ target: { checked } }: ChangeEvent<HTMLInputElement>) {
    setIsDarkMode(checked)
    setGlobalColorScheme(checked ? 'dark' : 'light')
  }

  return (
    <div className={styles['container']}>
      <div className={`${styles['sun']} ${styles['icon']}`} />
      <label className={styles['toggle']}>
        <input
          checked={isDarkMode}
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

function getSavedColorScheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'

  const savedColorScheme = window.localStorage.getItem(LOCAL_STORAGE_KEY)
  if (savedColorScheme && (savedColorScheme === 'light' || savedColorScheme === 'dark')) {
    return savedColorScheme
  }

  // if somehow this got set to anything but 'light' or 'dark' clear it
  if (savedColorScheme) {
    window.localStorage.removeItem(LOCAL_STORAGE_KEY)
  }

  // fallback to user's preferences
  if (prefersDarkMode()) {
    setGlobalColorScheme('dark')
    return 'dark'
  } else {
    setGlobalColorScheme('light')
    return 'light'
  }
}

function prefersDarkMode(): boolean {
  if (typeof window === 'undefined') return false

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  return mediaQuery.matches
}

/**
 * Set localStorage and DOM manipulation outside of React's purview
 */
function setGlobalColorScheme(colorScheme: 'light' | 'dark') {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, colorScheme)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- root will exist
  const root: HTMLElement = document.querySelector(':root')!
  root.style.setProperty(CSS_VAR, colorScheme)
}
