import { FaPython, FaSass } from 'react-icons/fa'
import { SiRust, SiTypescript } from 'react-icons/si'
import { IoLogoVercel } from 'react-icons/io5'

import styles from './TechnologyBadge.module.scss'
import { useColorSchemeClass } from 'hooks/useColorScheme'

const iconMap = {
  rust: SiRust,
  python: FaPython,
  scss: FaSass,
  sass: FaSass,
  typescript: SiTypescript,
  'next.js': IoLogoVercel,
}

export type TechnologyBadgeProps = {
  technology: string
}

export function TechnologyBadge({ technology }: TechnologyBadgeProps) {
  const className = useColorSchemeClass(styles, 'badge')
  const Icon = iconMap[technology.toLowerCase()] ?? null
  console.log(Icon)
  return (
    <span className={className}>
      {Icon ? <Icon /> : null}
      &nbsp;{technology}
    </span>
  )
}
