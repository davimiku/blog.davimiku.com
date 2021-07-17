import styles from './Badge.module.scss'
import { useColorSchemeClass } from 'hooks/useColorScheme'
import { ReactNode } from 'react'

export type BadgeProps = {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  const className = useColorSchemeClass(styles, 'badge')
  return <span className={className}>{children}</span>
}
