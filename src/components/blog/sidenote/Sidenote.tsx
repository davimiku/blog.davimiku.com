import React from 'react'

export type SideNoteProps = React.PropsWithChildren<{
  id: string
}>

export function SideNote({ id, children }: SideNoteProps) {
  const fullId = `sn-${id}`
  return (
    <>
      <label htmlFor={fullId} className='margin-toggle sidenote-number'></label>
      <input type='checkbox' id={fullId} className='margin-toggle' />
      <span className='sidenote'>{children}</span>
    </>
  )
}
