// @ts-check

const CSS_VAR_COLOR_SCHEME = '--color-scheme'

let savedColorScheme = getSavedColorScheme()

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

window.addEventListener('load', () => {
  // setTimeout waits for element to be ready after client-side hydration
  // right now, it's an estimated number, need to dig into the NextJS lifecycle for a better way
  window.setTimeout(() => {
    const schemeToggle = /** @type {HTMLInputElement} */ (document.getElementById('scheme-toggle'))
    schemeToggle.addEventListener('change', toggleColorScheme)

    const savedColorScheme = getSavedColorScheme()
    setColorScheme(savedColorScheme)
  }, 200)
})

/**
 *
 * @returns {"light" | "dark" | null}
 */
function getSavedColorScheme() {
  let savedColorScheme = window.localStorage.getItem('color-scheme')
  if (savedColorScheme && (savedColorScheme === 'light' || savedColorScheme === 'dark')) {
    return savedColorScheme
  }
  // if somehow this got set to anything but 'light' or 'dark'
  if (savedColorScheme) {
    window.localStorage.removeItem('color-scheme')
  } 

  return null
}

/**
 * @param {"light" | "dark" | null} colorScheme
 */
function setColorScheme(colorScheme) {
  if (!colorScheme) return
  
  const root = /** @type {HTMLElement} */ (document.querySelector(':root'))
  const schemeToggle = /** @type {HTMLInputElement} */ (document.getElementById('scheme-toggle'))
  window.localStorage.setItem('color-scheme', colorScheme)
  if (colorScheme === 'light') {
    if (schemeToggle) schemeToggle.checked = false
    root.style.setProperty(CSS_VAR_COLOR_SCHEME, 'light')
  } else {
    if (schemeToggle) schemeToggle.checked = true
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
