import React from 'react'
import classnames, { Argument } from 'classnames'

import { ColorSchemeContext } from 'color_scheme'

export type ScssModuleStyles = {
  readonly [key: string]: string
}

/**
 * Provides the current color scheme value and a function to toggle the value.
 */
export function useColorScheme() {
  return React.useContext(ColorSchemeContext)
}

/**
 * Returns the classname for use in the element which automatically
 * checks for the darkmode theme and returns the appropriate class.
 *
 * Pass the `styles` object that is imported from the SCSS Module
 * and the class name which will automatically adjust for dark theme.
 *
 * For example:
 * ```scss
 * .my-main {
 *   padding: 0 5rem;
 * }
 *
 * .my-main--dark {
 *  background-color: black;
 *  color: white;
 * }
 * ```
 *
 * and in the component:
 * ```ts
 * import styles from './Main.module.scss'
 *
 * const mainClassName = useColorSchemeClass(styles, 'my-main')
 * ```
 */
export function useColorSchemeClass(styles: ScssModuleStyles, className: string): string {
  const colorSchemeContext = useColorScheme()
  if (colorSchemeContext) {
    const { colorScheme } = colorSchemeContext
    const darkKey = className + '--dark'
    const darkStyle = styles[darkKey]
    const additionalClasses: Argument = {}
    if (darkStyle) {
      additionalClasses[darkStyle] = colorScheme === 'dark'
    }
    return classnames(styles[className], additionalClasses)
  }
  return ''
}
