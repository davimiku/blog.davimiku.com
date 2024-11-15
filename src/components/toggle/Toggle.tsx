import { useColorScheme } from 'hooks/useColorScheme'
import Toggle from 'react-toggle'
import Image from 'next/legacy/image'

import styles from './Toggle.module.scss'

export function ThemeToggle() {
  const colorSchemeContext = useColorScheme()
  if (!colorSchemeContext) return <></>

  const { colorScheme, toggleColorScheme } = colorSchemeContext
  return (
    <>
      <Image src='/images/header/sun.svg' height={32} width={32} />

      <label className={styles.toggleLabel}>
        <Toggle
          checked={colorScheme === 'dark'}
          onChange={() => toggleColorScheme()}
          icons={false}
        />
      </label>

      <Image src='/images/header/moon.svg' height={32} width={32} />
    </>
  )
}
