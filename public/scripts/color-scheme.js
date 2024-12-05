// @ts-check

const CSS_VAR_COLOR_SCHEME = '--color-scheme'

window.addEventListener('DOMContentLoaded', () => {
  const schemeToggle = /** @type {HTMLInputElement} */ (document.getElementById('scheme-toggle'))
  schemeToggle.addEventListener('change', toggleColorScheme)

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
})

/**
 * @param {"light" | "dark"} colorScheme
 */
function setColorScheme(colorScheme) {
  const root = /** @type {HTMLElement} */ (document.querySelector(':root'))
  const schemeToggle = /** @type {HTMLInputElement} */ (document.getElementById('scheme-toggle'))
  window.localStorage.setItem('color-scheme', colorScheme)
  if (colorScheme === 'light') {
    schemeToggle.checked = false
    root.style.setProperty(CSS_VAR_COLOR_SCHEME, 'light')
  } else {
    schemeToggle.checked = true
    root.style.setProperty(CSS_VAR_COLOR_SCHEME, 'dark')
  }
}

function toggleColorScheme(event) {
  const root = /** @type {HTMLElement} */ (document.querySelector(':root'))
  const schemeToggle = /** @type {HTMLInputElement} */ (document.getElementById('scheme-toggle'))
  const isDark = schemeToggle.checked
  if (isDark) {
    window.localStorage.setItem('color-scheme', 'dark')
    root.style.setProperty(CSS_VAR_COLOR_SCHEME, 'dark')
  } else {
    window.localStorage.setItem('color-scheme', 'light')
    root.style.setProperty(CSS_VAR_COLOR_SCHEME, 'light')
  }
}
