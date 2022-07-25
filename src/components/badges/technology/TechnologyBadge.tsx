import { FaPython, FaReact, FaSass } from 'react-icons/fa'
import { SiRust, SiTypescript } from 'react-icons/si'
import { IoLogoVercel } from 'react-icons/io5'

import { Badge } from 'components/badges'
import { IconType } from 'react-icons'

type Technology = 'Rust' | 'Python' | 'SCSS' | 'TypeScript' | 'React' | 'Next.js'
const iconMap: Record<Technology, IconType> = {
  Rust: SiRust,
  Python: FaPython,
  SCSS: FaSass,
  TypeScript: SiTypescript,
  React: FaReact,
  'Next.js': IoLogoVercel,
}

export type TechnologyBadgeProps = {
  technology: string
}

function isIcon(input: string): input is keyof typeof iconMap {
  return Object.keys(iconMap).includes(input)
}

export function TechnologyBadge({ technology }: TechnologyBadgeProps) {
  const Icon = isIcon(technology) ? iconMap[technology] : null
  return (
    <Badge>
      {Icon && <Icon />} &nbsp;{technology}
    </Badge>
  )
}
