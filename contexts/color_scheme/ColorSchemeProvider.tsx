import React, { PropsWithChildren } from 'react'

export type ColorScheme = 'dark' | 'light'

type ColorSchemeContextValue = {
  colorScheme: ColorScheme
  toggleColorScheme: () => void
}

const ColorSchemeContext = React.createContext<ColorSchemeContextValue>(null)

/**
 * Provides the current color scheme as a context value.
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
export function ColorSchemeProvider({ children }: PropsWithChildren<{}>) {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark')

  function toggleColorScheme() {
    setColorScheme((scheme) => (scheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, toggleColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  )
}

/**
 * Provides the current color scheme value and a function to toggle the value.
 */
export function useColorScheme() {
  return React.useContext(ColorSchemeContext)
}
