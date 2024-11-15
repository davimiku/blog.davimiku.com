import { PropsWithChildren } from 'react'
import { FaLightbulb } from 'react-icons/fa'

import { EmphasisBox } from '../emphasis_box/EmphasisBox'

export type NewConceptProps = {
  title: string
}

export function NewConcept({ title, children }: PropsWithChildren<NewConceptProps>) {
  return (
    <EmphasisBox>
      <h3>
        <FaLightbulb />
        &nbsp; New Concept: {title}
      </h3>
      {children}
    </EmphasisBox>
  )
}
