import React from 'react'
import { IoIosConstruct } from 'react-icons/io'

import { Badge } from 'components/badges'

export type PublishDateProps = {
  date?: string
}

export function PublishDate({ date }: PublishDateProps) {
  if (!date) {
    return (
      <Badge>
        <IoIosConstruct />
        &nbsp;Work in progress&nbsp;
        <IoIosConstruct />
      </Badge>
    )
  }
  const formattedDate = new Date(date).toLocaleDateString()
  return <span>{formattedDate}</span>
}
