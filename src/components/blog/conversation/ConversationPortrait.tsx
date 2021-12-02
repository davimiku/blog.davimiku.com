import React from 'react'
import Image from 'next/image'

import { CharacterName } from './ConversationItem'

export type ConversationPortraitProps = {
  name: CharacterName
}

export function ConversationPortrait({ name }: ConversationPortraitProps) {
  return (
    <Image
      src={`/images/blog/${name}.png`}
      height={72}
      width={72}
      alt={`portrait of ${name} character`}
    />
  )
}
