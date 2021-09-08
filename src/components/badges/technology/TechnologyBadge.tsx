import { FaPython, FaReact, FaSass } from 'react-icons/fa'
import { SiRust, SiTypescript } from 'react-icons/si'
import { IoLogoVercel } from 'react-icons/io5'

import { Badge } from 'components/badges'

const iconMap = {
  rust: SiRust,
  python: FaPython,
  scss: FaSass,
  sass: FaSass,
  typescript: SiTypescript,
  react: FaReact,
  'next.js': IoLogoVercel,
}

export type TechnologyBadgeProps = {
  technology: string
}

export function TechnologyBadge({ technology }: TechnologyBadgeProps) {
  const Icon = iconMap[technology.toLowerCase()] ?? null
  return (
    <Badge>
      {Icon ? <Icon /> : null}
      &nbsp;{technology}
    </Badge>
  )
}
