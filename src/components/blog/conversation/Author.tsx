import React from 'react'

import { ConversationItem } from './ConversationItem'

export type AuthorProps = {
  children: React.ReactNode
}

export function Author({ children }: AuthorProps) {
  return <ConversationItem name='author'>{children}</ConversationItem>
}
