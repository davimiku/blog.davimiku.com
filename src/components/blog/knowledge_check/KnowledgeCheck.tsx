import { PropsWithChildren } from 'react'
import { FaSchool } from 'react-icons/fa'

import styles from './KnowledgeCheck.module.scss'
import { EmphasisBox } from '../emphasis_box'

export type KnowledgeCheckProps = {}

export function KnowledgeCheck({ children }: PropsWithChildren<KnowledgeCheckProps>) {
  return (
    <EmphasisBox>
      <h3>
        <FaSchool />
        &nbsp; Knowledge Check
      </h3>
      {children}
    </EmphasisBox>
  )
}
