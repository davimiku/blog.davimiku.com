import { type PropsWithChildren } from 'react'

export type MarginNoteProps = PropsWithChildren<{
  id: string
}>

export function MarginNote({ id, children }: MarginNoteProps) {
  const fullId = `mn-${id}`
  return (
    <>
      <label htmlFor={fullId} className='margin-toggle'>
        &#8853;
      </label>
      <input type='checkbox' id={fullId} className='margin-toggle' />
      <span className='marginnote'>{children}</span>
    </>
  )
}
