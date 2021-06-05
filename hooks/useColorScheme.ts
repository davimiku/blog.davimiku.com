import React from 'react'
import { ColorSchemeContext } from '../contexts/color_scheme/ColorSchemeProvider'

/**
 * Provides the current color scheme value and a function to toggle the value.
 */
export function useColorScheme() {
  return React.useContext(ColorSchemeContext)
}
