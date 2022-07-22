import { useColorScheme } from 'hooks/useColorScheme'
import Toggle from 'react-toggle'
import Image from 'next/image'

import styles from './Toggle.module.scss'

export function ThemeToggle() {
  const colorSchemeContext = useColorScheme()
  if (!colorSchemeContext) return <></>

  const { colorScheme, toggleColorScheme } = colorSchemeContext
  return (
    <>
      <Image src='/images/header/sun.svg' height='32px' width='32px' />

      <label className={styles.toggleLabel}>
        <Toggle
          checked={colorScheme === 'dark'}
          onChange={() => toggleColorScheme()}
          icons={false}
        />
      </label>

      <Image src='/images/header/moon.svg' height='32px' width='32px' />
    </>
  )
}
