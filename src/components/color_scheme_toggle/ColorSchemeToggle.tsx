import styles from './ColorSchemeToggle.module.scss'

export function ColorSchemeToggle() {
  return (
    <div className={styles['container']}>
      <div className={`${styles['sun']} ${styles['icon']}`} />
      <label className={styles['toggle']}>
        <input
          type='checkbox'
          name='scheme-toggle'
          id='scheme-toggle'
          aria-label='Toggle light and dark mode'
        />
        <span className={styles['display']} hidden></span>
      </label>
      <div className={`${styles['moon']} ${styles['icon']}`} />
    </div>
  )
}
