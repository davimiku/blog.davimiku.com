import { Badge } from 'components/badges'
import React from 'react'
import { IoIosConstruct } from 'react-icons/io'

export type PublishDateProps = {
  date?: Date
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
  return <span>{date.toDateString()}</span>
}
