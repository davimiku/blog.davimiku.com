import { useColorSchemeClass } from 'hooks/useColorScheme'
import React from 'react'

import styles from './ConversationItem.module.scss'
import { ConversationPortrait } from './ConversationPortrait'

export type CharacterName = 'author' | 'eager-beaver'

export type ConversationItemProps = {
  children: React.ReactNode
  name: CharacterName
}

export function ConversationItem({ children, name }: ConversationItemProps) {
  const className = useColorSchemeClass(styles, 'container')

  if (name === 'author') {
    return (
      <div className={className}>
        <div>{children}</div>
        <ConversationPortrait name={name} />
      </div>
    )
  }

  return (
    <div className={className}>
      <ConversationPortrait name={name} />
      <div>{children}</div>
    </div>
  )
}
