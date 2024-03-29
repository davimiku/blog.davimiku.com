import React, { PropsWithChildren } from 'react'

export type ColorScheme = 'dark' | 'light'

type ColorSchemeContextValue = {
  colorScheme: ColorScheme
  toggleColorScheme: () => void
}

export const ColorSchemeContext = React.createContext<ColorSchemeContextValue | null>(null)

/**
 * Provides the current color scheme as a context value.
 *
 * On initialization, the default value of the color scheme
 * is determined by the user's preference in their operating
 * system, defaulting to light otherwise.
 *
 * This value is also automatically updated if the user changes
 * their preference while on the page.
 *
 * To obtain the context value from any component within this
 * provider:
 *
 * ```ts
 * const { colorScheme } = useColorScheme()
 * ```
 *
 * To modify the colorScheme value by toggling between 'dark' and 'light'
 *
 * ```ts
 * const { toggleColorScheme } = useColorScheme()
 *
 * // ...
 *
 * toggleColorScheme()
 * ```
 */
export function ColorSchemeProvider({ children }: PropsWithChildren<Record<string, unknown>>) {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark')

  // true if the user hasn't toggled the color scheme themselves
  const [isUsingDefault, setIsUsingDefault] = React.useState(true)

  function setDefaultDark(event: MediaQueryListEvent) {
    if (event.matches && isUsingDefault) {
      setColorScheme('dark')
      document.body.classList.add('dark')
    }
  }

  function setDefaultLight(event: MediaQueryListEvent) {
    if (event.matches && isUsingDefault) {
      setColorScheme('light')
      document.body.classList.remove('dark')
    }
  }

  React.useEffect(() => {
    // Watch for the user changing their preferences
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    darkMediaQuery.addEventListener('change', setDefaultDark)
    if (darkMediaQuery.matches) {
      setColorScheme('dark')
      document.body.classList.add('dark')
    }

    const lightMediaQuery = window.matchMedia('(prefers-color-scheme: light)')
    lightMediaQuery.addEventListener('change', setDefaultLight)
    if (lightMediaQuery.matches) {
      setColorScheme('light')
      document.body.classList.remove('dark')
    }

    // Clean up event listeners if the context is unmounted (it won't be since it's at the root)
    return () => {
      darkMediaQuery.removeEventListener('change', setDefaultDark)
      lightMediaQuery.removeEventListener('change', setDefaultLight)
    }
  }, [])

  function toggleColorScheme() {
    setColorScheme(scheme => (scheme === 'dark' ? 'light' : 'dark'))
    setIsUsingDefault(false)
    document.body.classList.toggle('dark')
  }

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  )
}
