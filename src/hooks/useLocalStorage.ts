/**
 * Provides helper functions for working with localStorage
 */
export function useLocalStorage() {
  function getValue<T>(key: string): T | null {
    const rawValue = window.localStorage.getItem(key)
    if (rawValue === null) {
      return null
    }
    const value: T = JSON.parse(rawValue)
    return value
  }
}
