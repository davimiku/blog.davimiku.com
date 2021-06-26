import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRust, faPython } from '@fortawesome/free-brands-svg-icons'

import styles from './TechnologyBadge.module.scss'
import { useColorSchemeClass } from 'hooks/useColorScheme'

const iconMap = {
  rust: faRust,
  python: faPython,
}

export type TechnologyBadgeProps = {
  technology: string
}

export function TechnologyBadge({ technology }: TechnologyBadgeProps) {
  const className = useColorSchemeClass(styles, 'badge')
  const icon = iconMap[technology.toLowerCase()] ? (
    <FontAwesomeIcon icon={iconMap[technology.toLowerCase()]} />
  ) : null
  return (
    <span className={className}>
      {icon}&nbsp;{technology}
    </span>
  )
}
