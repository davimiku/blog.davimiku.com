// @ts-check

let savedColorScheme = /** @type {"light" | "dark" | null} */ (
  window.localStorage.getItem('color-scheme')
)
// if somehow this got set to anything but 'light' or 'dark'
if (savedColorScheme && savedColorScheme !== 'light' && savedColorScheme !== 'dark') {
  savedColorScheme = null
  window.localStorage.removeItem('color-scheme')
}

if (savedColorScheme) {
  setColorScheme(savedColorScheme)
} else {
  const lightMediaQuery = window.matchMedia('(prefers-color-scheme: light)')
  if (lightMediaQuery.matches) {
    setColorScheme('light')
  } else {
    setColorScheme('dark')
  }
}

/**
 * @param {"light" | "dark"} colorScheme
 */
function setColorScheme(colorScheme) {
  const root = /** @type {HTMLElement} */ (document.querySelector(':root'))
  window.localStorage.setItem('color-scheme', colorScheme)
  root.classList.remove('light', 'dark')
  root.classList.add(colorScheme)
}
