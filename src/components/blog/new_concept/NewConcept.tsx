import { PropsWithChildren } from 'react'
import { FaLightbulb } from 'react-icons/fa'

import styles from './NewConcept.module.scss'
import { EmphasisBox } from '../emphasis_box'

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
